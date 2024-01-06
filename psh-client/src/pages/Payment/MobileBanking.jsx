import React from "react";
import { useState } from "react";

import bkash from "../../assets/img/bkash.png";
import nagad from "../../assets/img/Nagad-Logo.png";
import dutch from "../../assets/img/dutch-logo.png";

import "./MobileBanking.css";

const MobileBanking = () => {
  const [showBkash, setShowBkash] = useState(true);
  const [showNagad, setShowNagad] = useState(false);
  const [showDucth, setShowDutch] = useState(false);

  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  let toggleClassCheck2 = isActive2 ? "active" : "";
  let toggleClassCheck3 = isActive3 ? "active" : "";
  let toggleClassCheck4 = isActive4 ? "active" : "";

  return (
    <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
      <div className="payment_option">
        <div className="bkash mobile-payment flex items-center">
          <div
            onClick={() => {
              return (
                setShowBkash(true),
                setShowNagad(false),
                setShowDutch(false),
                setIsActive2(true),
                setIsActive3(false),
                setIsActive4(false)
              );
            }}
            className={`mb-4 ${toggleClassCheck2}`}
          >
            <input
              id="bkash"
              style={{ height: "18px", width: "18px" }}
              className="radio-button2"
              type="radio"
              name="payment"
              value="bkash"
              defaultChecked
            />
          </div>
          <label for="bkash" className="ms-3">
            <div>
              <img src={bkash} alt="" />
            </div>
          </label>
        </div>
        {showBkash ? (
          <div>
            <p className="text-left">
              Please complete the payment first by filling the form below Place
              the order.
            </p>
            <p className="text-left">
              Please send the total charge to the following bKash personal
              number. After that The transaction was done from bKash number and
              that transaction Attach the number/id in the box below.
            </p>
            <p className="text-left">bKash Personal Number : 01622738449</p>
            <div className="flex items-center mt-5">
              <div>
                <p className="text-[1rem]">Bkash Number :</p>
              </div>
              <div>
                <input
                  className="ms-3 mt-4"
                  name="bkashNumber"
                  required
                  type="text"
                  placeholder="017xxxxxxxxxxx"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-[1rem]">bKash Tranx ID :</p>
              </div>
              <div>
                <input
                  className="ms-3 mt-4 "
                  name="bkashTrx"
                  required
                  type="text"
                  placeholder="8N6MM9REN"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* nagad */}
      <div>
        <div className="nagad mobile-payment flex items-center">
          <div
            onClick={() => {
              return (
                setShowBkash(false),
                setShowNagad(true),
                setShowDutch(false),
                setIsActive2(false),
                setIsActive3(true),
                setIsActive4(false)
              );
            }}
            className={`mb-4 ${toggleClassCheck3}`}
          >
            <input
              id="nagad"
              style={{ height: "18px", width: "18px" }}
              className="radio-button2"
              type="radio"
              name="payment"
              value="nagad"
            />
          </div>
          <label for="nagad" className="ms-3">
            <div>
              <img src={nagad} alt="" />
            </div>
          </label>
        </div>
        {showNagad ? (
          <div>
            <p className="text-left">
              Please complete the payment first by filling the form below Place
              the order.
            </p>
            <p className="text-left">
              Accept the total charge send to the following Nagad personal
              number. After that The transaction is done from Nagad number and
              that transaction Attach the number/id in the box below.
            </p>
            <p className="text-left">Nagad Personal Number : 01622738449</p>
            <div className="flex items-center mt-5">
              <div>
                <p>Nagad Number :</p>
              </div>
              <div>
                <input
                  className="ms-3 border ps-2"
                  name="nagadNumber"
                  required
                  type="text"
                  placeholder="017xxxxxxxxxxx"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p>Nagad Tranx ID :</p>
              </div>
              <div>
                <input
                  className="ms-3 mt-1 border ps-2"
                  name="nagadTrx"
                  required
                  type="text"
                  placeholder="8N6MM9REN"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Dutch Bangla */}
      <div>
        <div className="nagad mobile-payment flex items-center">
          <div
            onClick={() => {
              return (
                setShowBkash(false),
                setShowNagad(false),
                setShowDutch(true),
                setIsActive2(false),
                setIsActive3(false),
                setIsActive4(true)
              );
            }}
            className={`mb-4 ${toggleClassCheck4}`}
          >
            <input
              id="dutch"
              style={{ height: "18px", width: "18px" }}
              className="radio-button2"
              type="radio"
              name="payment"
              value="dutch"
            />
          </div>
          <label for="dutch" className="ms-3">
            <div>
              <img src={dutch} alt="" />
            </div>
          </label>
        </div>
        {showDucth ? (
          <div>
            <p className="text-left">
              Please complete the payment first by filling the form below Place
              the order.
            </p>
            <p className="text-left ">
              Accept the total charge send to the following cash personal
              number. After that Enter the cash number from which the
              Transaction was made and the Transaction number/id in the box
              below.
            </p>
            <p className="text-left">
              Ducth-Bangla Personal Number : 01622738449
            </p>
            <div className="flex items-center mt-5">
              <div>
                <p>Dutch Bangla No :</p>
              </div>
              <div>
                <input
                  className="ms-3 border ps-2"
                  name="dutchNumber"
                  required
                  type="text"
                  placeholder="017xxxxxxxxxxx"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p>Trx ID : </p>
              </div>
              <div className="ms-20">
                <input
                  className="ms-3 mt-1 border ps-2"
                  name="dutchTrx"
                  required
                  type="text"
                  placeholder="8N6MM9REN"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileBanking;
