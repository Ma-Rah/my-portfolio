import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

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
			<section className="grid grid-flow-row-dense">
				<div className="flex flex-wrap gap-1 w-full">
					{imageData &&
						imageData.map((photo, index) => (
							<img
								src={photo.mainImage.asset.url}
								className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 2xl:w-1/3 flex-auto object-cover clicked "
							/>
						))}
				</div>
			</section>
		</main>
	);
}
// md:w-1/2 lg:w-1/3 xl:w-1/4
// grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
// w-full md:w-1/2 lg:w-1/3  object-contain md:object-scale-down flex-auto
// w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6
