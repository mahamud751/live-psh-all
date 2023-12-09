import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { IoIosArrowForward } from "react-icons/io";
import UseFetch from "../../hooks/useFetch";
import SingleCard from "./SingleCard";
import { settings } from "../../slider/Slider";
import "./Recommended.css";
import AllRecomonded from "./AllRecomonded";
import { Link } from "react-router-dom";
import LeftArrow from "../../assets/img/arrow2.png";
import RightArrow from "../../assets/img/arrow1.png";
import Slider from "react-slick";

const Recommended = () => {
  const { data, loading, error, reFetch } = UseFetch(
    `property/properties/recommended`
  );
  // find Published Recommended Property
  const publishedData = data.filter(
    (property) => property?.isPublished === "Published"
  );

  const [lastSlideIndex, setLastSlideIndex] = useState(0);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
    if (lastSlideIndex === 0) {
      return null;
    } else {
      return <img src={LeftArrow} alt="prevArrow" {...props} />;
    }
  };

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
    if (lastSlideIndex === publishedData?.length - 5) {
      return null;
    } else {
      return <img src={RightArrow} alt="nextArrow" {...props} />;
    }
  };
  const settings = {
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (index) => {
      setLastSlideIndex(index);
    },
    adaptiveHeight: true,
    infinite: false,
    speed: 400,
    arrows: publishedData?.length > 5 ? true : false,
    autoplay: false,
    swipeToSlide: true,
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

          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,

          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          className: `center ms-5 ${
            lastSlideIndex >= publishedData?.length - 1 ? "only-forMobile" : ""
          }`,
          afterChange: (index) => {
            setLastSlideIndex(index);
          },
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          initialSlide: 1,
          speed: 400,
          cssEase: "ease-out",
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="md:mt-5 sm:mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Our Best Recommend
        </h2>
        <p>
          <Link
            to="/recomended"
            className="flex items-center hover:text-[#27b3b1]"
          >
            See More
            <div>
              <IoIosArrowForward />
            </div>
          </Link>
        </p>
      </div>

      <span className="text-[1rem]">Our best rooms available for you</span>
      {publishedData?.length > 0 ? (
        <div className="all_recommended mt-4 slider_margin card-slider">
          {/* <Splide
            options={{
              // type: "loop",
              arrows: publishedData?.length > 5 ? true : false,
              rewind: true,
              drag: "free",
              autoplay: true,
              gap: "1rem",
              perPage: 5,
              height: "22rem",
              pagination: false,
              breakpoints: {
                1200: { arrows: true, perPage: 4 },
                800: { arrows: true, perPage: 2 },
                640: { arrows: true, perPage: 1 },
              },
            }}
          >
            {publishedData.map((item, i) => (
              <SplideSlide>
                <SingleCard item={item} key={i} />
              </SplideSlide>
            ))}
          </Splide> */}

          <Slider {...settings}>
            {publishedData?.map((item) => (
              <SingleCard item={item} />
            ))}
          </Slider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recommended;
