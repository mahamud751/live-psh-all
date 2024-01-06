import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoMdCopy } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

import UseFetch from "../../hooks/useFetch";

const PromoDetails = () => {
  const { id } = useParams();
  const { data } = UseFetch(`promo/${id}`);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false); // State to track whether the link is copied
  const handleCopy = () => {
    navigator.clipboard.writeText(data?.promoCode); // Copy invite link to clipboard
    setIsCopied(true);
    toast.success("Promo Code Successfully copied");
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="custom-container">
      <div className="flex items-center gap-x-3 md:mt-8 sm:mt-5 mb-5">
        <Link to="/" className="hover:text-[#00bbb4] md:block sm:hidden">
          <p>Home</p>
        </Link>
        <p className="sm:hidden md:block">
          <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
        </p>
        <Link to="/promo" className="md:hidden sm:block">
          <p>
            <MdKeyboardArrowLeft className="w-[20px] h-[20px]" />
          </p>
        </Link>
        <Link to="/promo" className="hover:text-[#00bbb4] md:block sm:hidden">
          <p>Promo</p>
        </Link>
        <p className="sm:hidden md:block">
          <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
        </p>

        <p>{data?.promoName}</p>
      </div>
      <div className="md:mx-0 sm:mx-2">
        {data?.photos?.length > 0 ? (
          <img
            className="w-full md:h-[400px] sm:h-[200px]"
            src={data?.photos[0]}
            alt=""
          />
        ) : (
          <p className="text-center">Loading...</p>
        )}

        <div className="">
          <div className="">
            <h2 className="text-2xl font-bold mt-5">{data?.promoName}</h2>
            <div className="flex justify-between">
              <Card className="mt-3 w-full">
                <CardBody className="md:flex justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-x-2">
                      <p className="font-bold">
                        {" "}
                        Promo Code : {data?.promoCode}{" "}
                      </p>
                      <div onClick={handleCopy}>
                        <IoMdCopy className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                    <li>Discount: {data?.promoDiscount} %off</li>
                    <li> Minimum Booking: {data?.minimumDays} Days</li>
                    <li> Expiration Date: {data?.promoEnd}</li>
                  </div>
                </CardBody>
                <div className=" md:mb-20 sm:mb-10">
                  <div
                    className="flex items-center gap-x-1 justify-start"
                    onClick={handleToggleExpand}
                    style={{
                      // background: "#00bbb4",
                      height: 40,
                      // color: "white",
                    }}
                  >
                    <span className="ms-5 text-[1rem] cursor-pointer">
                      {isExpanded ? "Hide Details" : "Show Details"}
                    </span>

                    {isExpanded ? (
                      <span className="cursor-pointer">
                        <IoIosArrowDown
                          style={{
                            width: "20px",
                            height: "20px",
                            rotate: "180deg",
                            transition: "rotate 0.2s ease-in-out",
                          }}
                        />
                      </span>
                    ) : (
                      <span className="cursor-pointer">
                        <IoIosArrowDown
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "rotate 0.2s ease-in-out",
                          }}
                        />
                      </span>
                    )}
                  </div>
                  {isExpanded && (
                    <div className=" text-blue-gray p-5">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2"
                      >
                        How to Use Vouchers:
                      </Typography>
                      <p>1. Select a voucher from the list above.</p>
                      <p>
                        2. During the booking process, enter the voucher code.
                      </p>
                      <p>3.The discount will be applied to your total. </p>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 mt-5"
                      >
                        Terms and Conditions:
                      </Typography>
                      <li>
                        {" "}
                        Vouchers are valid until the expiration date mentioned.
                      </li>
                      <li>
                        {" "}
                        Minimum booking requirements must be met for each
                      </li>
                      <li> Voucher. Each voucher can be used only once.</li>
                    </div>
                  )}
                </div>
                {/* ... (your existing JSX) */}
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        containerStyle={{ top: 150 }}
        toastOptions={{ position: "top-center" }}
      ></Toaster>
    </div>
  );
};

export default PromoDetails;
