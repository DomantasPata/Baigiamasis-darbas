import { useState } from "react";
import styles from "./AddParticipantModal.module.css";

export default function AddParticipantModal({ onClose, onAdd }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  function handleAgeChange(e) {
    const value = e.target.value;

    if (!Number.isInteger(Number(value))) {
      alert("Age must be an integer.");
      return;
    }

    if (value < 0) {
      alert("Age cannot be less than 0.");
      return;
    }

    if (value > 100) {
      alert("Age cannot be more than 100.");
      return;
    }

    setAge(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newParticipant = { firstName, lastName, email, age };
    onAdd(newParticipant);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add New Participant</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              required
            />
          </label>
          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Add
            </button>
            <button className={styles.cancelButton} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
