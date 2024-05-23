import Challenge from "@/components/challenge";
import styles from "../page.module.scss";
import Submission from "@/components/submission";

export default function Home() {
  return (
    <main className={styles.main}>
      <Challenge>
        <Submission />
      </Challenge>
    </main>
  );
}
