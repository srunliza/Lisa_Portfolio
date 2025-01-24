'use client'
import { useState } from "react";
import Link from "next/link";

const NavbarComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle the menu visibility
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<main>
			<header className="py-4 top-0 left-0 right-0 z-10 bg-white bg-opacity-70 backdrop-blur-xl fixed border-b-[1px]">
				<div className="flex flex-row justify-between lg:justify-evenly items-center px-4 lg:px-8">
					<div className="max-w-2xl flex items-center">
						<h1 className="font-bold text-xl w-full">
							<a href="/">SRUN LISA</a>
						</h1>
					</div>
					{/* Desktop Menu */}
					<nav className="lg:flex hidden">
						<ul className="gap-6 group flex flex-1 list-none items-center justify-center space-x-1">
							<li>
								<Link className="nav_link" href="/">
									<span className="text-[17px]">Home</span>
								</Link>
							</li>
							<li>
								<Link className="nav_link" href="/projects">
									<span className="text-[17px]">Projects</span>
								</Link>
							</li>
							<li>
								<Link className="nav_link" href="/achievements">
									<span className="text-[17px]">Achievements</span>
								</Link>
							</li>
							<li>
								<Link className="nav_link" href="/about">
									<span className="text-[17px]">About Me</span>
								</Link>
							</li>
						</ul>
					</nav>

					{/* Mobile Menu Icon */}
					<div className="flex md:hidden">
						<button
							onClick={handleMenuToggle}
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-expanded={isMenuOpen ? "true" : "false"}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`${isMenuOpen ? "block" : "hidden"
						} lg:hidden absolute top-16 left-0 right-0 bg-white py-4 px-4 z-20`}
				>
					<ul className="space-y-4 text-center">
						<li>
							<Link className="nav_link" href="/">
								<span className="text-[17px]">Home</span>
							</Link>
						</li>
						<li>
							<Link className="nav_link" href="/projects">
								<span className="text-[17px]">Projects</span>
							</Link>
						</li>
						<li>
							<Link className="nav_link" href="/achievements">
								<span className="text-[17px]">Achievements</span>
							</Link>
						</li>
						<li>
							<Link className="nav_link" href="/about">
								<span className="text-[17px]">About Me</span>
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="inline-flex items-center justify-center text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 h-10 px-4 py-2 rounded-md"
							>
								Contact Me
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</main>
	);
};

export default NavbarComponent;
