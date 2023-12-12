import React from "react";
import "./Custom.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Link } from "react-router-dom";
import UseFetch from "../../hooks/useFetch";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const { data } = UseFetch(`dynamic`);
  console.log("ssss", data);
  return (
    <div className="footer-part">
      <div>
        <div style={{ background: "linear-gradient(to right, #000, #061c34)" }}>
          <div
            className=" "
            style={{
              background: "linear-gradient(to right, #070e1b, #07182b)",
            }}
          >
            <div className="dark:text-gray-300 custom-container">
              <ul className="py-4 grid md:grid-cols-6">
                <li className=" col-span-1">
                  <div className="md:flex">
                    <div className="sm:flex sm:justify-center sm:mb-2">
                      <i className="fa-solid fa-envelope md:text-2xl text-white"></i>
                    </div>
                    <div className="text-start ms-3">
                      <h2 className="text-white dark:text-gray-200 text-sm sm:hidden">
                        Email Support
                      </h2>
                      <h5 className="text-white text-sm mt-2">
                        info@psh.com.bd
                      </h5>
                    </div>
                  </div>
                </li>

                <li className=" col-span-1">
                  <div className="md:flex">
                    <div className="sm:flex sm:justify-center sm:mb-2 sm:mr-20 md:mr-0">
                      <i className="fa-solid fa-phone text-white md:text-2xl"></i>
                    </div>
                    <div className="text-start ms-3">
                      <h2 className="text-white dark:text-gray-200 text-sm sm:hidden">
                        Phone Support
                      </h2>
                      <h5 className="text-white text-sm mt-2">
                        08147758883, 08100591556
                      </h5>
                    </div>
                  </div>
                </li>

                <li className="col-span-1 md:block sm:hidden">
                  <div className="md:flex sm:mr-4">
                    <div className="sm:flex sm:justify-center sm:mb-2">
                      <i className="fa-brands fa-whatsapp md:text-3xl text-white "></i>
                    </div>
                    <div className="text-start md:ms-3">
                      <h2 className="text-white dark:text-gray-200 text-sm sm:hidden">
                        Whatsapp Support
                      </h2>
                      <h5 className="text-white text-sm mt-2">08147758883</h5>
                    </div>
                  </div>
                </li>

                <li className="col-span-3 sm:p-2 md:p-0 ">
                  <form className="flex">
                    <input
                      className="rounded md:px-4 sm:py-3 border-t md:w-full outline-0 sm:w-full"
                      placeholder="your@mail.com"
                    />
                    <button className="ml-1 rounded bg-[#FEBD59] font-bold md:p-4 uppercase border-yellow-500 border-t border-b border-r p-2 ">
                      Subscribe
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <footer className="pt-4 pb-8 xl:pt-8 custom-container sm:p-5 ">
            <div className="  dark:text-gray-300">
              <ul className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 pb-8 text-lg font-light gap-x-10">
                {/* <li className="w-1/2 md:w-1/6 lg:w-1/6">
                  <div className="text-start">
                    <h2
                      className=" dark:text-gray-200 text-md mb-4"
                      style={{ color: "rgba(40, 255, 239, 1)" }}
                    >
                      PSH
                    </h2>

                    <ul className="footer_li">
                      {data
                        ?.filter((item) => item?.section === "footer1")
                        .map((item) => (
                          <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                            <Link to={`${item?.link}`}> {item?.name}</Link>
                          </li>
                        ))}

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Our Story</a>
                      </li>
                     
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Our Service</a>
                      </li>
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Testimonials</a>
                      </li>
                      <Link to={"/terms"}>
                        <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                          <a>Terms & Conditions</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li> */}
                <li className="">
                  <div className="text-start">
                    <h2
                      className=" dark:text-gray-200 text-md uppercase mb-4 text-[1rem]"
                      style={{ color: "rgba(40, 255, 239, 1)" }}
                    >
                      Partner With Us
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a>Lease your Property</a>
                      </li>

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">PSH Finance</a>
                      </li>
                      {/* <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Build for Rent</a>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li className="">
                  <div className="text-start">
                    <h2
                      className=" dark:text-gray-200 text-md uppercase mb-4 text-[1rem]"
                      style={{ color: "rgba(40, 255, 239, 1)" }}
                    >
                      PSH FOR Business
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a>Corporate Housing</a>
                      </li>

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Brand Collaboration</a>
                      </li>

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a>Community</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="">
                  <div className="text-start">
                    <h2
                      className=" dark:text-gray-200 text-md uppercase mb-4 text-[1rem]"
                      style={{ color: "rgba(40, 255, 239, 1)" }}
                    >
                      Resource
                    </h2>
                    <ul className="footer_li">
                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">FAQ</a>
                      </li>

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a>Career</a>
                      </li>

                      <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                        <a href="#">Stories</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="">
                  <div className="text-start">
                    <h2
                      className=" dark:text-gray-200 text-md uppercase mb-4 text-[1rem]"
                      style={{ color: "rgba(40, 255, 239, 1)" }}
                    >
                      Connect with us
                    </h2>
                    <div className="flex ">
                      <div>
                        <HiOutlineLocationMarker className="text-white font-bold" />
                      </div>
                      <p
                        className="text-white md:ms-1 sm:ms-[0] text-[11px]"
                        style={{ marginTop: -3 }}
                      >
                        House: 23, Road: 3, Dhanmondi, <br />
                        Dhaka, Bangladesh
                      </p>
                      <p></p>
                    </div>
                    {/* <div className="flex mx-auto">
                    

                      <p
                        className="text-white ms-3 text-[14px]"
                        style={{ marginTop: -3 }}
                      >
                        info@psh.com.bd
                      </p>
                    </div> */}
                    <p className="text-white text-[14px]">Operational Hour</p>
                    <p
                      className=" text-[12px]"
                      style={{
                        fontWeight: "300px",
                        lineWeight: "18px",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      Monday - Friday: 10.00 - 19.00
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="text-start">
                    {/* <div className="flex justify-center">
                      <img src="assets/img/facebook.svg.png" alt="" />

                      <img
                        src="assets/img/Link → instagram.svg.png"
                        alt=""
                        className="mx-2"
                      />

                      <img src="assets/img/Link → twitter.svg.png" alt="" />
                    </div> */}
                    <div className="mt-6 md:px-0 sm:px-12">
                      <button className="footer_btn">
                        <p className="mt-2 text-[14px]"> Login / Signup</p>
                      </button>
                    </div>
                    <div className="mt-6 md:px-0 sm:px-12">
                      <button className="footer_btn">
                        <img
                          src="assets/img/appstore.svg.png"
                          alt=""
                          className="mt-2 text-[14px] ms-3"
                        />
                        <img
                          src="assets/img/playstore.svg.png"
                          alt=""
                          className="mt-2 text-[14px] "
                        />
                        <span className="mt-2 text-[14px] ms-3">
                          {" "}
                          Download Aplikasi
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
          <div className=" sm:flex sm:justify-center md:hidden">
            <Link
              to={"/terms"}
              className="text-white text-[12px] underline hover:text-[#00bbb4]"
              style={{
                fontWeight: "300px",
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              to={"/privacy"}
              className="text-white text-[12px] ms-2 underline hover:text-[#00bbb4]"
              style={{
                fontWeight: "300px",
              }}
            >
              Privacy & Policy
            </Link>
          </div>
          <div
            className=" flex  justify-center text-white py-3 sm:text-[12px]"
            style={{
              background: "linear-gradient(to right, #020304, #071e37)",
            }}
          >
            © 2023 Project Second Home. All rights reserved
            <div className="flex ms-5 sm:hidden md:block">
              <Link
                to={"/terms"}
                className="text-white text-[12px] underline hover:text-[#00bbb4]"
                style={{
                  fontWeight: "300px",
                }}
              >
                Terms & Conditions
              </Link>
              <Link
                to={"/privacy"}
                className="text-white text-[12px] ms-2 underline hover:text-[#00bbb4]"
                style={{
                  fontWeight: "300px",
                }}
              >
                Privacy & Policy
              </Link>
            </div>
            {/* <div className="sm:hidden md:flex md:ms-4 footer_social ms-2 mr-2">
              <img src="assets/img/facebook.svg.png" alt="" />

              <img
                src="assets/img/Link → instagram.svg.png"
                alt=""
                className="mx-2"
              />

              <img src="assets/img/Link → twitter.svg.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <MessengerCustomerChat
        pageId="103815078546069"
        appId=" 570469815108233"
      />
    </div>
  );
};

export default Footer;
