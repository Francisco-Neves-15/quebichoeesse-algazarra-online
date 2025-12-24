import { ReactNode, ReactElement } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
	variants?: "primary" | "secondary" | "ghost" | "danger";
	onClick?: () => void;
	disable?: boolean;
	children?: ReactNode;
	text?: string;
	icon?: ReactElement;
}

const Button = ({
	variants = "primary",
	onClick,
	disable = false,
	children,
	text,
	icon,
}: ButtonProps) => {
	const variantStyle = {
		primary: styles.btnPrimary,
		secondary: styles.btnSecondary,
		ghost: styles.btnGhost,
		danger: styles.btnDanger,
	}[variants];

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

export default Button;
