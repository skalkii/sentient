"use client";

import React, { useState } from "react";
import styles from "./topics.module.scss";
import { TopicType } from "@/content";
import classNames from "classnames";

interface TopicsPropTypes {
  topics: TopicType[];
}

const Topics = ({ topics }: TopicsPropTypes) => {
  const [activeTopic, setActiveTopic] = useState("introduction");

  return (
    <div className={styles.topicsContainer}>
      {topics.map(({ id, titleImage, title, iconText }, index) => {
        return (
          <div
            key={id}
            id={id}
            className={classNames(
              styles.topicCard,
              [2, 3].includes(index % 4)
                ? styles.squareSmall
                : [1].includes(index % 4)
                ? styles.square
                : styles.rectangle
            )}
            style={
              activeTopic === id
                ? { backgroundImage: `url(${titleImage})` }
                : {}
            }
            onClick={() => setActiveTopic(id)}
          >
            <p style={activeTopic === id ? { opacity: 0 } : {}}>{iconText}</p>
            <p style={activeTopic === id ? { color: "white" } : {}}>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
