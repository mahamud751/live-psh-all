import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Spinner,
} from "@material-tailwind/react";
import Slider from "react-slick";

// import { Card, CardHeader, CardBody } from "@material-tailwind/react";

import UseFetch from "../../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Header from "./Header";
import axios from "axios";
import SingleCard from "./SingleCard";
import { settings } from "../../slider/Slider";
import SearchBoxSm from "./SearchBoxSm";
import LeftArrow from "../../assets/img/left-arrow.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
export default function Categories() {
  const { data, loading, error, reFetch } = UseFetch(`property`);

  const [categories, setCategories] = useState({});
  const [activeTab, setActiveTab] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false); // Track the loading status
  const [randomIndex, setRandomIndex] = useState([]);
  const [lastSlideIndex, setLastSlideIndex] = useState(0);
  // show Random index
  const getRandomData = () => {
    const shuffledData = [...data];

    for (let i = shuffledData.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[random]] = [
        shuffledData[random],
        shuffledData[i],
      ];
    }

    setRandomIndex([...shuffledData]);
  };

  // find Published Property
  const publishRandomProperty = randomIndex?.filter(
    (property) => property?.isPublished === "Published"
  );

  useEffect(() => {
    localStorage.removeItem("seatItem");
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://api.psh.com.bd/api/category",
          {
            mode: "cors",
          }
        );

        const categoryMap = {};

        data.forEach((category) => {
          categoryMap[category?._id] = category?.name;
        });
        setCategories(categoryMap);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const uniqueValues = Array.from(
        new Set(data.map((item) => item?.category?._id))
      );
      // setActiveTab(uniqueValues[0]);
      getRandomData();
      setIsLoaded(true); // Mark data as loaded
    }
  }, [data]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center mt-5">
        <div>
          <Spinner color="green" className="h-10 w-10" />
        </div>
      </div>
    ); // Placeholder for initial loading state
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>; // Placeholder for error state
  }

  const uniqueValues = Array.from(
    new Set(data.map((item) => item?.category?._id))
  );

  const filteredData = data.filter(
    (item) =>
      item.category?._id === activeTab && item?.isPublished === "Published"
  );
  // console.log(filteredData);

  // For Slider

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
    if (lastSlideIndex === 0) {
      return null;
    } else {
      return <img src={LeftArrow} alt="prevArrow" {...props} />;
    }
  };

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
    if (
      lastSlideIndex === publishRandomProperty?.length - 5 ||
      lastSlideIndex === filteredData?.length - 5
    ) {
      return null;
    } else {
      return <img src={RightArrow} alt="nextArrow" {...props} />;
    }
  };

  const settings = {
    dots: false,

    afterChange: (index) => {
      setLastSlideIndex(index);
    },
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,

    className: `center mx-[-15px] `,
    arrows:
      publishRandomProperty?.length > 5 || filteredData?.length > 5
        ? true
        : false,
    autoplay: false,
    autoplaySpeed: 1000,

    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: false,

          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,

          autoplaySpeed: 3000,
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
    <div className="category-item">
      <Header />

      <div className=" text-left mt-3">
        <Tabs value="All" className=" ">
          <TabsHeader
            className="rounded-none border-b bg-transparent p-0 md:gap-x-14 sm:gap-x-4 "
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-[#00BBB4] shadow-none rounded-none ",
            }}
          >
            <Tab
              value="All"
              onClick={() => {
                getRandomData();
                setActiveTab("All");
              }}
              className="w-fit  md:text-[20px] sm:text-[14px] category-type px-0"
            >
              All
            </Tab>
            {uniqueValues.map((type, index) => {
              const item = data.find((item) => item?.category?._id === type);
              if (!item) return null;

              const categoryName = categories[item?.category?._id]; // Get the category name using the ID

              return (
                <Tab
                  key={index}
                  value={type}
                  onClick={() => setActiveTab(type)}
                  style={{ display: "unset" }}
                  className="w-fit md:text-[20px] sm:text-[12px] category-type px-0"
                >
                  {categoryName}
                </Tab>
              );
            })}
          </TabsHeader>
        </Tabs>
        {/* card start */}
      </div>

      <div className="mt-3 all_recommended slider_margin card-slider ">
        {/* <Splide
          options={{
            // type: "loop",
            arrows:
              publishRandomProperty?.length > 5 || filteredData?.length > 5
                ? true
                : false,
            rewind: true,
            drag: "free",

            // autoplay: true,
            gap: "1rem",
            perPage: 5,
            height: "22rem",
            pauseOnHover: true,
            pagination: false,
            breakpoints: {
              1200: { arrows: true, perPage: 4 },
              800: { arrows: true, perPage: 2 },
              640: {
                // type: "loop",
                arrows: true,
                perPage: 1.5,
                height: "22rem",
                drag: "free",
                rewind: true,
                // padding: "5rem",
              },
            },
          }}
        >
          {activeTab === "All"
            ? publishRandomProperty?.map((item) => (
                <SplideSlide>
                  <SingleCard item={item} />{" "}
                </SplideSlide>
              ))
            : filteredData.map((item) => (
                <SplideSlide>
                  <SingleCard item={item} />{" "}
                </SplideSlide>
              ))}
        </Splide> */}
        {publishRandomProperty?.length > 5 || filteredData?.length > 5 ? (
          <Slider {...settings}>
            {activeTab === "All"
              ? publishRandomProperty?.map((item) => <SingleCard item={item} />)
              : filteredData.map((item) => <SingleCard item={item} />)}
          </Slider>
        ) : (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-x-5">
            {activeTab === "All"
              ? publishRandomProperty?.map((item) => <SingleCard item={item} />)
              : filteredData.map((item) => <SingleCard item={item} />)}
          </div>
        )}
      </div>

      {/* <div className=" xl:mx-[244px] lg:mx-32 md:mx-26 mt-3 room-slide">
        <Splide
          options={{
            // type: "loop",
            arrows: true,
            rewind: true,
            drag: "free",

            gap: "1rem",
            perPage: 4,

            pagination: false,
            breakpoints: breakpoints,
          }}
        >
          {activeTab === "All"
            ? randomIndex?.map((item) => (
                <SplideSlide>
                  <SingleCard item={item} />
                </SplideSlide>
              ))
            : filteredData.map((item) => (
                <SplideSlide>
                  <SingleCard item={item} />{" "}
                </SplideSlide>
              ))}
        </Splide>
      </div> */}
    </div>
  );
}
