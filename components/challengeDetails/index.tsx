import React from "react";
import styles from "./challengeDetails.module.scss";

import { SPOTIFY_CHALLENGE_DATA } from "@/content";
import TopicDetails from "../topicDetails";

const ChallengeDetails = () => {
  return (
    <div className={styles.topicDetailsWrapper}>
      {SPOTIFY_CHALLENGE_DATA.topics.map((topic) => {
        const { id } = topic;
        return <TopicDetails key={`topic-details-${id}`} {...topic} />;
      })}
    </div>
  );
};

export default ChallengeDetails;
