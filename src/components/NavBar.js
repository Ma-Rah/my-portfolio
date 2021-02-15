import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-gray-600">
			<div className="container mx-auto flex flex-col justify-between min-w-screen p-3 md:flex-row text-2xl">
				<nav className="flex flex-col md:flex-row ">
					<NavLink
						to="/"
						exact
						// className=" inline-flex items-center py-1 px-1 md:my-3 rounded text-white hover:text-blue-300 text-6xl"
						// activeClassName="bg-red-700"
						className="inline-flex items-center pb-3 px-3 mr-4 text-white hover:text-blue-300 text-4xl font-bold cursive tracking-widest text-5xl"
					>
						Home
					</NavLink>
					<NavLink
						to="/post"
						className=" inline-flex items-center py-3 px-3 md:my-6 rounded text-white hover:text-blue-300 "
						activeClassName=" bg-red-700"
					>
						Blog posts
					</NavLink>
					<NavLink
						to="/project"
						className="inline-flex items-center py-3 px-3 md:my-6 rounded text-white hover:text-blue-300"
						activeClassName="bg-red-700"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className="inline-flex items-center py-3 px-3 md:my-6 rounded text-white hover:text-blue-300 "
						activeClassName="bg-red-700"
					>
						About
					</NavLink>
				</nav>

				<div className="inline-flex py-3 px-3 md:my-6">
					<SocialIcon
						url="https://github.com/Ma-Rah"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/martin-rahm-913856b0/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
