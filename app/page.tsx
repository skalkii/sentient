import Challenge from "@/components/challenge";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Challenge />
    </main>
  );
}
