"use client";

import React from "react";
import styles from "./topicDetails.module.scss";
import { TopicType } from "@/content";
import RichText from "@/modules/richText";
import Image from "next/image";

const TopicDetails = ({
  id,
  description,
  descriptionImage,
  title,
}: TopicType) => {
  return (
    <div id={id} className={styles.topicDetailsContainer}>
      <h3>{title}</h3>
      <RichText content={description} />
      {descriptionImage ? (
        <Image src={descriptionImage} alt={"author"} height={200} width={300} />
      ) : null}
    </div>
  );
};

export default TopicDetails;
