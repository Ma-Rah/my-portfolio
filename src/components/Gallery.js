import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
// import "./css/gallery.css";
// import "./js/gallery.js";
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
			<SRLWrapper>
				<section className="gallery">
					<div className="gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 xl:grid-cols-5 cursor-pointer">
						{imageData &&
							imageData.map((photo, index) => (
								<img
									src={photo.mainImage.asset.url}
									alt=""
									className=" object-cover h-full w-full "
								/>
							))}
					</div>
				</section>
			</SRLWrapper>
		</main>
	);
}

// div classes
// gap-1 grid grid-flow-row auto-rows-max auto-cols-auto grid-cols-auto

// img classes
// h-auto min-w-full block object-cover clicked

// md:w-1/2 lg:w-1/3 xl:w-1/4
// grid-cols-1 lg:grid-cols-2 xl:grid-cols-2
// w-full md:w-1/2 lg:w-1/3  object-contain md:object-scale-down flex-auto
// w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6
// w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 2xl:w-1/3
// sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5

// const gallery = document.querySelector(".gallery");
// const overlay = document.querySelector(".overlay");
// const overlayImage = overlay.querySelector("img");
// const overlayClose = overlay.querySelector(".close");

// function handleClick(e) {
// 	const src = e.currentTarget.querySelector("img").src;
// 	currentTarget.src = src;
// 	currentTarget.classList.add("open");
// }

// function close() {
// 	overlay.classList.remove("open");
// }

// Event listeners
// const items = document.querySelectorAll(".item");
// items.forEach((item) => item.addEventListener("click", handleClick));

// overlayClose.addEventListener("click", close);
