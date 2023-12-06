import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import forMobile1 from "../../assets/img/formobile1.png";
import forMobile2 from "../../assets/img/formobile2.png";
import forMobile3 from "../../assets/img/formobile3.png";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";

const Platform = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    // arrows: publishedData?.length > 5 ? true : false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
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
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          className: "center ms-5",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="md:mt-10 sm:mt-5">
      <h2 className="text-xl font-bold mb-5">
        Why this platform better then others?
      </h2>
      <div className="all_promo slider_margin card-slider ">
        <Slider {...settings}>
          <div className="group relative">
            <Card className="overflow-hidden ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="/images/fully-furnished@3x.webp.png"
                  alt="ui/ux review check"
                  style={{ height: 200, width: "100%" }}
                />
              </CardHeader>
              <CardBody className="md:p-4 sm:p-2  ">
                <h6 className="text-sm text-black font-bold">
                  Fully furnished Room
                </h6>
                <p className="mt-3">
                  All rooms are equipped with AC, WiFi, and full furnishing.
                  Ready to move in!
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="group relative">
            <Card className="overflow-hidden ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="/images/fully-furnished@3x.webp-1.png"
                  alt="ui/ux review check"
                  style={{ height: 200, width: "100%" }}
                />
              </CardHeader>
              <CardBody className="md:p-4 sm:p-2 ">
                <h6 className="text-sm text-black font-bold">Full services</h6>

                <p className="mt-3">
                  All rooms are equipped with AC, WiFi, and full furnishing.
                  Ready to move in!
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="group relative">
            <Card className="overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="/images/fully-furnished@3x.webp-2.png"
                  alt="ui/ux review check"
                  style={{ height: 200, width: "100%" }}
                />
              </CardHeader>
              <CardBody className="md:p-4 sm:p-2  ">
                <h6 className="text-sm text-black font-bold">
                  Fully furnished Room
                </h6>

                <p className="mt-3">
                  All rooms are equipped with AC, WiFi, and full furnishing.
                  Ready to move in!
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="group relative">
            <Card className="overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="images/fully-furnished@3x.webp-3.png"
                  alt="ui/ux review check"
                  style={{ height: 200, width: "100%" }}
                />
              </CardHeader>
              <CardBody className="md:p-4 sm:p-2  ">
                <h6 className="text-sm text-black font-bold">
                  Fully furnished Room
                </h6>

                <p className="mt-3">
                  All rooms are equipped with AC, WiFi, and full furnishing.
                  Ready to move in!
                </p>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </div>

      {/* For Desktop */}
      <div className="mt-12 sm:hidden md:block">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 ">
            <div className="flex ">
              <img src="/images/Frame 3727.png" alt="" />
              <div style={{ marginLeft: 40, marginTop: 120 }}>
                <img src="/images/Line 1 (Stroke).png" alt="" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h2>Search on Maps</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4">
            <div className="flex">
              <img src="/images/Group.png" alt="" />
              <div style={{ marginLeft: 40, marginTop: 120 }}>
                <img src="/images/Line 1 (Stroke).png" alt="" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h2>Select Your Perfect Room</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
          <div className=" text-center col-span-12 space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4">
            <div className="flex">
              <img src="/images/Frame 3726.png" alt="" />
            </div>
            <div className="flex justify-center w-full">
              <h2>Book and Get Ready to Stay</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
        </div>
      </div>
      {/* For Mobile */}
      {/* <div className="mt-12 ">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile1} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile2} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile3} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Platform;
