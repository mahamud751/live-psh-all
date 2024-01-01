import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import Slider from "react-slick";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import partnerImg from "../../assets/img/partner-img1.jpeg";
import PartnerService from "./PartnerService";
import "./partner.css";
import PartnerModal from "./PartnerModal";
import PartnerFeedback from "./PartnerFeedback";
import { Link } from "react-router-dom";

const Partner = () => {
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
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 ">
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 md:col-span-6">
            <div className="2xl:ms-72">
              <div
                className="flex justify-center items-center"
                style={{ height: "100vh" }}
              >
                <div className="">
                  <h1 className="banner_h1">What we do?</h1>
                  <p className=" text-sm text-white">
                    PSH women dormitory which is working on women accommodation,
                    safety and security who come from outside to Dhaka for
                    Study, Job and Treatment purpose etc.
                  </p>
                  <p className="text-sm mb-4 text-white">
                    As well we are here to manage and give you potential
                    property counseling, Business Collaboration opportunities
                    and carrying your property maintenance issues.
                  </p>
                  <div className="md:flex  gap-4">
                    <div className="sm:mb-3 md:mb-0">
                      <button
                        className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg"
                        style={{ width: 220 }}
                        onClick={() => handleOpen("sm")}
                      >
                        List Your Property
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
                      <PartnerModal />
                    </DialogBody>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 md:col-span-6 ">
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
          PSH's choice of Housing for companies
        </h2>
        <div className="all_promo slider_margin card-slider ">
          <Slider {...settings}>
            <div className="group relative">
              <div className="overflow-hidden">
                <div className="m-0 rounded-none">
                  <img
                    src="assets/img2/jadi_partner_rukita.png (1).png"
                    alt="ui/ux review check"
                    style={{ height: 269, width: "100%" }}
                  />
                </div>
                <div className="md:p-4 sm:p-2  ">
                  <p className="business font-bold">Partnership with PSH</p>
                  <p className="content my-3">
                    Introducing and Registering your Ideal money, Co-living or
                    Apartment Business to be a part of Project Second Home
                  </p>
                  <button className="partner_btn">
                    Register your property{" "}
                  </button>
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
                  <p className="business font-bold">Lease for Property</p>

                  <p className="content my-3" style={{ width: "90%" }}>
                    Turn Your Inactive / Lazy assets into a profitable Property
                    Business effectively by generating growths
                  </p>
                  <button
                    className="partner_btn"
                    onClick={() => handleOpen("sm")}
                  >
                    connect with us
                  </button>
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
                    PSH Finance is ready to assist in potential financing,
                    Constructing, Renovating Business and operating efficient
                    ideas
                  </p>
                  <Link to={"/psh-finance"}>
                    <button className="partner_btn">
                      Investment opportunities
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <PartnerService />

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
                      Project Second Home siap mengurus, mengelola, dan
                      memelihara semua urusan properti Anda mulai dari biaya
                      operasional, gaji staf hingga tagihan utilitas.
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
                      Project Second Home meningkatkan value properti Anda
                      dengan renovasi, upgrade desain interior, dan pembersihan
                      menyeluruh.
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
                      Project Second Home memastikan properti Anda selalu dalam
                      kondisi baik dengan bantuan tim maintenance kami. Semua
                      kamar akan dibersihkan minimal 2x seminggu.
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
                      Project Second Home akan bertanggung jawab dan siaga untuk
                      memenuhi semua kebutuhan penghuni.
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
                      Project Second Home is committed to only renting out rooms
                      on a monthly basis to avoid abuse by residents.
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
          3 Steps to Become a Project Second Home Partner
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
                      Sit back and enjoy the results from Project Second Home
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="w-full">
        <PartnerLastCard />
      </div> */}
      <PartnerFeedback />
      <div>
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
            style={{ height: 420 }}
          >
            <div>
              <p className="header3">List Your Property & Enjoy the Benefits</p>
              <div className="md:flex justify-center items-center gap-4">
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
      </div>
    </div>
  );
};

export default Partner;
