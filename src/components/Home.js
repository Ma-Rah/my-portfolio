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

			<section className="relative flex flex-col flex-nowrap justify-start items-center content-center min-h-screen pt-12 px-8">
				<h1 className="text-4xl text-gray-500 font-bold leading-none md:text-6xl cursive py-2">
					Hej! I'm Martin.
				</h1>

				<h2 className="text-2xl text-gray-500 leading-none md:text-3xl cursive  py-2 ">
					Welcome to my portfolio page that will host some of my projects and personal content.
				</h2>

				<p className="text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ">
					I am currently attending a Full-Stack Developer bootcamp at Coding Bootcamp Praha.
				</p>

				<p className="text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ">
					My goal is to work as a web developer in Czech Republic after the bootcamp.
				</p>
				<p className="text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ">
					Feel free to contact me if you have any questions!
				</p>
			</section>
		</main>
	);
}
