import React from "react";
import image from "../bg.jpg";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="Winter in Sweden"
				className="absolute min-w-screen min-h-screen object-cover overflow-hidden lg:h-full 2xl:w-full"
			/>

			<section className="relative flex flex-col flex-nowrap justify-start content-center min-h-screen pt-12 px-8">
				<h1 className="text-4xl text-gray-500 font-bold leading-none md:text-6xl cursive py-2">
					Hej! I'm Martin.
				</h1>

				<h2 className="text-2xl text-gray-500 leading-none md:text-3xl cursive  py-2 ">
					This is my portfolio page that will host some of my projects and personal content.
				</h2>
			</section>
		</main>
	);
}
