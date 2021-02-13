import React from "react";
import image from "../bg.jpg";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="Winter in Sweden"
				className="absolute object-cover min-w-full min-h-screen"
			/>

			<section className="relative flex justify-center min-h-screen pt-12 px-8">
				<h1 className="text-4xl text-gray-500 font-bold leading-none md:text-6xl cursive">
					Hej! I'm Martin.
				</h1>
			</section>
		</main>
	);
}
