"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";
import {
  motion,
  animate,
  type TargetAndTransition,
  type Transition,
} from "motion/react";

type ButtonProps = {
  children?: ReactNode;

  variant?: "primary" | "secondary" | "outline" | "secondOutline" | "danger";

  type?: "button" | "submit" | "reset";

  disabled?: boolean;

  loading?: boolean;

  onClick?: () => void;

  className?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  whileDrag?: TargetAndTransition;
  whileFocus?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: Transition;
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
  whileHover,
  whileTap,
  whileDrag,
  whileFocus,
  whileInView,
  transition,
  animate,
}: ButtonProps) => {
  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800",
    secondary: "bg-white text-black border border-black hover:bg-zinc-100",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    secondOutline:
      "border border-neutral-600 hover:bg-neutral-900 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 ",
        variants[variant],
        (disabled || loading) && "cursor-not-allowed opacity-50",
        className,
      )}
      whileHover={whileHover}
      whileTap={whileTap}
      whileDrag={whileDrag}
      whileFocus={whileFocus}
      whileInView={whileInView}
      transition={transition}
      animate={animate}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </motion.button>
  );
};

export default Button;
