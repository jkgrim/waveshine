import Navbar from "@/components/Navbar";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />

        <div className="guides-container">
          <h1>Character Guides</h1>
        </div>
      </div>
    </main>
  );
}
