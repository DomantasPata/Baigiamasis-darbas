import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.leftSection}>
        <header className={styles.header}>
          <h1>Welcome to the Event</h1>
        </header>
        <div className={styles.buttons}>
          <Link to="/login">
            <button className={styles.loginBtn}>Log In</button>
          </Link>
          <Link to="/register">
            <button className={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </section>

      <section className={styles.rightSection}>
        <div className={styles.eventInfo}>
          <h2>About the Event</h2>
          <p>
            Join us for an extraordinary experience filled with exciting
            activities, insightful guest speakers, and plenty of opportunities
            to connect with others. This event is perfect for those looking to
            network, learn, and have a great time.
          </p>
        </div>
      </section>
    </div>
  );
}
