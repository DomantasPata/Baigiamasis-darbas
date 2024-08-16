import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.leftSection}>
        <header className={styles.header}>
          <h1>Welcome to Lithuanian Rally Championship 2024</h1>
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
          <h2>About championship</h2>
          <p>
            The Lithuanian Rally Championship began in the mid-1980s, when a
            small group of motorsport enthusiasts from Vilnius started
            organizing informal races through the country’s rugged terrains. Led
            by former rally driver, the first official championship took place
            in 1985 with participants driving modified Soviet-era cars. Despite
            humble beginnings, the championship quickly grew in popularity,
            especially after the fall of the Soviet Union, which brought in
            Western cars and sponsors.
          </p>
          <p>
            By the early 2000s, the Lithuanian Rally Championship had gained
            international recognition, attracting drivers from across Europe and
            becoming a key event in the motorsport calendar. In 2015, it was
            officially included in the European Rally Championship circuit,
            marking a new era of growth and prestige. Today, the championship is
            celebrated for its challenging routes and passionate fan base,
            symbolizing Lithuania’s deep-rooted love for rally racing.
          </p>
        </div>
      </section>
    </div>
  );
}
