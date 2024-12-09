import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";


const Footer = () => {
  const currentYear = new Date().getFullYear();
const [email,setEmail]=useState();
  return (
    <footer className="relative bg-sidebar border-t border-gray-700 pt-8 pb-6 text-gray-400">
      <div className="mx-auto">
        <div className="flex flex-wrap text-left lg:text-left w-full max-w-7xl mx-auto">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700 text-gray-100">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond within 1-2 business
              days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-3">
              <button
                className="bg-gray-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaXTwitter />
              </button>
              <button
                className="bg-gray-100 text-highlight shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaLinkedin />

              </button>
              <button
                className="bg-gray-100 text-highlight shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook />

              </button>
              <button
                className="bg-gray-100 text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaGithub />

              </button>
            </div>
            <div className="overflow-hidden mt-8 outline-none border-2 border-gray-400 focus:border-green-500 rounded-full  flex">
              <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-5 bg-transparent"
              />
             <button onClick={()=>{setEmail(''); toast.success("Thanks For Subscrbing!",{position:'top-center'})}} className=" text-white py-2.5 px-6 bg-gray-700 "> Subscribe</button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block text-gray-100 uppercase text-blueGray-500 text-base font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="/earn"
                    >
                      Earn
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="offers"
                    >
                      Offers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="surveys"
                    >
                      Surveys
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="/history"
                    >
                      History
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block text-gray-100 uppercase text-blueGray-500 text-base font-semibold mb-2">
                  Contact Info
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="tel:+8801402434727"
                    >
                      +8801402434727
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="mailto:starmoney@admin.com"
                    >
                      starmoney@admin.com
                    </a>
                  </li>
                </ul>
                <span className="block mt-5 text-gray-100 uppercase text-blueGray-500 text-base font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="/withdraw"
                    >
                      Withdraw
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-base"
                      href="/leaderboard"
                    >
                      Leaderboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-base text-blueGray-500 font-semibold py-1">
              Copyright © {currentYear}{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                STAR
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
                rel="noreferrer"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
