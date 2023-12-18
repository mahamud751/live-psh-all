import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import "./About.css";
import aboutHero from "../../assets/img/aboutHero.webp";

const About = () => {
  return (
    <div>
      <div className=" bg-gradient-to-t from-[#f2eee5] h-screen about-hero ">
        <div className="grid grid-cols-2 ">
          <div className=" xl:mt-48 lg:mt-16 md:mt-14 sm:mt-14 xl:ms-72 lg:ms-20">
            <h2 className="text-[60px] font-bold">Home That Grows With You</h2>
            <p className="text-xl mr-10">
              Creating quality and affordable housing for everyone, at every
              phase of life.
            </p>
            <div className="mt-8">
              <button
                className="text-white text-sm px-5 py-3 rounded-lg"
                style={{
                  background: "linear-gradient(to right, #000, #061c34)",
                }}
              >
                Search for Housing Now
              </button>
            </div>
          </div>
          <div className=" ">
            <img
              src={aboutHero}
              className="h-screen w-full xl:ms-16 lg:ms-0 md:ms-0 sm:ms-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-white mb-10 rounded-tl-[100px] mt-[-90px] product-ecosystem">
        <div className="custom-container">
          <h4 className="text-[32px] font-bold mb-10 pt-16">
            PSH Product Ecosystem
          </h4>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-x-6">
            <div className="">
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://images.rukita.co/web/static/img/landing-page/about-us/rukita_apartment.png?tr=c-at_max%2Cw-400"
                  alt=""
                />
              </div>
              <div className="text-center bg-[#faf9f6] pt-3 h-48 rounded-b-lg">
                <h5 className="font-bold pt-7 pb-3">PSH Apartment</h5>
                <p className="text-sm px-6">
                  Serviced apartment with complete furniture and comprehensive
                  service.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://images.rukita.co/web/static/img/landing-page/about-us/rukita_coliving.png?tr=c-at_max%2Cw-400"
                  alt=""
                />
              </div>
              <div className="text-center bg-[#faf9f6] pt-3 h-48 rounded-b-lg">
                <h5 className="font-bold pt-7 pb-3">PSH Coliving</h5>
                <p className="text-sm px-6">
                  Coliving exclusive with five star facilities in a strategic
                  location.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://images.rukita.co/web/static/img/landing-page/about-us/rukita_residence.png?tr=c-at_max%2Cw-400"
                  alt=""
                />
              </div>
              <div className="text-center bg-[#faf9f6] pt-3 h-48  rounded-b-lg">
                <h5 className="font-bold pt-7 pb-3">PSH Residence</h5>
                <p className="text-sm">Comming Soon!</p>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://images.rukita.co/web/static/img/landing-page/about-us/rukita_rupartner.png?tr=c-at_max%2Cw-400"
                  alt=""
                />
              </div>
              <div className="text-center bg-[#faf9f6] pt-3 h-48  rounded-b-lg">
                <h5 className="font-bold pt-7 pb-3">PSH Partner</h5>
                <p className="text-sm px-7">
                  Marketing services for exclusive apartments and boarding
                  houses throughout Bangladesh
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="rounded-t-lg"
                  src="https://images.rukita.co/web/static/img/landing-page/about-us/rukita_rufinance.png?tr=c-at_max%2Cw-400"
                  alt=""
                />
              </div>
              <div className="text-center bg-[#faf9f6] pt-3 h-48  rounded-b-lg">
                <h5 className="font-bold pt-7 pb-3 ">PSH Finance</h5>
                <p className="text-sm px-6">
                  Financing assistance for property business expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
