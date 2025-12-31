import { ReactNode } from "react";

export type AlertsTypes = "alert" | "confirm" | "input";

export interface AlertsBaseType {
	type: AlertsTypes;
	visible?: boolean;
	title?: string;
	message?: string;
	html?: ReactNode;
}

export interface AlertType extends AlertsBaseType {
	btnText?: string;
	onClose?: () => void;
	duration?: number;
	showDuration?: boolean;
}

export interface ConfirmType extends AlertsBaseType {
	resolver?: (value: boolean) => void;
	btnCancelText?: string;
	btnConfirmText?: string;
}
