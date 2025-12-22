import type { Metadata } from "next";

import "./globals.css";
import "@/styles/themes/classic.css";

import { yatraOne, poppins } from "@/styles/fonts";

export const metadata: Metadata = {
	title: "Que Bicho é Esse?",
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
        antialiased
      `}
			>
				{children}
			</body>
		</html>
	);
}
