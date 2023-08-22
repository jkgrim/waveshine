import Navbar from "@/components/Navbar";
import styles from "@/styles/page.module.scss";

export default function Slippi() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />

        <div className="slippi-container">
          <h1>Installing Slippi</h1>
        </div>
      </div>
    </main>
  );
}
