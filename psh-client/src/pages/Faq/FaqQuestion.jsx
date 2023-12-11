import React, { useContext, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
} from "@material-tailwind/react";

import Booking from "../../components/profile/Booking";
import Ticket from "../../components/profile/Ticket";

import Personal from "../../components/profile/Personal";
import Payment from "../../components/profile/Payment";
import { useState } from "react";
import { MdPayment } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

import { BsGift } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";

import { IoIosPeople } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import EditProfile from "../../components/profile/EditProfile";
import TicketList from "../../components/profile/TicketList";
import Setting from "../../components/profile/Setting";
import Vouchers from "../../components/profile/Vouchers";
import Referral from "../../components/profile/Referral";
import Community from "../../components/profile/Community";

import WishList from "../../components/profile/WishList";

import Svg from "../../assets/img/SVG.svg";
import Svg1 from "../../assets/img/SVG (1).svg";
import Svg2 from "../../assets/img/SVG (2).svg";
import Svg3 from "../../assets/img/SVG (3).svg";
import Svg4 from "../../assets/img/SVG (4).svg";
import Svg5 from "../../assets/img/SVG (5).svg";
import Svg6 from "../../assets/img/SVG (6).svg";
import Svg7 from "../../assets/img/SVG (7).svg";
import Svg8 from "../../assets/img/SVG (8).svg";
import Svg9 from "../../assets/img/SVG (9).svg";
import pshLogo from "../../assets/img/PSH Favicon 1.png";

import "./FaqQuestion.css";
import Faq1 from "./Faq1";
import Faq2 from "./Faq2";
import { useDispatch, useSelector } from "react-redux";
import { placeFaqMenu } from "../../redux/reducers/smProfileMenuSlice";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Faq3 from "./Faq.3";

export default function FaqQuestions() {
  const [activeTab, setActiveTab] = useState("Search and Order");
  const isFaqMenu = useSelector((state) => state?.profileMenu?.isFaqMenu);
  const dispatch = useDispatch();

  const [active, setActive] = useState(0);
  const data2 = [
    {
      label: "Search and Order",
      value: "search",
      icon: <img src={Svg} alt="" style={{ width: "24px", height: "24px" }} />,
    },

    {
      label: "Regarding Check-in",
      value: "Regarding Check-in",
      icon: <img src={Svg1} alt="" style={{ width: "24px", height: "24px" }} />,
    },

    {
      label: "Check-out and Deposit Refund",
      value: "Check-out and Deposit Refund",
      icon: <img src={Svg2} alt="" style={{ width: "24px", height: "24px" }} />,
    },

    {
      label: "Order Cancellations and Changes",
      value: "Order Cancellations and Changes",
      icon: <img src={Svg3} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "Prices and Promotions",
      value: "Prices and Promotions",
      icon: <img src={Svg4} alt="" style={{ width: "24px", height: "24px" }} />,
    },

    {
      label: "Live in PSH",
      value: "Live in PSH",
      icon: <img src={Svg5} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "Loyalty Program",
      value: "Loyalty Program",
      icon: <img src={Svg9} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "Accounts and Security",
      value: "Accounts and Security",
      icon: <img src={Svg6} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "Property Owner",
      value: "Property Owner",
      icon: <img src={Svg7} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "PSH Business",
      value: "PSH Business",
      icon: <img src={Svg8} alt="" style={{ width: "24px", height: "24px" }} />,
    },
    {
      label: "About PSH",
      value: "About PSH",
      icon: (
        <img src={pshLogo} alt="" style={{ width: "24px", height: "24px" }} />
      ),
    },
  ];

  const handleSelectChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 faq-part ">
      <div className="mx-auto max-w-2xl lg:py-5 md:py-5 sm:py-0 lg:max-w-none lg:py-12 ">
        <div className=" ">
          <h3 className="px-1 mt-2 md:mb-10 sm:mb:2 font-bold md:text-2xl sm:text-sm md:text-left sm:text-center">
            FAQs
          </h3>

          <Tabs
            value="search"
            className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-x-5 "
          >
            <div className=" col-span-1 ">
              <TabsHeader
                className={`flex-col w-full profile-left md:border  rounded p-0 lg:block md:block

                  sm:${!isFaqMenu ? "hidden" : "block"}

              `}
              >
                {data2.map((tab, idx) => (
                  <span>
                    <Tab
                      key={idx}
                      onClick={() => {
                        setActive(idx), dispatch(placeFaqMenu(false));
                      }}
                      value={tab.value}
                      className={`${active === idx ? "text-[#35b0a7] " : ""}

                          flex justify-start py-1 `}
                    >
                      <div
                        className=" gap-2 p-2 flex items-center "
                        // onClick={() => dispatch(placeFaqMenu(false))}
                      >
                        <div>{tab.icon}</div>

                        <div className="single-tab text-left">
                          <span>{tab.label}</span>
                        </div>
                      </div>
                    </Tab>
                  </span>
                ))}
              </TabsHeader>
            </div>

            {/* For Desktop */}

            <div className="w-full lg:col-span-3 md:col-span-3 sm:col-span-1 md:mt-0 sm:mt-3 md:block sm:hidden ">
              <TabsBody>
                <TabPanel value="search" className="py-0">
                  <Faq1 />
                </TabPanel>
                <TabPanel value="Regarding Check-in" className="py-0">
                  <Faq2 />
                </TabPanel>
                <TabPanel value="Check-out and Deposit Refund" className="py-0">
                  <Faq3 />
                </TabPanel>
              </TabsBody>
            </div>

            {/* For Mobile */}
            {isFaqMenu ? (
              ""
            ) : (
              <div className="w-full lg:col-span-3 md:col-span-3 sm:col-span-1 md:mt-0 sm:mt-3 md:hidden sm:block ">
                <div
                  className="absolute top-[130px] left-5 md:hidden sm:block"
                  onClick={() => dispatch(placeFaqMenu(true))}
                >
                  <HiArrowNarrowLeft
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <TabsBody>
                  <TabPanel value="search" className="py-0">
                    <Faq1 />
                  </TabPanel>
                  <TabPanel value="Regarding Check-in" className="py-0">
                    <Faq2 />
                  </TabPanel>
                  <TabPanel
                    value="Check-out and Deposit Refund"
                    className="py-0"
                  >
                    <Faq3 />
                  </TabPanel>
                </TabsBody>
              </div>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
