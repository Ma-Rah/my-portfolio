import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-gray-600">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						// activeClassName="text-green-"
						className="inline-flex items-center pb-2 px-3 mr-4 text-white hover:text-green-300 text-4xl font-bold cursive tracking-widest"
					>
						Home
					</NavLink>
					<NavLink
						to="/post"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300 text-lg"
						activeClassName="text-red-100 bg-red-700"
					>
						Blog posts
					</NavLink>
					<NavLink
						to="/project"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300 text-lg"
						activeClassName="text-red-100 bg-red-700"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300 text-lg"
						activeClassName="text-red-100 bg-red-700"
					>
						About Me
					</NavLink>
				</nav>

				<div className="inline-flex py-3 px-3 my-6">
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
