import React from "react";
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
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";
const Recommended = () => {
  const { data, loading, error, reFetch } = UseFetch(
    `property/properties/recommended`
  );
  // find Published Recommended Property
  const publishedData = data.filter(
    (property) => property?.isPublished === "Published"
  );

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows: publishedData?.length > 5 ? true : false,
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
          {data?.length > 5 ? (
            <Slider {...settings}>
              {data?.map((item) => (
                <SingleCard item={item} />
              ))}
            </Slider>
          ) : (
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-x-5">
              {data?.map((item) => (
                <SingleCard item={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recommended;
