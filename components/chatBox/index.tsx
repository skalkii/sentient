"use client";

import React, { useState } from "react";
import styles from "./chatBox.module.scss";
import Button from "@/modules/button";
import useScroll from "@/utils/useScroll";
import classNames from "classnames";

const ChatBox = () => {
  const [chat, setChat] = useState("");
  const { scrolled } = useScroll();

  return (
    <div
      className={classNames(
        styles.chatBoxContainer,
        scrolled ? styles.scrolled : undefined
      )}
    >
      <input
        className="input"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Ask me anything!"
      />
      <Button type="solid" icon="/assets/icons/arrowUp.svg" />
    </div>
  );
};

export default ChatBox;
