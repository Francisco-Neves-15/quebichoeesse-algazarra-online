import { AlertType, ConfirmType } from "@/types";

declare global {
	var alerts: {
		alert: (config: Omit<AlertType, "visible" | "type">) => void;
		confirm: (config: Omit<ConfirmType, "visible" | "type" | "resolver">) => Promise<boolean>;
	};
}

export {};
