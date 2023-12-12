import React from "react";
import UseFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import LeftArrow from "../../assets/img/arrow2.png";
import RightArrow from "../../assets/img/arrow1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Banner = () => {
  const { data } = UseFetch(`banner`);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          padding: 20,
        },
      },
    ],
  };

  return (
    <>
      <div style={{ zIndex: "000" }}>
        <div className=" p-0 banner-slider  all_recommended">
          <Splide
            options={{
              type: "loop",

              rewind: true,

              autoplay: true,
              arrows: true,
              perPage: 1,
              height: "25rem",
              perMove: 1,
              autoplaySpeed: 1000,
              pagination: false,
              breakpoints: {
                1200: { arrows: true, perPage: 1 },
                800: { arrows: true, perPage: 1 },
                640: {
                  arrows: false,
                  perPage: 1,
                  pagination: false,
                  height: "10rem",
                  type: "loop",
                  autoplay: true,
                  rewind: true,
                  perMove: 1,
                  autoplaySpeed: 1000,
                },
              },
            }}
          >
            {data?.map((pd, i) => (
              <SplideSlide>
                <img
                  key={i}
                  src={pd.photos[0]}
                  alt="image 2"
                  className=" w-full h-full"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* <PopUp /> */}
    </>
  );
};

export default Banner;
