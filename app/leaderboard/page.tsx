import Challenge from "@/components/challenge";
import styles from "../page.module.scss";
import LeaderBoard from "@/components/leaderboard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Challenge>
        <LeaderBoard />
      </Challenge>
    </main>
  );
}
