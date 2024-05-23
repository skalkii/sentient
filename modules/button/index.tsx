import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface ButtonProps {
  title?: string;
  type: string;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  icon?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type,
  clickHandler,
  disabled = false,
  icon,
  className,
}) => {
  return (
    <button
      className={classNames("button", type, className)}
      disabled={disabled}
      onClick={clickHandler}
    >
      {icon ? <Image src={icon} alt={"views"} height={18} width={18} /> : null}
      {title}
    </button>
  );
};

export default Button;
