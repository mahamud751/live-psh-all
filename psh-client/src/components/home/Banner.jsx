import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Header from "./Header";
import cover1 from "../../assets/img/cover1.jpg";
import cover2 from "../../assets/img/cover2.jpg";
import PopUp from "./PopUp";
import UseFetch from "../../hooks/useFetch";
import Slider from "react-slick";

const Banner = () => {
  const { data, loading, error, reFetch } = UseFetch(`banner`);

  const settings = {
    dots: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 480,
        settings: {
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
    <>
      <div style={{ zIndex: "000" }}>
        <div>
          <Slider {...settings}>
            {data?.map((pd, i) => (
              <div>
                <img
                  key={i}
                  src={pd.photos[0]}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <PopUp /> */}
    </>
  );
};

export default Banner;
