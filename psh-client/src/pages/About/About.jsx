import React from "react";
import { Link } from "react-router-dom";

import aboutHero from "../../assets/img/aboutHero.webp";
import "./About.css";

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
            <Link to={"/"}>
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
            </Link>
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
          <p className="text-[16px] font-bold pt-12">
            দেশের বিভিন্ন প্রান্ত থেকে আগত হাজারো নারীকে নিরাপদ, আরামদায়ক এবং
            সুরক্ষিত আবাসস্থল প্রদানের লক্ষে PSH/পি.এস.এইচ (Project Second Home/
            প্রোজেক্ট সেকেন্ড হোম) শুরু করেছে তাদের নারী ডরমিটরি ব্যবস্থা। থাকা
            খাওয়ার মৌলিক সুযোগ সুবিধার পাশাপাশি অত্যাধুনিক প্রযুক্তি সুবিধা থেকে
            শুরু করে কর্মজীবী নারী, বিভিন্ন প্রতিষ্ঠানে পড়ুয়া নারী শিক্ষার্থী
            এবং স্বাধীনচেতা নারীদের চলার পথকে সুগম এবং সহজতর করতে PSH দিচ্ছে
            সাধ্যের মধ্যে সর্বোচ্চ নিরাপদ এবং আরামদায়ক আবাসন ব্যবস্থা। To
            ensure a comfortable and safe place for the thousands of female who
            come from various places for different purposes and for them Project
            Second Home (PSH) has taken an initiative to create a safe
            residence. Besides the basic needs like food and security, we are
            going to provide house keeping and other necessary supports so that
            female of different profession can cope with their daily lives with
            full of comfort and safety.
          </p>
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
      {/* Benefits of Psh */}
      <div className="bg-[#f5f3ed] rounded-tr-[100px] pb-16 mt-16">
        <div className="custom-container">
          <h2 className="text-[32px] font-bold pt-10 pb-9">
            Benefits of Living in PSH
          </h2>
          <div className="grid grid-cols-3 gap-9">
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">Fully furnished</h4>
                <p className="mt-2 text-sm">
                  The residence is equipped with complete furniture including
                  AC, Wi-Fi, and water heater.
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage-1.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">Comprehensive Service</h4>
                <p className="mt-2 text-sm">
                  Room cleaning, laundry, maintenance, and Customer Service are
                  ready to help.
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage-2.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">Monthly Payments</h4>
                <p className="mt-2 text-sm">
                  It's easier with practical monthly payments via the Rukita
                  Application.
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage-3.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">
                  Multifunctional Application
                </h4>
                <p className="mt-2 text-sm">
                  Request services, room requirements and monthly payments
                  directly from one application.
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage-4.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">Aesthetic Design</h4>
                <p className="mt-2 text-sm">
                  A dream residence that is comfortable, stylish and modern.
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://images.rukita.co/web/static/img/landing-page/about-us/IMG-Advantage-5.png?tr=c-at_max%2Cw-1920"
                alt=""
              />
              <div className="pt-4 ">
                <h4 className="text-xl font-bold">Warm & Exciting</h4>
                <p className="mt-2 text-sm">
                  Expand connections by joining Community Events with other
                  Rukees (Rukita residents).
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
