import styles from "../page.module.scss";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}
