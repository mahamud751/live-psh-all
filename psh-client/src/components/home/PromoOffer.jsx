import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import UseFetch from "../../hooks/useFetch";
import "./AllPromo.css";
import { IoIosArrowForward } from "react-icons/io";
const PromoOffer = () => {
  const { data } = UseFetch(`promo`);
  return (
    <div>
      <div className="mt-5">
        <div className="">
          <div className="">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Promo Offers</h2>
              <p>
                <Link
                  to="/promo"
                  className="flex items-center hover:text-[#27b3b1]"
                >
                  See More
                  <div>
                    <IoIosArrowForward />
                  </div>
                </Link>
              </p>
            </div>

            <p className="mb-2">Our best Discount Offers for you</p>
            <div className="all_recommended slider_margin">
              <Splide
                options={{
                  // type: "loop",
                  arrows: data?.length > 3 ? true : false,

                  rewind: true,
                  drag: "free",
                  gap: "1rem",
                  perPage: 3,
                  height: "14rem",
                  pagination: false,
                  breakpoints: {
                    1200: { arrows: true, perPage: 3 },
                    800: { arrows: true, perPage: 2 },
                    640: { arrows: true, perPage: 1, padding: "5rem" },
                  },
                }}
              >
                {data.map((item, i) => (
                  <SplideSlide>
                    <div key={i} className="group relative">
                      <Link to={`/promo/${item._id}`}>
                        <div className="relative w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                          <img
                            src={item.photos[0]}
                            alt=""
                            className="promo_img"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </Link>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/* <div className="mt-6 md:space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {data.map((item, i) => (
                <div key={i} className="group relative">
                  <Link to={`/promo/${item._id}`}>
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={item.photos[0]}
                        alt=""
                        className="promo_img"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoOffer;
