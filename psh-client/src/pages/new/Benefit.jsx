import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Carousel } from "@material-tailwind/react";
import forMobile1 from "../../assets/img/formobile1.png";
import forMobile2 from "../../assets/img/formobile2.png";
import forMobile3 from "../../assets/img/formobile3.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";

import Benefit from "./benefit";
import "./partner.css";

const Partner = () => {
  const [lastSlideIndex, setLastSlideIndex] = useState(0);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (index) => {
      setLastSlideIndex(index);
    },
    infinite: false,
    speed: 400,
    // arrows: publishedData?.length > 5 ? true : false,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    className: "mx-[-15px]",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,

          autoplaySpeed: 3000,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,

          autoplaySpeed: 3000,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          className: `center ms-5 ${
            lastSlideIndex >= 1 ? "only-forMobile" : ""
          }`,
          afterChange: (index) => {
            setLastSlideIndex(index);
          },
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          speed: 1000,
          autoplaySpeed: 1000,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <div className="banner-left">
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 ">
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6">
            <div className="md:ms-72">
              <div
                className="flex justify-center items-center"
                style={{ height: "100vh" }}
              >
                <div className="">
                  <p className="banner_partner_p">
                    Become Project Second Home's partner
                  </p>
                  <h1 className="banner_h1">
                    Increase Income with Project Second Home (PSH)
                  </h1>
                  <p className="banner_partner_p2 my-4">
                    Become a PSH partner to maximize your property profits and
                    enjoy hassle-free profits.
                  </p>
                  <div className="md:flex  gap-4">
                    <div
                      className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg"
                      style={{ width: 220 }}
                    >
                      List Your Property
                    </div>
                    <div
                      className="justify-between items-stretch border flex gap-px pl-3 pr-4 py-2 rounded-lg border-solid border-white"
                      style={{ width: 220 }}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acafaceab7794f50dc75a52aade2c6ed5eabd94dd1236c337c5bddd85becb4d?apiKey=e4c55b3835e0471b869cabb50a0b8cd9&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-center text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Contact the PSH Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-6 ">
            <img
              src="assets/img/partners_hero.png.png"
              alt=""
              style={{ height: "100vh", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="custom-container">
        <h2 className="text-xl font-bold mb-5 mt-12">
          PSH's choice of housing for companies
        </h2>
        <div className="all_promo slider_margin card-slider ">
          <Slider {...settings}>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/jadi_partner_rukita.png.png"
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Become PSH's partner</p>
                  <p className="content my-3">
                    Register your boarding, coliving or apartment business to be
                    part of Project Second Home.
                  </p>

                  <button className="partner_btn">View More</button>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="overflow-hidden ">
                <div color="transparent" className="m-0 rounded-none">
                  <img
                    src="assets/img/build_for_rent.png.png"
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2 ">
                  <p className="business font-bold">Build for Rent</p>

                  <p className="content my-3" style={{ width: "90%" }}>
                    Turn your passive assets into a profitable property
                    business.
                  </p>
                  <button className="partner_btn">View More</button>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="overflow-hidden">
                <div color="transparent" className="m-0 rounded-none">
                  <img
                    src="assets/img/rufinance.png.png"
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold ">PSH Finance</p>

                  <p className="content my-3">
                    PSH Finance is ready to help with financing, construction,
                    renovation and operations.
                  </p>
                  <button className="partner_btn">View More</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="banner2 mt-5">
        <div className="custom-container">
          <h2 className="text-xl font-bold mb-5 pt-16">
            Why do you need to be PSH's as a partner?
          </h2>
          <div className="all_promo slider_margin card-slider my-12">
            <Slider {...settings}>
              <div className="group relative">
                <div className="overflow-hidden">
                  <div className="justify-center items-center bg-teal-800 flex gap-5 pl-8 pr-20 py-7 rounded-xl">
                    <div className="justify-center text-teal-600 text-3xl font-medium leading-[64px] whitespace-nowrap my-auto">
                      <span className="text-white">85% </span>
                      <span className="text-teal-600">+</span>
                    </div>
                    <div className="justify-center text-white text-base font-medium leading-6">
                      Average Occupancy Rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="overflow-hidden">
                  <div className="justify-center items-center bg-teal-800 flex gap-5 pl-8 pr-20 py-7 rounded-xl">
                    <div className="justify-center text-teal-600 text-3xl font-medium leading-[64px] whitespace-nowrap my-auto">
                      <span className="text-white">85% </span>
                      <span className="text-teal-600">+</span>
                    </div>
                    <div className="justify-center text-white text-base font-medium leading-6">
                      Average Occupancy Rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="overflow-hidden">
                  <div className="justify-center items-center bg-teal-800 flex gap-5 pl-8 pr-20 py-7 rounded-xl">
                    <div className="justify-center text-teal-600 text-3xl font-medium leading-[64px] whitespace-nowrap my-auto">
                      <span className="text-white">85% </span>
                      <span className="text-teal-600">+</span>
                    </div>
                    <div className="justify-center text-white text-base font-medium leading-6">
                      Average Occupancy Rate
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="all_promo slider_margin card-slider ">
            <Slider {...settings}>
              <div className="group relative">
                <div className="overflow-hidden">
                  <div className="m-0 rounded-none">
                    <img
                      src="assets/img/penghasilan_bebas_ribet_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">
                      Hassle-Free Income
                    </p>
                    <p className="content">
                      Rukita siap mengurus, mengelola, dan memelihara semua
                      urusan properti Anda mulai dari biaya operasional, gaji
                      staf hingga tagihan utilitas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="overflow-hidden ">
                  <div color="transparent" className="m-0 rounded-none">
                    <img
                      src="assets/img/upgrade_design_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">Design Upgrade</p>

                    <p className="content ">
                      Rukita meningkatkan value properti Anda dengan renovasi,
                      upgrade desain interior, dan pembersihan menyeluruh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="overflow-hidden">
                  <div color="transparent" className="m-0 rounded-none">
                    <img
                      src="assets/img/pemeliharaan_gedung_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">
                      Building maintenance
                    </p>

                    <p className="content">
                      Rukita memastikan properti Anda selalu dalam kondisi baik
                      dengan bantuan tim maintenance kami. Semua kamar akan
                      dibersihkan minimal 2x seminggu.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="all_promo slider_margin card-slider mt-8">
            <Slider {...settings}>
              <div className="group relative">
                <div className="overflow-hidden">
                  <div className="m-0 rounded-none">
                    <img
                      src="assets/img/layanan_penghuni_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">Resident Services</p>
                    <p className="content">
                      Rukita akan bertanggung jawab dan siaga untuk memenuhi
                      semua kebutuhan penghuni.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="overflow-hidden ">
                  <div color="transparent" className="m-0 rounded-none">
                    <img
                      src="assets/img/pemasukan_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">
                      Guaranteed Income & Profit Sharing
                    </p>

                    <p className="content ">
                      Penghasilan bulanan Anda dijamin stabil selama 5 tahun &
                      dapatkan keuntungan tambahan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="overflow-hidden">
                  <div color="transparent" className="m-0 rounded-none">
                    <img
                      src="assets/img/aman_2.png.png"
                      alt="ui/ux review check"
                      style={{ height: 220, width: "100%" }}
                    />
                  </div>
                  <div>
                    <p className="business font-bold my-3">Safe from Abuse</p>

                    <p className="content">
                      Rukita is committed to only renting out rooms on a monthly
                      basis to avoid abuse by residents.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <h2 className="text-xl font-bold mb-5 mt-12">
          3 Steps to Become a Rukita Partner
        </h2>
        <div className="all_promo slider_margin card-slider ">
          <Slider {...settings}>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="flex justify-between gap-4 items-start">
                  <div className="justify-center text-white text-lg leading-7 whitespace-nowrap items-center bg-teal-600 aspect-square h-9 px-4 rounded-2xl">
                    1
                  </div>
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                    <div className="justify-center text-black text-lg font-medium leading-7 whitespace-nowrap">
                      Register Property
                    </div>
                    <div className="text-stone-500 text-sm leading-5 whitespace-nowrap mt-2.5">
                      Our team will carry out an evaluation
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="flex justify-between gap-4 items-start">
                  <div className="justify-center text-white text-lg leading-7 whitespace-nowrap items-center bg-teal-600 aspect-square h-9 px-3.5 rounded-2xl">
                    2
                  </div>
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                    <div className="justify-center text-black text-lg font-medium leading-7 whitespace-nowrap">
                      Contract Signature
                    </div>
                    <div className="justify-center text-stone-500 text-sm leading-5 whitespace-nowrap mt-2.5">
                      Check the contract and sign the contract
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="flex justify-between gap-4 items-start">
                  <div className="justify-center text-white text-lg leading-7 whitespace-nowrap items-center bg-teal-600 aspect-square h-9 px-3.5 rounded-2xl">
                    3
                  </div>
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-black text-lg font-medium leading-7 whitespace-nowrap">
                      Enjoy the Results
                    </div>
                    <div className="justify-center text-stone-500 text-sm leading-5 whitespace-nowrap mt-2.5">
                      Sit back and enjoy the results from Rukita
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <div className="all_promo slider_margin card-slider ">
          <Slider {...settings}>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/jadi_partner_rukita.png.png"
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partner;
