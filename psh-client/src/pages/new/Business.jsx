import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Slider from "react-slick";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import partnerImg from "../../assets/img/corporate-banner.png";
import choiceImg1 from "../../assets/img/choiceImg1.png";
import choiceImg2 from "../../assets/img/choiceImg2.png";
import choiceImg3 from "../../assets/img/choiceImg3.png";

import Benefit from "./Benefit";
import Platform from "../../components/home/Platform";
import OtherOpportunities from "./OtherOpportunities";
import RentRequestModal from "./RentRequestModal";
// import RentRequestModal from "./RentRequestModal";

const Business = () => {
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
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
      <div className="banner-left ">
        <div className="grid grid-cols-12  gap-x-8 gap-y-16 ">
          <div className="flex col-span-12 lg:col-span-6 sm:col-span-12 md:col-span-6 relative">
            <div className="absolute left-24 ">
              <div
                className="flex justify-center items-center"
                style={{ height: "100vh" }}
              >
                <div className="">
                  <h1 className="banner_h1 mb-4 text-white">
                    Residential Solutions for Your Company
                  </h1>
                  <p className=" text-sm text-white mb-4 text-xl">
                    Find complete & comfortable accommodation for your company's
                    needs with Project Second Home.
                  </p>

                  <div className="md:flex  gap-4">
                    <div className="sm:mb-3 md:mb-0">
                      <button
                        className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg"
                        style={{ width: 220 }}
                        onClick={() => handleOpen("sm")}
                      >
                        I am interested in
                      </button>
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
                  <Dialog
                    open={size === "sm"}
                    size={size || "sm"}
                    handler={handleOpen}
                    style={{ height: "100vh", overflow: "scroll" }}
                  >
                    <DialogHeader>
                      {" "}
                      <div
                        className="flex justify-end text-3xl text-black"
                        onClick={() => handleOpen(null)}
                      >
                        <i className="fa-solid fa-circle-xmark cursor-pointer"></i>
                      </div>
                    </DialogHeader>
                    <DialogBody className="p-2">
                      <RentRequestModal />
                    </DialogBody>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 md:col-span-6 w-full">
            <img
              src={partnerImg}
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
                    src={choiceImg1}
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Employee Housing</p>
                  <p className="content">
                    Comfortable and Residential service near the work station
                    for your employees to live in with 30+ services that will
                    make living more
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="overflow-hidden ">
                <div color="transparent" className="m-0 rounded-none">
                  <img
                    src={choiceImg2}
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2 ">
                  <p className="business font-bold">Custom Co-living</p>

                  <p className="content">
                    Your company’s special Co-living Building that can be
                    personalized according to your needs work, play and live.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="overflow-hidden">
                <div color="transparent" className="m-0 rounded-none">
                  <img
                    src={choiceImg3}
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">
                    Accommodation Journey with PSH
                  </p>

                  <p className="content">
                    Full service accommodation for employees and company guest
                    on business trips.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* We Offer */}
      <div className="custom-container">
        <h2 className="text-xl font-bold mb-5 ">What do we offer?</h2>
        <Platform />
      </div>
      <OtherOpportunities />
      {/* <div>
        <Card shadow={false} className="overflow-hidden text-center">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0  w-full  bg-[url('https://i.ibb.co/PC0Jpyv/Background-Section-CTA-jpg.png')]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody
            className="relative flex justify-center items-center"
            style={{ height: 580 }}
          >
            <div>
              <p className="header3">
                Find complete accommodation for your company in PSH!
              </p>
              <div className="md:flex justify-center items-center gap-4">
                <div className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg md:w-[220px]">
                  I am interested in
                </div>
                <div className="justify-between items-stretch border flex gap-px pl-3 pr-4 py-2 rounded-lg border-solid border-white md:mt-0 sm:mt-4">
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
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
};

export default Business;
