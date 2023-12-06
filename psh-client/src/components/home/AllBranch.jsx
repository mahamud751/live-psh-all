import React from "react";
import "./AllBranch.css";
import UseFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Slider from "react-slick";
const AllBranch = () => {
  const { data } = UseFetch(`branch`);

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
    arrows: data?.length > 4 ? true : false,
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
    <div>
      <div>
        <div className=" ">
          <div className="">
            <h2 className="text-xl font-bold ">
              Looking For Best Place To Stay{" "}
            </h2>
            <span className="mt-2 text-[1rem]">
              Our available Branches for your stay
            </span>
            <div className="all_recommended mt-4 slider_margin card-slider">
              {/* <Splide
                options={{
                  // type: "loop",
                  arrows: data?.length > 4 ? true : false,
                  rewind: true,
                  drag: "free",
                  autoplay: true,
                  gap: "1rem",
                  perPage: 4,
                  height: "14rem",
                  pagination: false,
                  breakpoints: {
                    1200: { arrows: true, perPage: 4 },
                    800: { arrows: true, perPage: 2 },
                    640: { arrows: true, perPage: 1, padding: "5rem" },
                  },
                }}
              >
                {data.map((item, i) => (
                  <SplideSlide>
                    <div className="items-start ">
                      <Link to={`/branch/${item._id}`}>
                        <Card
                          shadow={false}
                          className="relative grid h-[14rem] items-end justify-center overflow-hidden text-center"
                        >
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className={`absolute inset-0 m-0 rounded-none bg-cover bg-center`}
                            style={{
                              backgroundImage: `url('${item.photos[0]}')`,
                            }}
                          >
                            <div className="to-bg-black-10 absolute inset-0 bg-gradient-to-t from-black/80 " />
                          </CardHeader>
                          <CardBody className="relative ">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              <i className="fa-solid fa-location-dot text-white me-3 mt-1"></i>
                              <Typography
                                variant="h5"
                                className="mb-4 text-white "
                              >
                                {item.name}
                              </Typography>
                            </div>
                          </CardBody>
                        </Card>
                   
                      </Link>
                    </div>
                  </SplideSlide>
                ))}
              </Splide> */}

              {/* For Mobile */}
              <div className="md:hidden sm:block">
                <Slider {...settings}>
                  {data?.map((item) => (
                    <div className="items-start ">
                      <Link to={`/branch/${item._id}`}>
                        <Card
                          shadow={false}
                          className="relative grid h-[14rem] items-end justify-center overflow-hidden text-center"
                        >
                          <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className={`absolute inset-0 m-0 rounded-none bg-cover bg-center`}
                            style={{
                              backgroundImage: `url('${item.photos[0]}')`,
                            }}
                          >
                            <div className="to-bg-black-10 absolute inset-0 bg-gradient-to-t from-black/80 " />
                          </CardHeader>
                          <CardBody className="relative ">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              <i className="fa-solid fa-location-dot text-white me-3 mt-1"></i>
                              <Typography
                                variant="h5"
                                className="mb-4 text-white "
                              >
                                {item.name}
                              </Typography>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
              {/* For Desktom */}
              <div className="md:block sm:hidden">
                {data?.length > 4 ? (
                  <Slider {...settings}>
                    {data?.map((item) => (
                      <div className="items-start ">
                        <Link to={`/branch/${item._id}`}>
                          <Card
                            shadow={false}
                            className="relative grid h-[14rem] items-end justify-center overflow-hidden text-center"
                          >
                            <CardHeader
                              floated={false}
                              shadow={false}
                              color="transparent"
                              className={`absolute inset-0 m-0 rounded-none bg-cover bg-center`}
                              style={{
                                backgroundImage: `url('${item.photos[0]}')`,
                              }}
                            >
                              <div className="to-bg-black-10 absolute inset-0 bg-gradient-to-t from-black/80 " />
                            </CardHeader>
                            <CardBody className="relative ">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                }}
                              >
                                <i className="fa-solid fa-location-dot text-white me-3 mt-1"></i>
                                <Typography
                                  variant="h5"
                                  className="mb-4 text-white "
                                >
                                  {item.name}
                                </Typography>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-x-5">
                    {data?.map((item) => (
                      <div className="items-start ">
                        <Link to={`/branch/${item._id}`}>
                          <Card
                            shadow={false}
                            className="relative grid h-[14rem] items-end justify-center overflow-hidden text-center"
                          >
                            <CardHeader
                              floated={false}
                              shadow={false}
                              color="transparent"
                              className={`absolute inset-0 m-0 rounded-none bg-cover bg-center`}
                              style={{
                                backgroundImage: `url('${item.photos[0]}')`,
                              }}
                            >
                              <div className="to-bg-black-10 absolute inset-0 bg-gradient-to-t from-black/80 " />
                            </CardHeader>
                            <CardBody className="relative ">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                }}
                              >
                                <i className="fa-solid fa-location-dot text-white me-3 mt-1"></i>
                                <Typography
                                  variant="h5"
                                  className="mb-4 text-white "
                                >
                                  {item.name}
                                </Typography>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBranch;
