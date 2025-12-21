import Dados from "@private/shhh.json";

export default function Home() {
	let texto = Dados.key;
	return (
		<div className="bg-secondary-200">
			<p className="th-text">{texto}</p>
		</div>
		// <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
		// 	<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
		// 	</main>
		// </div>
	);
}
