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
const Recommended = () => {
  const { data, loading, error, reFetch } = UseFetch(
    `property/properties/recommended`
  );
  // find Published Recommended Property
  const publishedData = data.filter(
    (property) => property?.isPublished === "Published"
  );
  return (
    <div className="md:mt-5 sm:mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
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
        <div className="all_recommended mt-4 slider_margin">
          <Splide
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
                640: { arrows: true, perPage: 1, padding: "5rem" },
              },
            }}
          >
            {publishedData.map((item, i) => (
              <SplideSlide>
                <SingleCard item={item} key={i} />
              </SplideSlide>
            ))}
          </Splide>

          {/* <Slider {...settings}>
              {data?.map((item) => (
                <SingleCard item={item} />
              ))}
            </Slider> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recommended;
