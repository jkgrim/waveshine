import Navbar from "@/components/Navbar";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
        {/* TODO: Write up section going over different styles of controllers, box controllers, controllers to avoid, include video of pros takes */}
      </div>
    </main>
  );
}
