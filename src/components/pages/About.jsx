import React from "react";
import downloadimg from "../../assets/Images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-10 pb-24 px-4 mx-auto ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-sky-800 dark:text-white">
            About Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            What we do
          </p>

          <div className="flex flex-wrap ">
            <div className="w-full  px-4 mb-10 lg:w-1/2 lg:mb-0 hidden md:block">
              <img
                src={downloadimg}
                alt=""
                className="relative z-40 object-cover w-2/3  "
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="py-3 pl-2 mb-4 text-2xl font-bold text-sky-800 border-l-4 border-sky-800 dark:text-gray-300">
                Video Downloader - Video Saver
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                Download Your Favorite Videos with Ease - Your Ultimate Video
                Downloader Hub
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-sky-800  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Seamless Video Downloads
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-sky-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Versatility at Your Fingertips
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-sky-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  Fast and Reliable
                </li>
              </ul>
              <Link
                to="/"
                className="px-4 py-3text-white hover:text-sky-800  mx-2 font-pacific text-xs md:text-base rounded-lg py-2 font-thin mt-2 md:mt-0 md:ml-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400"
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
