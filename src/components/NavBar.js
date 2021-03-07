import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-gray-600">
			<div className="container mx-auto flex flex-col justify-around min-w-screen p-3 md:flex-row text-2xl ">
				<nav className="flex flex-col text-base md:text-xl md:flex-row  ">
					<NavLink
						to="/"
						exact
						className="inline-flex items-center pb-2 px-3 mr-4 text-white hover:text-blue-300 text-3xl md:text-5xl font-bold cursive tracking-widest"
					>
						Home
					</NavLink>
					<div className="grid grid-cols-2 md:grid-cols-4 lg:col-auto">
						<NavLink
							to="/project"
							className="inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300"
							activeClassName="bg-red-700"
						>
							Projects
						</NavLink>
						<NavLink
							to="/about"
							className="inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300"
							activeClassName="bg-red-700"
						>
							About
						</NavLink>
						<NavLink
							to="/gallery"
							className="inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300"
							activeClassName="bg-red-700"
						>
							Gallery
						</NavLink>

						<NavLink
							to="/post"
							className="inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300"
							activeClassName=" bg-red-700"
						>
							Posts
						</NavLink>
					</div>
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
				</nav>
			</div>
		</header>
	);
}
