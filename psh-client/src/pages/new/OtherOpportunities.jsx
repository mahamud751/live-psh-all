import React, { useState } from "react";
import Slider from "react-slick";

import DirectoshipImg from "../../assets/img/directorship.png";
import FranchiseImg from "../../assets/img/franchise.png";
import ShareHolderImg from "../../assets/img/share-holder.png";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

const OtherOpportunities = () => {
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
    <div className="custom-container">
      <h2 className="text-xl font-bold mb-5 mt-12 uppercase">
        Other Opportunities :
      </h2>
      <div className="all_promo slider_margin card-slider ">
        <Slider {...settings}>
          <div className="group relative">
            <div className="overflow-hidden">
              <div className="m-0 rounded-none">
                <img
                  src={DirectoshipImg}
                  alt="ui/ux review check"
                  style={{ height: 269, width: "100%" }}
                />
              </div>
              <div className="md:p-4 sm:p-2  ">
                <p className="business font-bold ">Directorship</p>
                <p className="content mt-3">
                  You can be a partner of PSH in your own Premises.
                </p>
                <button className="partner_btn mt-10">View More</button>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="overflow-hidden ">
              <div color="transparent" className="m-0 rounded-none">
                <img
                  src={FranchiseImg}
                  alt="ui/ux review check"
                  style={{ height: 269, width: "100%" }}
                />
              </div>
              <div className="md:p-4 sm:p-2 ">
                <p className="business font-bold">Franchise Partner</p>

                <p className="content my-3" style={{ width: "90%" }}>
                  A Franchise owner can use our Brand to Collab a business with
                  us having brand and self recognition.
                </p>
                <button
                  className="partner_btn"
                  // onClick={() => handleOpen("sm")}
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="overflow-hidden">
              <div color="transparent" className="m-0 rounded-none">
                <img
                  src={ShareHolderImg}
                  alt="ui/ux review check"
                  style={{ height: 269, width: "100%" }}
                />
              </div>
              <div className="md:p-4 sm:p-2  ">
                <p className="business font-bold ">Share Holder</p>

                <p className="content my-6">
                  You can grab shares of Project Second Home by lease your
                  property.
                </p>
                {/* <Link to={"/psh-finance"}>
                  <button className="partner_btn">View More</button>
                </Link> */}

                <button className="partner_btn">View More</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OtherOpportunities;
