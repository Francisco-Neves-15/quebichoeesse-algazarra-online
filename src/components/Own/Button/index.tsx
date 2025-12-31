"use client";

import { ReactNode, ReactElement } from "react";

import styles from "./style.module.scss";

type ButtonVariants = "primary" | "secondary" | "neutral" | "ghost" | "danger";

interface ButtonProps {
	variant?: ButtonVariants;
	onClick?: () => void;
	disable?: boolean;
	children?: ReactNode;
	text?: string;
	icon?: ReactElement;
}

export const Button = ({
	variant = "primary",
	onClick,
	disable = false,
	children,
	text,
	icon,
}: ButtonProps) => {
	const variantStyle = {
		primary: styles.btnPrimary,
		secondary: styles.btnSecondary,
		neutral: styles.neutral,
		ghost: styles.btnGhost,
		danger: styles.btnDanger,
	}[variant];

	return (
		<button
			className={`
        ${styles.btn} 
        ${variantStyle} 
        ${icon ? styles.btnIcon : ""}
        ${disable ? styles.btnDisable : ""}
      `}
			onClick={disable ? () => {} : onClick}
			disabled={disable}
			inert={disable}
		>
			{icon && icon}
			{children && children}
			{text && <p className="btnText">{text}</p>}
		</button>
	);
};
