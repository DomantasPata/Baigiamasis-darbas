import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../RegisterPage/RegisterPage.module.css";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setValidationErrors([]);

    const errors = [];

    if (username.length < 3 || username.length > 12) {
      errors.push("Username must be between 3 and 12 characters long.");
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await axios.post(`${API_HOST}/login`, {
        username,
        password,
      });

      // Handle success
      setSuccess("Login successful");
      // Redirect or handle login success as needed
    } catch (err) {
      setError("Login failed. Please try again.");
      setSuccess("");
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.formSection}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Back to Home Page
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>

          {validationErrors.length > 0 && (
            <ul className={styles.validationErrors}>
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
        </form>
      </section>
    </div>
  );
}
