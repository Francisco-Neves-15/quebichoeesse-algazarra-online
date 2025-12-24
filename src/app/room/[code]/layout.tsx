"use client";

// React
import { ReactNode } from "react";

// Next
import { useParams } from "next/navigation";

interface RoomLayoutProps {
	children: ReactNode;
}

export default function RoomLayout({ children }: RoomLayoutProps) {
	const params = useParams();
	const code = params?.code;

	return (
		<div>
			<header>
				<h2>Room Code: {code}</h2>
			</header>
			<main>{children}</main>
		</div>
	);
}
