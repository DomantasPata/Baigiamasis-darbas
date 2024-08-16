import { useState } from "react";
import axios from "axios";
import styles from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function Register() {
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

    if (password.length < 8 || password.length > 32) {
      errors.push("Password must be between 8 and 32 characters long.");
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await axios.post(`${API_HOST}/register`, {
        username,
        password,
      });

      setSuccess(
        "Registration successful. You will be redirected to the login page in a second."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      setError("");
    } catch (err) {
      setError("Registration failed. Try again.");
      setSuccess("");
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.formSection}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Back to Home Page
        </button>
        <h2>Register</h2>
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
          <button type="submit">Register</button>

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
