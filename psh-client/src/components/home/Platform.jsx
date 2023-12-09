import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import forMobile1 from "../../assets/img/formobile1.png";
import forMobile2 from "../../assets/img/formobile2.png";
import forMobile3 from "../../assets/img/formobile3.png";

import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";

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
    speed: 500,
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
          speed: 400,
          cssEase: "ease",
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
    </div>
  );
};

export default Platform;
