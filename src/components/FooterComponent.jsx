import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="bg-gray-100 ">
            <div className="container m-auto p-4 mt-16 grid  gap-12 xl:col-span-4 xl:mt-0  md:grid md:grid-cols-4 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">LONG SREYLY</h3>
                    <p className="mt-6 space-y-4">
                        I am a Web Developer and UX/UI Design based in Phnom Penh, Cambodia. I am passionate about building web application using modern technologies.
                    </p>
                </div>
                <div >
                    <h3 className="text-sm font-semibold leading-6  text-gray-900">Quick Links</h3>
                    <ul role="list" className="mt-6 space-y-2">
                    <li>
                            <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="/">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg>
                                Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="/projects">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>

                                    Projects
                                </div>
                            </Link>
                        </li>
                       <li>
                            <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="/achievements">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"></path></svg>
                                    Achievements
                                </div>
                            </Link>
                        </li>  
                        <li>
                            <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="/about">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z"></path></svg>
                                    About Me
                                </div>
                            </Link>
                        </li>                       
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Social Medai</h3>
                    <ul role="list" className="mt-6 space-y-2">
                        <li>
                            <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="https://github.com/longsreyly">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                                    GitHub
                                </div>
                            </Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="https://www.facebook.com/long.menglii.7?mibextid=LQQJ4d">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                                    Facebook
                                </div>
                            </Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="https://www.linkedin.com/in/long-sreylik-993b7b241/">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                                    LinkIn
                                </div>
                            </Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 hover:underline" href="">
                                <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="w-5 h-5"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
                                    Twitter
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">Newsletter</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">Subscribe to get the latest news and updates.
                    </p>
                    <form className="mt-6 sm:flex sm:max-w-md">
                        <label for="email-address" className="sr-only"> Email address</label>
                        <input type="email" name="email" id="email-address" autocomplete="email" required="" className="w-full min-w-0 border appearance-none rounded-md border-gray-300 bg-white px-2  text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Enter your email address" />
                        <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                            <div className="flex justify-end">
                                <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-gray-900 hover:bg-gray-800 focus:ring-indigo-500 focus:ring-offset-white w-full" type="submit">
                                    <div className="relative">
                                        <div className="">Subscribe</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </footer>
    )
}
export default FooterComponent;