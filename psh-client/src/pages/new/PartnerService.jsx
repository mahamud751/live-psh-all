import React, { useState } from "react";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";

const PartnerService = () => {
  const [lastSlideIndex, setLastSlideIndex] = useState(0);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,

    slidesToShow: 4,
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
          slidesToShow: 4,
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
      <div className="custom-container">
        <h2 className="text-xl font-bold mb-5 mt-12">Service Coverage</h2>
        <div className="all_promo slider_margin card-slider ">
          <Slider {...settings}>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/service_perencanaan.jpg.png"
                    alt="ui/ux review check"
                    style={{ height: 195, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Planning</p>
                  <div className="text-stone-500 text-sm leading-5">
                    <ul className="partner_li mt-4">
                      <li>Market insight</li>
                      <li>Studi kelayakan</li>
                      <li>Penentuan harga</li>
                      <li>Product proposition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/Image-1.jpg.png"
                    alt="ui/ux review check"
                    style={{ height: 195, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Architecture & Design </p>
                  <div className="text-stone-500 text-sm leading-5">
                    <ul className="partner_li mt-3">
                      <li>Schematic plan</li>
                      <li>Drawings</li>
                      <li>Desain interior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/Image-2.jpg.png"
                    alt="ui/ux review check"
                    style={{ height: 195, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Construction</p>
                  <div className="text-stone-500 text-sm leading-5">
                    <ul className="partner_li mt-3">
                      <li>RAB</li>
                      <li>Kontraktor</li>
                      <li>Manajemen proyek</li>
                      <li>Manajemen konstruksi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img/Image-3.jpg.png"
                    alt="ui/ux review check"
                    style={{ height: 195, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Marketing & Operations</p>
                  <div className="text-stone-500 text-sm leading-5">
                    <ul className="partner_li mt-3">
                      <li> Marketing & sales</li>
                      <li>Layanan penghuni</li>
                      <li>Maintenance gedung</li>
                      <li>Revenue management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="banner3">
        <div className="custom-container pb-20">
          <h2 className="text-xl font-bold mb-5 mt-12 text-center py-12">
            Property Rental Investment Proven to be More Profitable
          </h2>
          <div className="all_promo slider_margin card-slider">
            <Slider {...settings}>
              <div>
                <p className=" text-black text-center text-xl font-medium ">
                  House Renting
                </p>
                <p className=" text-black text-5xl text-center font-medium w-full mt-4">
                  2.5 - 5%
                </p>
                <p className=" text-stone-500 text-base text-center leading-6 self-center whitespace-nowrap mt-2">
                  returns per year
                </p>
              </div>
              <div>
                <p className=" text-black text-center text-xl font-medium ">
                  Deposit
                </p>
                <p className=" text-black text-5xl text-center font-medium w-full mt-4">
                  3-6%
                </p>
                <p className=" text-stone-500 text-base text-center leading-6 self-center whitespace-nowrap mt-2">
                  returns per year
                </p>
              </div>
              <div>
                <p className=" text-black text-center text-xl font-medium ">
                  Stock Mutual Funds
                </p>
                <p className=" text-black text-5xl text-center font-medium w-full mt-4">
                  8-15%
                </p>
                <p className=" text-stone-500 text-base text-center leading-6 self-center whitespace-nowrap mt-2">
                  returns per year
                </p>
              </div>
              <div>
                <p className="text-teal-700 text-center text-xl font-medium">
                  Partner with Project Second Home
                </p>
                <p className="text-teal-700 text-5xl text-center font-medium w-full mt-4">
                  15-20%
                </p>
                <p className=" text-stone-500 text-base text-center leading-6 self-center whitespace-nowrap mt-2">
                  returns per year
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerService;
