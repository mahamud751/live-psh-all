import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import Slider from "react-slick";

import LeftArrow from "../../assets/img/arrow2.png";
import RightArrow from "../../assets/img/arrow1.png";

const Platform = () => {
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
    adaptiveHeight: true,
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
          className: `center ms-[-8px] ${
            lastSlideIndex >= 1 ? "only-forMobile" : ""
          }`,
          afterChange: (index) => {
            setLastSlideIndex(index);
          },
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          speed: 400,
          cssEase: "ease",
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="md:mt-5 sm:mt-5">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Fully furnished Room
                </h5>
                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Prayer Room.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Three times food.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  High Speed Internet.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Dedicative House Keeping Service.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Full Safety and Security.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  AC/Generator , Lift, Geyser.
                </h5>

                <p className="mt-3 text-sm">
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
                <h5 className="text-[1rem] text-black font-bold">
                  Parking Space.
                </h5>

                <p className="mt-3 text-sm">
                  All rooms are equipped with AC, WiFi, and full furnishing.
                  Ready to move in!
                </p>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </div>
      <div className="mt-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4">
            <div className="flex">
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
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4">
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
          <div className=" text-center col-span-12 space-y-3 sm:col-span-12 lg:col-span-4">
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
    </div>
  );
};

export default Platform;
