import React, { ReactNode } from "react";
import Topics from "../topics";
import styles from "./challenge.module.scss";

import { SPOTIFY_CHALLENGE_DATA } from "@/content";
import ChallengeHeader from "../challengeHeader";
import TopicDetails from "../topicDetails";
import ChatBox from "../chatBox";

const Challenge = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.challengeContainer}>
      <Topics topics={SPOTIFY_CHALLENGE_DATA.topics} />
      <ChallengeHeader {...SPOTIFY_CHALLENGE_DATA} />
      {children}
      <div className={styles.topicDetailsWrapper}>
        {SPOTIFY_CHALLENGE_DATA.topics.map((topic) => {
          const { id } = topic;
          return <TopicDetails key={id} {...topic} />;
        })}
      </div>
      <ChatBox />
    </div>
  );
};

export default Challenge;
