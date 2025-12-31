"use client";

import { ReactNode, useEffect, useState } from "react";
import { AlertsAlert, AlertsConfirm, AlertsInput } from "@/components/Own";
import { AlertsAlertType, AlertsConfirmType, AlertsInputType, AlertsInputResult } from "@/types";

export function AlertProvider({ children }: { children: ReactNode }) {
	const [alert, setAlert] = useState<AlertsAlertType>({
		type: "alert",
		visible: false,
	});

	const [confirm, setConfirm] = useState<AlertsConfirmType>({
		type: "confirm",
		visible: false,
	});

	const [input, setInput] = useState<AlertsInputType>({
		type: "confirm",
		visible: false,
	});

	useEffect(() => {
		global.alerts = {
			alert: (config) => {
				setAlert({
					type: "alert",
					visible: true,
					...config,
					onClose: () => {
						config.onClose?.();
						setAlert({ type: "alert", visible: false });
					},
				});
			},

			confirm: (config) => {
				return new Promise<boolean>((resolve) => {
					setConfirm({
						type: "confirm",
						visible: true,
						...config,
						resolver: (value) => {
							resolve(value);
							setConfirm({ type: "confirm", visible: false });
						},
					});
				});
			},

			input: (config) => {
				return new Promise<AlertsInputResult>((resolve) => {
					setInput({
						type: "input",
						visible: true,
						...config,
						resolver: (result) => {
							resolve(result);
							setInput({ type: "input", visible: false });
						},
					});
				});
			},
		};

		return () => {
			global.alerts = undefined as unknown as typeof global.alerts;
		};
	}, []);

	return (
		<>
			{children}
			<AlertsAlert {...alert} />
			<AlertsConfirm {...confirm} />
			<AlertsInput {...input} />
		</>
	);
}
