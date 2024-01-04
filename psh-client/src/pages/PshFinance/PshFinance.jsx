import React, { useState } from "react";
import financeArrow from "../../../src/assets/img/arrow-finance.png";
import financeArrow2 from "../../../src/assets/img/financeArrow2.svg";
import uppArrow from "../../../src/assets/img/upp-arrow.svg";
import placeHolder1 from "../../../src/assets/img/Placeholder.webp";
import placeHolder2 from "../../../src/assets/img/Placeholder-1.webp";
import placeHolder3 from "../../../src/assets/img/Placeholder-2.webp";
import placeHolder4 from "../../../src/assets/img/Placeholder-3.webp";

import step1 from "../../../src/assets/img/step5.png";
import step2 from "../../../src/assets/img/step4.svg";
import step3 from "../../../src/assets/img/step3.svg";
import step4 from "../../../src/assets/img/step2.svg";
import step5 from "../../../src/assets/img/step1.svg";
import financeHome from "../../../src/assets/img/finance-home.png";
import financeDeposit from "../../../src/assets/img/finace-deposit.png";
import financeFunds from "../../../src/assets/img/finace-funds.png";
import pshLogo from "../../../src/assets/img/PSH Favicon 1.png";
import financeBanner from "../../../src/assets/img/finance.png";
import tickSvg from "../../../src/assets/img/tik-svg.png";
import "./PshFinance.css";
import { Link } from "react-router-dom";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import PartnerModal from "../new/PartnerModal";
import ExtraForm from "../ExtraForm/ExtraForm";
import partnerImg from "../../assets/img/partner-img1.jpeg";
import PartnerService from "../new/PartnerService";
import OtherOpportunities from "../new/OtherOpportunities";
import PartnerFeedback from "../new/PartnerFeedback";

const PshFinance = () => {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  return (
    <div className="">
      <div className="banner-left ">
        <div className="grid grid-cols-12  gap-x-8 gap-y-16 ">
          <div className="flex col-span-12 lg:col-span-6 sm:col-span-12 md:col-span-6 relative">
            <div className="absolute left-24 ">
              <div
                className="flex justify-center items-center"
                style={{ height: "100vh" }}
              >
                <div className="">
                  <h1 className="banner_h1 text-white mb-10">
                    Invest and Grow with Project Second Home
                  </h1>
                  <p className=" text-sm text-white text-xl mb-5">
                    Become a PSH angel Investor, Project Director, Franchise
                    Partner or Share holder to maximize your idle money and
                    Increase your property valuation to great a social
                    recognition and hassle free income.
                  </p>

                  <div className="md:flex  gap-4">
                    {/* <div className="sm:mb-3 md:mb-0">
                      <button
                        className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg"
                        style={{ width: 220 }}
                        onClick={() => handleOpen("sm")}
                      >
                        List Your Property
                      </button>
                    </div> */}
                    <div
                      className="justify-between items-stretch border flex gap-px pl-3 pr-4 py-2 rounded-lg border-solid border-white"
                      style={{ width: 220 }}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5acafaceab7794f50dc75a52aade2c6ed5eabd94dd1236c337c5bddd85becb4d?apiKey=e4c55b3835e0471b869cabb50a0b8cd9&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-center text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Contact the PSH Team
                      </div>
                    </div>
                  </div>
                  <Dialog
                    open={size === "sm"}
                    size={size || "sm"}
                    handler={handleOpen}
                    style={{ height: "100vh", overflow: "scroll" }}
                  >
                    <DialogHeader>
                      {" "}
                      <div
                        className="flex justify-end text-3xl text-black"
                        onClick={() => handleOpen(null)}
                      >
                        <i className="fa-solid fa-circle-xmark cursor-pointer"></i>
                      </div>
                    </DialogHeader>
                    <DialogBody className="p-2">
                      <PartnerModal />
                    </DialogBody>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 md:col-span-6 w-full">
            <img
              src={partnerImg}
              alt=""
              style={{ height: "100vh", width: "100%" }}
            />
          </div>
        </div>
      </div>

      <PartnerService />
      {/* Other Opportunities */}

      <OtherOpportunities />
      {/* Partner FeadBack */}
      <PartnerFeedback />
    </div>
  );
};

export default PshFinance;
