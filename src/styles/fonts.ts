import localFont from "next/font/local";

export const poppins = localFont({
	src: [
		{
			path: "./fonts/Poppins/Poppins-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Poppins/Poppins-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-poppins",
	display: "swap",
});

export const yatraOne = localFont({
	src: [
		{
			path: "./fonts/Yatra_One/YatraOne-Regular.woff",
			weight: "bold",
			style: "normal",
		},
		{
			path: "./fonts/Yatra_One/YatraOne-Regular.ttf",
			weight: "bold",
			style: "normal",
		},
	],
	variable: "--font-yatra",
	display: "swap",
});
