import React from "react";
import image from "../bg.jpg";

export default function Home() {
	return (
		<main>
			<img src={image} alt="Winter in Sweden" className="absolute object-cover w-full h-full" />

			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px px-8">
				<h1 className="text-6xl text-gray-500 font-bold cursive leading-none lg:leading-snug home-name">
					Hej! I'm Martin.
				</h1>
			</section>
		</main>
	);
}
