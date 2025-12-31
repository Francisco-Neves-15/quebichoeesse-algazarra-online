"use client";

import { ReactNode, useEffect, useState } from "react";
import { Alert, Confirm } from "@/components/Own";
import { AlertType, ConfirmType } from "@/types";

export function AlertProvider({ children }: { children: ReactNode }) {
	const [alert, setAlert] = useState<AlertType>({
		type: "alert",
		visible: false,
	});

	const [confirm, setConfirm] = useState<ConfirmType>({
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
		};

		return () => {
			global.alerts = undefined as unknown as typeof global.alerts;
		};
	}, []);

	return (
		<>
			{children}
			<Alert {...alert} />
			<Confirm {...confirm} />
		</>
	);
}
