"use client";

import React from "react";
import styles from "./challengeHeader.module.scss";

import { ChallengeDataPropTypes } from "@/content";
import Image from "next/image";
import Button from "@/modules/button";
import useScroll from "@/utils/useScroll";
import classNames from "classnames";

const ChallengeHeader = ({
  author,
  icon,
  views,
  likes,
  shares,
  title,
  description,
  prizes,
}: ChallengeDataPropTypes) => {
  const [scrolled] = useScroll();
  return (
    <div className={classNames(styles.challengeHeaderContainer)}>
      <div
        className={classNames(
          styles.detailsWrapper,
          scrolled ? styles.scrolled : undefined
        )}
      >
        <div className={styles.authorWrapper}>
          <p className={scrolled ? styles.hide : undefined}>{`By ${author}`}</p>
          <Image src={icon} alt={"author"} height={24} width={24} />
          <span
            className={classNames(
              styles.viewsWrapper,
              scrolled ? styles.hide : undefined
            )}
          >
            <Image
              src={"/assets/icons/views.svg"}
              alt={"views"}
              height={14}
              width={14}
            />
            <span>{views}</span>
            <Image
              src={"/assets/icons/share.svg"}
              alt={"author"}
              height={14}
              width={14}
            />
            <span>{shares}</span>
          </span>
          <span
            className={classNames(
              styles.viewsWrapper,
              scrolled ? styles.hide : undefined
            )}
          >
            <Image
              src={"/assets/icons/like.svg"}
              alt={"like"}
              height={14}
              width={14}
            />
            <span>{likes}</span>
          </span>
        </div>
        <h3>{title}</h3>
        <p className={scrolled ? styles.hide : undefined}>{description}</p>
        <div className={styles.btnWrapper}>
          <Button title="🔒 Participate" type="solid" />
          <Button
            className={scrolled ? styles.hide : undefined}
            icon="/assets/icons/export.svg"
            type="solid"
          />
        </div>
      </div>
      <div
        className={classNames(
          styles.prizeContainer,
          scrolled ? styles.hide : undefined
        )}
      >
        {prizes.map(({ label, icon }, index) => {
          return (
            <div key={`prize-${index}`} className={styles.prizeSingle}>
              <Image src={icon} alt={"views"} height={45} width={45} />
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengeHeader;
