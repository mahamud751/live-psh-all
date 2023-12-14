import React from "react";
import financeArrow from "../../../src/assets/img/arrow-finance.png";
import financeArrow2 from "../../../src/assets/img/financeArrow2.svg";
import uppArrow from "../../../src/assets/img/upp-arrow.svg";
import placeHolder1 from "../../../src/assets/img/Placeholder.webp";
import placeHolder2 from "../../../src/assets/img/Placeholder-1.webp";
import placeHolder3 from "../../../src/assets/img/Placeholder-2.webp";
import placeHolder4 from "../../../src/assets/img/Placeholder-3.webp";

import step1 from "../../../src/assets/img/step5.png";
import step2 from "../../../src/assets/img/step4.svg";
import step3 from "../../../src/assets/img/step3.svg";
import step4 from "../../../src/assets/img/step2.svg";
import step5 from "../../../src/assets/img/step1.svg";
import financeHome from "../../../src/assets/img/finance-home.png";
import financeDeposit from "../../../src/assets/img/finace-deposit.png";
import financeFunds from "../../../src/assets/img/finace-funds.png";
import pshLogo from "../../../src/assets/img/PSH Favicon 1.png";
import financeBanner from "../../../src/assets/img/finance.png";
import tickSvg from "../../../src/assets/img/tik-svg.png";
import "./PshFinance.css";
import { Link } from "react-router-dom";
const PshFinance = () => {
  return (
    <div className="finance-page ">
      <img
        src={financeBanner}
        className=" xl:h-fit lg:h-screen md:h-screen sm:h-screen	"
        alt=""
      />

      <div className="finance">
        <div className="custom-container absolute top-8 xl:left-[300px] lg:left-20 sm:left-5  sm:px-2  md:px-0">
          <div className="grid grid-cols-2">
            <div className="md:pt-20 sm:pt-14">
              <p className="md:text-3xl sm:text-xl font-bold">PSH Finance</p>
              <h2 className="md:text-[48px] sm:text-[24px] font-black md:mt-14 sm:mt-4">
                Property Business Financing Solutions
              </h2>
              <p className="md:text-[24px] sm:text-[12px]">
                <span className=" font-black">Finance</span>{" "}
                <span className=" text-[#666]">
                  is ready to help with financing, construction, renovation and
                  operations.
                </span>
              </p>
              <div className="">
                <a href="/extra-form" target="_blank">
                  <button className="md:mt-10 sm:mt-5 md:text-[1rem] sm:text-[14px] md:px-[36px] md:py-[15px] sm:px-[16px] sm:py-[10px]">
                    From now on
                  </button>
                </a>
              </div>
              <p className="md:mt-10 sm:mt-5 md:text-sm sm:text-[8px]">
                PT Bank OCBC NISP, Tbk is licensed and supervised by the
                Financial Services Authority (OJK) and is an LPS guarantee
                participant
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Profitable */}
      <div className="custom-container sm:px-2  md:px-0">
        <div className="grid grid-cols-12 items-center my-14  md:gap-x-10 ms:gap-x-0">
          <div className="md:col-span-3 sm:col-span-12 md:text-left sm:text-center">
            <p className="md:text-2xl sm:text-xl font-[700]">
              Coliving Boarding House Business Gets More Profitable with PSH!
            </p>
            <p className="mt-5">
              Feel the improvement after the property collaborates with PSH.
            </p>
          </div>
          <div className="col-span-1 sm:hidden md:block">
            <img src={financeArrow} alt="" />
          </div>
          <div className="flex md:gap-x-10 sm:gap-x-0 md:col-span-8 sm:col-span-12 md:mx-0 sm:mx-2">
            <div className="flex relative">
              <img src={uppArrow} className=" md:w-[35px] sm:w-[15px]" alt="" />
              <p className="absolute md:top-0 sm:top-5 md:left-14 sm:left-5">
                Until
              </p>
              <div className="mt-12">
                <h1 className="until-percent md:text-[64px] sm:text-[32px] md:ms-5 sm:ms-1 ">
                  85%
                </h1>
                <p className="md:ms-5 sm:ms-0 md:text-[1rem] sm:text-sm font-bold md:w-full sm:w-2/3">
                  Average Residential Occupancy Rate
                </p>
              </div>
            </div>
            <div className="flex relative md:mr-0 sm:mr-5">
              <img className=" md:w-[35px] sm:w-[15px]" src={uppArrow} alt="" />

              <p className="absolute md:top-0 sm:top-5 md:left-14 sm:left-5">
                Until
              </p>
              <div className="mt-12">
                <h1 className="until-percent md:ms-5 sm:ms-1 md:text-[64px] sm:text-[32px]">
                  30%
                </h1>
                <p className="md:ms-5 sm:ms-0  md:text-[1rem] sm:text-sm font-bold">
                  Average Income Increase
                </p>
              </div>
            </div>
            <div className="flex  relative">
              <p className="absolute md:top-0 sm:top-5 md:left-14 sm:left-5">
                Until
              </p>
              <img className=" md:w-[35px] sm:w-[15px]" src={uppArrow} alt="" />
              <div className="mt-12">
                <h1 className="until-percent md:ms-5 sm:ms-1  md:text-[64px] sm:text-[32px]">
                  20%
                </h1>
                <p className="md:ms-5 sm:ms-0 md:text-[1rem] sm:text-sm font-bold">
                  Potential Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f3f3f3" }} className="">
        <div className="custom-container  pt-14 pb-10 sm:px-2  md:px-0">
          <div className="flex justify-center">
            <div>
              <h2 className="text-3xl font-bold text-center"> Why with PSH</h2>
              <p className="mt-5 text-[#bdbebd text-xl]">
                Enjoy stable & hassle-free passive income!
              </p>
              <div className="mt-5 flex justify-center">
                <div
                  style={{
                    width: "64px",
                    height: "8px",
                    flexShrink: 0,
                    borderRadius: "10px",
                    backgroundColor: "#00BBB4",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-5">
            <div className="flex items-center gap-x-6">
              <div>
                <img
                  className="md:w-[200px] sm:w-[100px]"
                  src={placeHolder1}
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-x-3">
                  <img src={tickSvg} className="h-6" alt="" />
                  <h4 className="md:text-xl text-[1rem] font-bold">
                    Property Ready to Rent
                  </h4>
                </div>
                <p className="md:text-[1rem] sm:text-sm">
                  Renovation by Rukita design team
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <div>
                <img
                  className="md:w-[200px] sm:w-[100px]"
                  src={placeHolder2}
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-x-3">
                  <img src={tickSvg} className="h-6" alt="" />
                  <h4 className="md:text-xl text-[1rem] font-bold">
                    Property Ready to Rent
                  </h4>
                </div>
                <p className="md:text-[1rem] sm:text-sm">
                  Renovation by Rukita design team
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-6 mt-5">
              <div>
                <img
                  className="md:w-[200px] sm:w-[100px]"
                  src={placeHolder3}
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-x-3">
                  <img src={tickSvg} className="h-6" alt="" />
                  <h4 className="md:text-xl text-[1rem] font-bold">
                    Property Ready to Rent
                  </h4>
                </div>
                <p className="md:text-[1rem] sm:text-sm">
                  Renovation by Rukita design team
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-6 mt-5">
              <div>
                <img
                  className="md:w-[200px] sm:w-[100px]"
                  src={placeHolder4}
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-x-3">
                  <img src={tickSvg} className="h-6" alt="" />
                  <h4 className="md:text-xl text-[1rem] font-bold">
                    Property Ready to Rent
                  </h4>
                </div>
                <p className="md:text-[1rem] sm:text-sm">
                  Renovation by Rukita design team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container mt-16 sm:px-2  md:px-0">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="easy_steps text-white relative md:h-[670px] sm:h-[300px] md:w-[470px] sm:w-full">
            <p className="px-12 mt-10 md:text-[40px] sm:text-[20px] font-bold">
              <span className="">5 Easy Steps</span>
            </p>
            <p className=" ps-12 pr-14 md:text-[32px] sm:text-[1rem]">
              Starting a Property Business with PSH & OCBC
            </p>
            <div className="absolute top-80 right-[-30px] md:block sm:hidden">
              <img
                style={{
                  display: "flex",
                  width: "64px",
                  height: "64px",
                  padding: "19px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  borderRadius: "32px",
                  background: "#00BBB4",
                }}
                src={financeArrow2}
                alt=""
              />
            </div>
          </div>
          <div className="sm:mx-5 md:mx-0">
            <div className="flex gap-x-5 md:mt-0 sm:mt-10 ">
              <div className="relative">
                <img src={step1} alt="" />
                <p className="absolute top-[1.5px] left-[-20px] step md:w-[40px] sm:w-[30px] md:h-[40px] sm:h-[30px]">
                  1
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Register Yourself</p>
                <p className="py-4">
                  Click the registration button below, fill out the form, and
                  our team will be in touch shortly.
                </p>
                <a href="/extra-form" target="_blank">
                  <button className="step-button">List My Property</button>
                </a>
              </div>
            </div>
            <div className="flex gap-x-5 mt-10">
              <div className="relative">
                <img src={step2} style={{ width: "150px" }} alt="" />
                <p className="absolute top-[1.5px] left-[-20px] step md:w-[40px] sm:w-[30px] md:h-[40px] sm:h-[30px]">
                  2
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Wait for Answer</p>
                <p className="py-4">
                  You will be contacted within 24 hours if you are deemed to
                  meet the requirements.{" "}
                  <Link to="/terms">
                    <span className="text-[#00BBB4]">
                      See Terms & Conditions
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 mt-10">
              <div className="relative">
                <img src={step3} alt="" />
                <p className="absolute top-[1.5px] left-[-20px] step md:w-[40px] sm:w-[30px] md:h-[40px] sm:h-[30px]">
                  3
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Contract Signature</p>
                <p className="py-4">Our collaboration has officially begun.</p>
              </div>
            </div>
            <div className="flex gap-x-5 mt-10">
              <div className="relative">
                <img src={step4} alt="" />
                <p className="absolute top-[1.5px] left-[-20px] step md:w-[40px] sm:w-[30px] md:h-[40px] sm:h-[30px]">
                  4
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Property Transformation</p>
                <p className="py-4">
                  PSH will prepare your property for immediate rental.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 mt-10">
              <div className="relative">
                <img src={step5} alt="" />
                <p className="absolute top-[1.5px] left-[-20px] step md:w-[40px] sm:w-[30px] md:h-[40px] sm:h-[30px]">
                  5
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Enjoy the Results</p>
                <p className="py-4">Sit back, relax, enjoy passive income.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difference between Investing in Psh */}
      <div className="custom-container mt-20 md:mb-36 sm:mb-20 sm:px-2  md:px-0">
        <h2 className="md:text-[32px] sm:text-xl font-bold text-center">
          What is the Difference between Investing in PSH and Other Portfolios?
        </h2>
        <p className="text-center">The luck is many times over!</p>
        <div className="mt-5 flex justify-center">
          <div
            style={{
              width: "64px",
              height: "8px",
              flexShrink: 0,
              borderRadius: "10px",
              backgroundColor: "#00BBB4",
            }}
          ></div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-14 gap-x-6 relative">
          <div className="invest-part">
            <div>
              <h5 className="text-center py-5">House Renting</h5>
              <hr />
              <div className="flex flex-col items-center ">
                <img src={financeHome} alt="" />

                <p className="text-[40px] font-bold">2.5-5%</p>
                <p className="mt-4 mb-8">Returns per year</p>
              </div>
            </div>
          </div>
          <div className="invest-part">
            <div>
              <h5 className="text-center py-5">Deposit</h5>
              <hr />
              <div className="flex flex-col items-center ">
                <img src={financeDeposit} alt="" />

                <p className="text-[40px] font-bold">3-6%</p>
                <p className="mt-4 mb-8">Returns per year</p>
              </div>
            </div>
          </div>
          <div className="invest-part">
            <div>
              <h5 className="text-center py-5">Stock Mutual Funds</h5>
              <hr />
              <div className="flex flex-col items-center ">
                <img src={financeFunds} alt="" />

                <p className="text-[40px] font-bold">8-15%</p>
                <p className="mt-4 mb-8">Returns per year</p>
              </div>
            </div>
          </div>
          <div
            className="invest-part2 md:absolute sm:static right-[-12px] top-[-60px]  border border-[#00BBB4]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #D0F2EF 100%",
            }}
          >
            <div>
              <h3 className="text-center py-5 bg-[#00BBB4] text-[18px] text-white font-medium">
                Coliving Investment in
                <p>PSH</p>
              </h3>
              <hr />
              <div className="flex flex-col items-center ">
                <img
                  className="mt-5"
                  style={{ width: "50px" }}
                  src={pshLogo}
                  alt=""
                />

                <p className="text-[48px] font-bold">15-20%</p>
                <p className="mt-4 mb-8">Returns per year</p>
                <div className="px-5">
                  <a href="https://psh.com.bd/" target="_blank">
                    {" "}
                    <button className="text-sm mb-6 md:px-[36px] md:py-[15px] sm:px-[16px] sm:py-[10px]">
                      Check the PSH Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Managing Property */}
      <div className="custom-container sm:px-2  md:px-0">
        <div className="flex sm:flex-col-reverse md:flex-row gap-x-44 mb-20">
          <div>
            <h2 className="md:text-[32px] sm:text-[1rem] font-bold md:mt-0 sm:mt-5">
              Need Help Just Managing Your Property?
            </h2>
            <p className="mt-4">
              Become PSH's partner and we will take care of all property matters
              from marketing to operations.
            </p>
            <div className="mt-4">
              <button className="md:px-[36px] md:py-[15px] sm:px-[16px] sm:py-[10px]">
                More Information
              </button>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-lg md:w-[560px] sm:w-full
              "
              height="315"
              src="https://www.youtube.com/embed/44IM9GV6Nj0?si=aP35zDUhg251iXGK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* House Business now */}
      <div className="custom-container sm:px-2  md:px-0">
        <h4 className="font-bold md:text-[32px] sm:text-[1rem] text-center">
          Start Your Coliving Boarding House Business Now!
        </h4>
        <div className="text-center mt-5 mb-24">
          <a href="/extra-form" target="_blank">
            <button className="md:px-[36px] md:py-[15px] sm:px-[16px] sm:py-[10px]">
              From Now on
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PshFinance;
