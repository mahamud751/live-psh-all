import React from "react";
import UseFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
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
    autoplay: true,
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
        <div className=" p-0 banner-slider">
          <Slider {...settings} className="">
            {data?.map((pd, i) => (
              <div>
                <img
                  key={i}
                  src={pd.photos[0]}
                  alt="image 2"
                  className="md:h-[400px] sm:h-full object-cover w-full"
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
