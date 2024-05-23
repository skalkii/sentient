import React, { CSSProperties } from "react";
import DOMPurify from "dompurify";

export interface RichTextPropType {
  content: string | Node;
  className?: string;
  style?: CSSProperties;
}

const RichText = ({ content, className, style }: RichTextPropType) => {
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_ATTR: [
      "style",
      "class",
      "type",
      "href",
      "rel",
      "target",
      "alt",
      "src",
    ],
    ADD_TAGS: ["iframe", "video"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={"rich-text " + className}
      style={style}
    />
  );
};

export default RichText;
