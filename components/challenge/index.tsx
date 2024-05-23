import React from "react";
import Topics from "../topics";
import styles from "./challenge.module.scss";

import { SPOTIFY_CHALLENGE_DATA } from "@/content";

const Challenge = () => {
  return (
    <div className={styles.challengeContainer}>
      <Topics topics={SPOTIFY_CHALLENGE_DATA.topics} />
      Challenge
    </div>
  );
};

export default Challenge;
