import React, { useState } from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import ExtraForm from "../ExtraForm/ExtraForm";
import partnerImg from "../../assets/img/partner-img1.jpeg";
import PartnerService from "../new/PartnerService";
import OtherOpportunities from "../new/OtherOpportunities";
import PartnerFeedback from "../new/PartnerFeedback";
import "./PshFinance.css";

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
                  <p className="text-sm text-white md:text-xl mb-5">
                    Become a PSH angel Investor, Project Director, Franchise
                    Partner or Share holder to maximize your idle money and
                    Increase your property valuation to great a social
                    recognition and hassle free income.
                  </p>

                  <div className="md:flex  gap-4">
                    <div className="">
                      <button
                        className="text-neutral-800 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white  px-4 py-4 rounded-lg"
                        style={{ width: 220 }}
                        onClick={() => handleOpen("sm")}
                      >
                        Apply for Investment
                      </button>
                    </div>
                    <Link to={"/contact"}>
                      <div
                        className="justify-between items-stretch border flex gap-px pl-3 pr-4 py-2 rounded-lg border-solid border-white md:mt-0 mt-3"
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
                    </Link>
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
                      <ExtraForm />
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
      <OtherOpportunities />
      <PartnerFeedback />
    </div>
  );
};

export default PshFinance;
