import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ParticipantTable.module.css";
import UpdateModal from "../UpdateModal/UpdateModal.jsx";
import AddParticipantModal from "../AddParticipantModal/AddParticipantModal.jsx";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function ParticipantTable() {
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addParticipantModalOpen, setAddParticipantModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    axios
      .get(`${API_HOST}/participants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setParticipants(response.data);
      })
      .catch((err) => alert("Someting went wrong"));
  }, []);

  async function handleDelete(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this participant?"
    );

    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`${API_HOST}/participants/${id}`);
      setParticipants(
        participants.filter((participant) => participant._id !== id)
      );
    } catch (err) {
      alert("Failed to delete participant");
    }
  }

  async function handleUpdate(id, updatedData) {
    try {
      await axios.put(`${API_HOST}/participants/${id}`, updatedData);
      setParticipants(
        participants.map((participant) =>
          participant._id === id
            ? { ...participant, ...updatedData }
            : participant
        )
      );
      setModalOpen(false);
    } catch (err) {
      alert("Failed to delete participant");
    }
  }
  function openModal(participant) {
    setSelectedParticipant(participant);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedParticipant(null);
    setModalOpen(false);
  }
  async function handleAdd(newParticipant) {
    try {
      const response = await axios.post(
        `${API_HOST}/participants`,
        newParticipant
      );
      setParticipants([...participants, response.data]);
      setAddParticipantModalOpen(false);
    } catch (err) {
      alert("Failed to add participant");
    }
  }
  function openAddParticipantModal() {
    setAddParticipantModalOpen(true);
  }

  function closeAddParticipantModal() {
    setAddParticipantModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <h1>Registered Rally Participants</h1>
      <button className={styles.addButton} onClick={openAddParticipantModal}>
        Add new
      </button>
      <div className={styles.participantGrid}>
        {participants.map((participant, index) => (
          <div key={index} className={styles.participantTable}>
            <table>
              <thead>
                <tr>
                  <th>Participant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{participant.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{participant.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{participant.email}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{participant.age}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div className={styles.buttonGroup}>
                      <button
                        className={styles.updateButton}
                        onClick={() => openModal(participant)}
                      >
                        Update
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(participant._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {modalOpen && selectedParticipant && (
        <UpdateModal
          participant={selectedParticipant}
          onClose={closeModal}
          onUpdate={handleUpdate}
        />
      )}
      {addParticipantModalOpen && (
        <AddParticipantModal
          onClose={closeAddParticipantModal}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
