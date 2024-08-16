import { useState } from "react";
import styles from "./UpdateModal.module.css";

export default function UpdateModal({ participant, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    age: participant.age,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleUpdate() {
    onUpdate(participant._id, formData);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Update Participant</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className={styles.confirmButton}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
