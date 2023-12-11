import React from "react";
import financeArrow from "../../../src/assets/img/arrow-finance.png";
import uppArrow from "../../../src/assets/img/upp-arrow.svg";
import "./PshFinance.css";
const PshFinance = () => {
  return (
    <div className="finance-page">
      <div className="finance">
        <div className="custom-container">
          <div className="grid grid-cols-2">
            <div className="pt-20">
              <p className="text-3xl font-bold">PSH Finance</p>
              <h2 className="text-[50px] font-black mt-14">
                Property Business Financing Solutions
              </h2>
              <p className="text-2xl">
                <span className="text-3xl font-black">Finance</span> is ready to
                help with financing, construction, renovation and operations.
              </p>
              <button className="mt-10">From now on</button>
              <p className="mt-10">
                PT Bank OCBC NISP, Tbk is licensed and supervised by the
                Financial Services Authority (OJK) and is an LPS guarantee
                participant
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="grid grid-cols-12 items-center my-14  gap-x-10">
          <div className="col-span-3">
            <p className="text-2xl font-[700]">
              Coliving Boarding House Business Gets More Profitable with PSH!
            </p>
            <p className="mt-5">
              Feel the improvement after the property collaborates with PSH.
            </p>
          </div>
          <div className="col-span-1">
            <img src={financeArrow} alt="" />
          </div>
          <div className="flex gap-x-10 col-span-8">
            <div className="flex  relative">
              <img src={uppArrow} alt="" />
              <p className="absolute top-0 left-14">Until</p>
              <div className="mt-12">
                <h1 className="until-percent ms-5">85%</h1>
                <p className="ms-5 text-[1rem] font-bold">
                  Average Residential Occupancy Rate
                </p>
              </div>
            </div>
            <div className="flex  relative">
              <img src={uppArrow} alt="" />

              <p className="absolute top-0 left-14">Until</p>
              <div className="mt-12">
                <h1 className="until-percent ms-5">30%</h1>
                <p className="ms-5">Average Income Increase</p>
              </div>
            </div>
            <div className="flex  relative">
              <p className="absolute top-0 left-14">Until</p>
              <img src={uppArrow} alt="" />
              <div className="mt-12">
                <h1 className="until-percent ms-5">20%</h1>
                <p className="ms-5">Potential Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PshFinance;
