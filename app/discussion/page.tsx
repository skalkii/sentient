import Challenge from "@/components/challenge";
import styles from "../page.module.scss";
import Discussion from "@/components/discussion";

export default function Home() {
  return (
    <main className={styles.main}>
      <Challenge>
        <Discussion />
      </Challenge>
    </main>
  );
}
