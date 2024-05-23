import Challenge from "@/components/challenge";
import styles from "./page.module.scss";
import ChallengeDetails from "@/components/challengeDetails";

export default function Home() {
  return (
    <main className={styles.main}>
      <Challenge>
        <ChallengeDetails />
      </Challenge>
    </main>
  );
}
