import Link from "next/link";

const NavbarComponent = () => {
    return (
        <main>
            <header className="py-4 top-0 left-0 right-0 z-10 bg-white bg-opacity-70 backdrop-blur-xl fixed border-b-[1px]">
                <div className=" flex flex-row justify-between lg:justify-evenly items-center px-4 lg:px-8">
                    <div className="max-w-2xl flex items-center">
                        <h1 className="font-bold text-xl w-full ">
                            <a href="/">SRUN LISA</a>
                        </h1>
                    </div>
                    <nav className="lg:flex hidden">
                        <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center text-4xl">
                            <div className="position:relative" id="navbar-default">
                                <ul data-orientation="horizontal" className="gap-6 group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
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
                            </div>
                        </nav>
                    </nav>
                    <div className="max-w-2xl flex flex-row gap-4">
                        <div className="flex flex-row items-center gap-2">
                        </div>
                        <div className="sm:flex flex-row gap-4 items-center hidden text-lg">
                            <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-primary-foreground hover:bg-Gray-800 h-10 px-4 py-2">Contact Me</Link>
                        </div>
                        {/* icon bugger for open menu */}
                        <div className="flex md:hidden">
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </header>
        </main>
    );
};

export default NavbarComponent;
