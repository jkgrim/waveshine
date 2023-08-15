import Navbar from "@/components/Navbar";
import styles from "../../styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
      </div>

      <div className="frame-data-container">
        <a href="https://meleeframedata.com/" target="_blank">
          Frame Data
        </a>
      </div>
    </main>
  );
}
