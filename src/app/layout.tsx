import type { Metadata } from "next";

import "./globals.css";
import "@/styles/themes/classic.css";

import { yatraOne, poppins, irishGrover, alfaSlab } from "@/styles/fonts";

export const metadata: Metadata = {
	title: "Início | Que Bicho é Esse?",
	description: "",
	keywords: "",
};
 
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light" data-device="large" data-layout="regular">
			<body
				className={`
        ${poppins.variable}
        ${yatraOne.variable}
        ${irishGrover.variable}
        ${alfaSlab.variable}
        antialiased
      `}
			>
				{children}
			</body>
		</html>
	);
}
