import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { SRLWrapper } from "simple-react-lightbox";

export default function Gallery() {
	const [imageData, setImage] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type =="photo"]{
					mainImage{
						asset->{
							_id,
							url
						},
					}
		}`
			)
			.then((data) => setImage(data))
			.catch(console.error);
	}, []);
	return (
		<main className="bg-white min-h-screen w-min-screen p-2">
			<section className="">
				<h1 className="text-3xl md:text-5xl flex justify-center cursive pt-10">My Gallery</h1>
				<h2 className="text-lg text-gray-600 flex justify-center mb-5">
					Some of my favorite photos I've shot in recent years!
				</h2>
				<SRLWrapper>
					<div className="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-6 gap-5 cursor-pointer  ">
						{imageData &&
							imageData.map((photo, index) => (
								<img
									src={photo.mainImage.asset.url}
									alt=""
									className=" object-cover h-full w-full transform hover:scale-105 transition duration-700 ease-in-out"
								/>
							))}
					</div>
				</SRLWrapper>
			</section>
		</main>
	);
}
