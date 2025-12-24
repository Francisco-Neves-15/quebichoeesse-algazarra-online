"use client";
// import { useEffect, useState } from "react";

import Button from "@/components/Own/Button";
import { FaTrash, FaXmark } from "react-icons/fa6";

export default function Home() {
	return (
		<div className="">
			<h1 className="text-primary-200">Lorem ipsum dolor sit 4444.</h1>

			<p className="font-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, in. Eum, nam non.
				Doloremque dolore optio vitae dolorum, quas autem, labore quibusdam natus beatae corporis,
				tempore quod!
			</p>

			<Button disable variants="danger" onClick={() => alert("AAAAA")}>
				<FaTrash size={32} />
				<p>Nome</p>
			</Button>

			<Button icon={<FaXmark size={32} />} />
			<Button variants="ghost" icon={<FaXmark size={32} />} />

			<Button variants="primary" text={`Algum texto: ${4 * 2}`} />
			<Button variants="secondary" text={`Algum texto: ${4 * 2}`} />
			<Button variants="danger" text={`Algum texto: ${4 * 2}`} />
			<Button disable text={`Desabilitado: ${4 * 4}`} />
		</div>
	);
}
