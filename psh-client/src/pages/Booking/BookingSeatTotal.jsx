import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Typography, Tooltip } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import { FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDays, addMonths, addYears, subDays } from "date-fns";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import brachLocationIcon from "../../assets/img/branchLocationIcon.png";
import promoIcon from "../../assets/img/coupon.png";
import { leftDate, rightDate, toTalRent } from "../../redux/reducers/dateSlice";
import { placeBooking } from "../../redux/reducers/bookingSlice";
import useBranch from "../../hooks/useBranch";
import usePromos from "../../hooks/usePromos";
import { AuthContext } from "../../contexts/UserProvider";
import LoginModal from "../../components/shared/LoginModal";
import "./BookingTotalBox.css";
import "../../components/shared/Custom.css";

const BookingSeatTotal = ({ data, seats, extraCharge }) => {
  const { user } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);

  const navigate = useNavigate();

  const [allBranch] = useBranch();
  const branch = allBranch?.find((branch) => branch._id === data?.branch);
  // date handle
  const dispatch = useDispatch();
  const startDate = useSelector((state) => state.dateCount.startDate);
  const endDate = useSelector((state) => state.dateCount.endDate);
  const customerRent = useSelector((state) => state.dateCount.customerRent);
  const seatBooking = useSelector((state) => state.seatBooking.seatBooking);

  const [selectedCheckPayment, setSelectedPayment] = useState(null);

  const [promos] = usePromos();
  const anchorClickHandler = (e) => {
    e.preventDefault();
    const hash = e.target.getAttribute("href").split("#")[1];
    if (hash === "") return false;

    const targetElement = document.getElementById(hash);
    if (targetElement) {
      const navbarHeight =
        document.querySelector(".navbar_sticky").offsetHeight;
      const targetOffsetTop =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    }
  };
  const [userPromo, setUserPromo] = useState({});
  const [discountTk, setDisCountTk] = useState(0);
  const [promoCode, setPromoCode] = useState(null);
  const [promoCodeCheck, setPromoCodeCheck] = useState(false);
  const [showMiniumPayment, setShowMinimumPayment] = useState(false);

  const [subTotal, setSubtotal] = useState(0);

  const [vatTax, setVatTaxt] = useState(
    (subTotal * extraCharge[0]?.vatTax) / 100
  );
  const [addMissionFee, setAddmissionFee] = useState(0);

  const [securityFee, setSecurityFee] = useState(0);

  const [minimumPayment, setMinimumPayment] = useState(0);

  const [totalRentAmount, setTotalRentAmount] = useState(0);

  useEffect(() => {
    // set Extra Charge
    // setAddmissionFee(extraCharge[0]?.admissionFee);
    // setSecurityFee(extraCharge[0]?.securityFee);
    setVatTaxt((subTotal * extraCharge[0]?.vatTax) / 100);

    // If User give a Promo
    const promo = promos.find((promo) => promo?.promoCode === promoCode);
    setUserPromo(promo);

    dispatch(toTalRent());
    // if remainingDays under 1 then auto 1 day adding in Checkout Date

    if (customerRent.remainingDays < 1) {
      dispatch(rightDate(addDays(new Date(startDate), 1)));
    }

    if (
      customerRent?.remainingDays &&
      seatBooking?.perDay &&
      customerRent?.months === undefined &&
      customerRent?.years === undefined
    ) {
      setSubtotal(() => seatBooking?.perDay * customerRent?.remainingDays);
    } else if (
      customerRent?.months !== undefined &&
      customerRent?.years === undefined
    ) {
      setSubtotal(
        () =>
          seatBooking?.perMonth * customerRent?.months +
          seatBooking?.perDay * customerRent?.days
      );
    } else {
      setSubtotal(() => seatBooking?.perYear * customerRent?.years);
    }
    if (subTotal) {
      const getvatTax = (subTotal * extraCharge[0]?.vatTax) / 100;
      setVatTaxt(parseInt(getvatTax));
    }
    // minimum Payment
    if (
      customerRent.remainingDays > 3 &&
      customerRent?.months === undefined &&
      customerRent?.years === undefined
    ) {
      const minimum = seatBooking?.perDay * 3;
      setMinimumPayment((minimum * extraCharge[0]?.vatTax) / 100 + minimum);

      setShowMinimumPayment(true);

      setAddmissionFee(0);

      setSecurityFee(0);
    } else if (
      customerRent?.months >= 2 &&
      customerRent?.months < 6 &&
      customerRent?.years === undefined
    ) {
      setMinimumPayment(extraCharge[0]?.securityFee);

      setAddmissionFee(extraCharge[0]?.admissionFee);

      setSecurityFee(extraCharge[0]?.securityFee);

      setShowMinimumPayment(true);
    } else if (customerRent?.months >= 6 && customerRent?.years === undefined) {
      setMinimumPayment(extraCharge[0]?.upto6MonthsSecurityFee);

      setAddmissionFee(extraCharge[0]?.upto6MonthsAdmissionFee);

      setSecurityFee(extraCharge[0]?.upto6MonthsSecurityFee);

      setShowMinimumPayment(true);
    } else if (customerRent?.years !== undefined) {
      setMinimumPayment(extraCharge[0]?.for1YearSecurityFee);

      setAddmissionFee(extraCharge[0]?.for1YearAdmissionFee);

      setSecurityFee(extraCharge[0]?.for1YearSecurityFee);

      setShowMinimumPayment(true);
    } else {
      setMinimumPayment(0);
      setShowMinimumPayment(false);
    }

    // total Amount
    if (customerRent?.months >= 2) {
      const totalAmountForMonths = parseInt(
        subTotal + vatTax + addMissionFee + securityFee
      );
      setTotalRentAmount(parseInt(totalAmountForMonths));
      // setminimumPayment(addMissionFee);
    } else if (
      customerRent?.months === 0 &&
      customerRent?.years !== undefined
    ) {
      const totalAmountForMonths = parseInt(
        subTotal + vatTax + addMissionFee + securityFee
      );
      setTotalRentAmount(parseInt(totalAmountForMonths));
      // setminimumPayment(addMissionFee);
    } else {
      const totalAmountForDays = parseInt(subTotal + vatTax);
      setTotalRentAmount(parseInt(totalAmountForDays));
      // setminimumPayment(0);
    }
  }, [
    startDate,
    endDate,
    customerRent?.remainingDays,
    customerRent?.months,
    customerRent?.years,
    seatBooking?.perDay,
    seatBooking?.perYear,
    seatBooking?.perMonth,
    subTotal,
    vatTax,
    extraCharge[0]?.admissionFee,
    extraCharge[0]?.securityFee,
    extraCharge[0]?.vatTax,
    promoCode,
  ]);

  // If Promo Code
  const handlePromoCode = (e) => {
    e.preventDefault();
    const covertStartDate = new Date(startDate).toISOString().split("T")[0];

    // Start Promo Time Checking
    if (userPromo?.promoStart > covertStartDate) {
      return toast.error(
        `Sorry This Offer Start From ${userPromo?.promoStart}`
      );
    }
    // End Promo Time Checking
    if (userPromo?.promoEnd < covertStartDate) {
      return toast.error(`Sorry This Offer End ${userPromo?.promoEnd}`);
    }

    // Promo Code Validation Checking

    if (promoCode !== userPromo?.promoCode)
      return toast.error("Sorry! You have Gived the wrong promo code ");
    if (
      customerRent?.remainingDays >= userPromo?.minimumDays &&
      userPromo?.minimumDays !== null
      //    ||
      // customerRent?.months >= promoCodeMonths
    ) {
      if (promoCode === userPromo?.promoCode && !promoCodeCheck) {
        const discount = userPromo?.promoDiscount / 100;
        setDisCountTk(totalRentAmount * discount);
        setTotalRentAmount(
          parseInt(totalRentAmount - totalRentAmount * discount)
        );
        setPromoCodeCheck(true);
      } else {
        toast.error("Sorry! You have Gived the wrong promo code");
      }
    } else {
      toast.error(
        `Sorry! for this ${
          customerRent?.remainingDays < userPromo?.minimumDays
            ? customerRent?.remainingDays + " days We don't have promo codes"
            : customerRent?.months === undefined
            ? customerRent?.remainingDays + " days We don't have promo codes"
            : customerRent?.months + " months We don't have promo codes"
        } `
      );
    }
  };

  // get month Last Day
  function getLastDayOfMonth() {
    const today = new Date(startDate);
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1.
    const lastDay = new Date(year, month, 0).getDate(); // Setting day to 0 gets the last day of the previous month.
    return lastDay;
  }

  const bookingData = {
    roomId: data?._id,
    branch: data?.branch,
    seatBooking: seatBooking,
    subTotal: subTotal,
    promoCodeDiscount:
      userPromo?.promoDiscount === undefined ? 0 : userPromo?.promoDiscount,
    discount: discountTk,
    vatTax: vatTax,
    totalAmount: totalRentAmount,
    roomName: data?.name,
    roomNumber: data?.roomNumber,
    roomType: data?.category?.name,
    rentDate: {
      bookStartDate: new Date(startDate).toISOString().split("T")[0],
      bookEndDate: new Date(endDate).toISOString().split("T")[0],
    },
    // bookStartDate: startDate,
    // bookEndDate: endDate,

    customerRent: customerRent,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleAddItem = () => {
    // If show minimum payment and full Payment Option

    let bookingDataUpdate = {};
    if (showMiniumPayment) {
      bookingDataUpdate = {
        ...bookingData,
        addMissionFee: addMissionFee,
        securityFee: securityFee,
        minimumPayment: minimumPayment,
        fullPayment: totalRentAmount,
        selectedPaymentType: selectedCheckPayment,
      };
    }

    // Already Booking Handle
    let bookings = seatBooking?.rentDate?.map(
      (rent) => new Date(rent?.bookEndDate)
    );
    function validPeriod(startDate, endDate, bookings) {
      let valid = true;

      for (let i = 0; i < bookings.length; i++) {
        const date = bookings[i];
        if (startDate <= date && date <= endDate) {
          valid = false;
          break;
        }
      }

      return valid;
    }

    if (validPeriod(startDate, endDate, bookings)) {
      if (showMiniumPayment) {
        dispatch(placeBooking(bookingDataUpdate));
      } else {
        dispatch(placeBooking(bookingData));
      }
      if (!user) {
        handleOpen();
      } else {
        navigate("/personal-info");
      }
    } else {
      toast.error("Sorry ! You Select Already Booking Dates");
    }
  };

  // handle Scrooled
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 230) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollY]);

  return (
    <div
      style={{
        // height: "650px",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ",
        borderRadius: "3px",
        backgroundColor: "white",
      }}
      className="sticky md:top-20 w-full"
    >
      <LoginModal handleOpen={handleOpen} open={open} />

      <div
        style={{
          backgroundColor: "#35B0A7",
          // width: "430px",
          height: "35px",
          borderRadius: "3px 3px 0px 0px",
        }}
      ></div>
      <div
        id="cart"
        className="px-3 py-2 m-3"
        style={{
          boxShadow: "0px 0px 5px 3px #CCC",
          borderRadius: "5px",
        }}
      >
        {/* <h2
          className="text-left font-bold text-sm"
          style={{ color: "#212A42" }}
        >
          {data?.name}
        </h2> */}
        <div className="flex justify-between">
          <div className="flex ">
            <div>
              <img src={brachLocationIcon} alt="" />
            </div>
            <p className="text-black text-sm">{data?.branch?.name}</p>
          </div>
          <p
            className=" flex justify-start  text-sm"
            style={{
              backgroundColor: "#FCA22A",
              color: "white",
              padding: "3px 5px ",
              borderRadius: "5px",
            }}
          >
            {data?.category?.name} ({data?.type})
          </p>
        </div>
      </div>
      <div className="mx-2">
        <ul className="flex justify-evenly text-sm">
          <li className="list-none border py-1 h-7">
            <span
              onClick={() =>
                dispatch(rightDate(addDays(new Date(startDate), 1)))
              }
              className={` duration-select cursor-pointer py-1 ${
                customerRent.remainingDays < getLastDayOfMonth() &&
                customerRent.years === undefined
                  ? "dmyActive "
                  : "text-black"
              }`}
            >
              Day
            </span>
          </li>
          <li className="list-none border py-1 h-7">
            <span
              onClick={() =>
                dispatch(rightDate(addMonths(new Date(startDate), 1)))
              }
              className={` duration-select cursor-pointer py-1 ${
                customerRent.remainingDays >= getLastDayOfMonth() &&
                customerRent.years === undefined
                  ? "dmyActive "
                  : "text-black"
              }`}
            >
              Month
            </span>
          </li>
          <li className="list-none border py-1 h-7">
            <span
              onClick={() =>
                customerRent.years === undefined
                  ? dispatch(rightDate(addYears(new Date(endDate), 1)))
                  : ""
              }
              className={` duration-select cursor-pointer py-1 ${
                customerRent.years >= 1 ? "dmyActive " : "text-black"
              }`}
            >
              Year
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-evenly mt-3 total-area text-black text-sm">
        <div>
          <p className="text-center font-bold">Check-In</p>
          <div className="input-filed-area w-full " style={{ marginTop: 10 }}>
            <i
              className="fa-solid fa-calendar-days location-icon"
              style={{ color: "#00bbb4", marginTop: -4 }}
            ></i>
            <DatePicker
              selected={new Date(startDate)}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => dispatch(leftDate(date))}
              excludeDateIntervals={seatBooking?.rentDate?.map((rent) => {
                return {
                  start: subDays(new Date(rent?.bookStartDate), 1),
                  end: addDays(new Date(rent?.bookEndDate), 0),
                };
              })}
              minDate={subDays(new Date(), 0)}
              className="ps-7 w-28"
            />
          </div>
        </div>
        <div>
          <p className=" font-bold  mb-1 text-center">Check-Out</p>

          <div className="input-filed-area w-full" style={{ marginTop: 10 }}>
            <i
              className="fa-solid fa-calendar-days location-icon"
              style={{ color: "#00bbb4", marginTop: -4 }}
            ></i>
            <DatePicker
              selected={new Date(endDate)}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => dispatch(rightDate(date))}
              excludeDateIntervals={seatBooking?.rentDate?.map((rent) => {
                return {
                  start: subDays(new Date(rent?.bookStartDate), 1),
                  end: addDays(new Date(rent?.bookEndDate), 0),
                };
              })}
              minDate={subDays(new Date(startDate), -1)}
              className="ps-7 w-28 "
            />
          </div>
        </div>
        <div className="mt-1.5 w-full px-1 py-[0.5px] duration_large_screen">
          <p className="text-center font-bold mb-2 mt-[-5px]">Duration</p>
          <p className=" duraion-count font-normal ps-1 text-sm ">
            {customerRent?.daysDifference >= 0
              ? `${customerRent?.daysDifference} days`
              : "" ||
                (customerRent?.months &&
                  customerRent?.days >= 0 &&
                  !customerRent?.years)
              ? `${customerRent?.months} months, ${customerRent?.days} days`
              : "" ||
                (customerRent?.years &&
                  customerRent?.months >= 0 &&
                  customerRent?.days >= 0)
              ? `${customerRent?.years} year`
              : ""}
          </p>
        </div>
      </div>
      <div className="duration_small">
        <div className="sm:flex justify-center mt-2 md:ms-16 sm:ms-16 text-sm">
          <p className="font-bold ">Duration = </p>
          <div>
            <input
              type="text"
              value={`${
                customerRent?.daysDifference >= 0
                  ? `${customerRent?.daysDifference} days`
                  : "" ||
                    (customerRent?.months &&
                      customerRent?.days >= 0 &&
                      !customerRent?.years)
                  ? `${customerRent?.months} months, ${customerRent?.days} days`
                  : "" ||
                    (customerRent?.years &&
                      customerRent?.months >= 0 &&
                      customerRent?.days >= 0)
                  ? `${customerRent?.years} year`
                  : ""
              }`}
              disabled
            />
          </div>
        </div>
      </div>

      <form onSubmit={handlePromoCode}>
        <div className="flex total-area relative mx-5 my-3">
          <div>
            <input
              className="sm:px-8 md:px-12"
              type="text"
              name="promoCode"
              onChange={(e) => setPromoCode(e.target.value)}
              style={{ height: "25px", width: "100%" }}
              placeholder=" Promo Code"
              disabled={promoCodeCheck ? true : false}
              required
            />
            <div className="absolute top-1 left-3">
              <img src={promoIcon} alt="" />
            </div>
          </div>
          <div className="flex justify-center  text-sm">
            <button
              type="submit"
              style={{
                border: "1px solid #399",
                backgroundColor: promoCodeCheck ? "#9eebe8" : "#35B0A7 ",
                color: "white",
                borderRadius: "0px 2px 2px 0px",
                padding: "1px 10px",
                fontSize: "14px",
              }}
              disabled={promoCodeCheck ? true : false}
            >
              Confirm
            </button>
          </div>
        </div>
      </form>

      <div className="text-black text-sm pr-5 ">
        <div className="flex justify-between ">
          <div className="ml-16 flex items-center">
            <p>Rent</p>
            <div className="ml-2">
              <Tooltip
                content={
                  <div>
                    <Typography
                      variant="small"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        width: "200px",
                      }}
                      className="font-normal opacity-75 px-5 py-2 rounded"
                    >
                      {customerRent?.months === undefined &&
                      customerRent?.years === undefined ? (
                        <span>
                          {customerRent?.remainingDays + " day"} X{" "}
                          {seatBooking?.perDay} = {""}
                          {isNaN(
                            seatBooking?.perDay * customerRent?.remainingDays
                          )
                            ? 0
                            : seatBooking?.perDay *
                                customerRent?.remainingDays +
                              " Tk"}
                        </span>
                      ) : (
                        ""
                      )}

                      {customerRent?.months >= 1 &&
                      customerRent?.years === undefined ? (
                        <span>
                          {customerRent.months + " month"} = {""}
                          {seatBooking?.perMonth * customerRent.months +
                            " Tk"}{" "}
                          {customerRent?.days > 0 ? (
                            <span>
                              + {customerRent?.days + " Days"} = {""}
                              {seatBooking?.perDay * customerRent?.days + " Tk"}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      ) : (
                        ""
                      )}

                      {customerRent?.years === 1 ? (
                        <span>
                          {customerRent?.years + " Year"} = {""}
                          {seatBooking?.perYear * customerRent?.years + " Tk"}
                        </span>
                      ) : (
                        ""
                      )}
                    </Typography>
                  </div>
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 cursor-pointer text-blue-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Tooltip>
            </div>
          </div>
          <p>BDT {isNaN(subTotal) ? 0 : subTotal}</p>
        </div>

        <div className="flex justify-between">
          <div className="ml-16 flex items-center">
            <p>VAT</p>
            <div className="ml-2">
              <Tooltip
                content={
                  <div>
                    <Typography
                      variant="small"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        width: "200px",
                      }}
                      className="font-normal opacity-75 px-5 py-2 rounded"
                    >
                      {extraCharge[0]?.vatTax}% VAT added based on subtotal
                    </Typography>
                  </div>
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 cursor-pointer text-blue-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Tooltip>
            </div>
          </div>

          <p> + BDT {isNaN(vatTax) ? 0 : vatTax}</p>
        </div>
        {customerRent.months >= 1 || customerRent.years ? (
          <div className="flex justify-between ">
            <div className="ml-16 flex items-center">
              <p>Admission Fee</p>
              <div className="ml-2">
                <Tooltip
                  content={
                    <div>
                      <Typography
                        variant="small"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          width: "200px",
                        }}
                        className="font-normal opacity-75 px-5 py-2 rounded"
                      >
                        This amount will not be refunded
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
            </div>
            <p>
              BDT{" "}
              {customerRent.months >= 2 || customerRent.years
                ? addMissionFee
                : 0}
            </p>
          </div>
        ) : (
          ""
        )}
        {customerRent.months >= 1 || customerRent.years ? (
          <div className="flex justify-between ">
            <div className="ml-16 flex items-center">
              <p>Security Fee</p>
              <div className="ml-2">
                <Tooltip
                  content={
                    <div>
                      <Typography
                        variant="small"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          width: "200px",
                        }}
                        className="font-normal opacity-80 px-5 py-2 rounded"
                      >
                        This amount will be refunded Or Adjust last Month when
                        you leave the Room
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
            </div>
            <p>
              BDT{" "}
              {customerRent.months >= 2 || customerRent.years ? securityFee : 0}
            </p>
          </div>
        ) : (
          ""
        )}
        {promoCodeCheck ? (
          <div className="flex justify-between">
            <div className="ml-16 flex items-center">
              <p>Promo Code</p>
              <div className="ml-2">
                <Tooltip
                  content={
                    <div>
                      <Typography
                        variant="small"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          width: "200px",
                        }}
                        className="font-normal opacity-75 px-5 py-2 rounded"
                      >
                        This is Just Our Offer
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
            </div>
            <p> - BDT {discountTk}</p>
          </div>
        ) : (
          ""
        )}

        <hr className="mt-1 ml-5 text-black" />
        <div className="flex justify-between mt-2">
          <p className="ml-16">Total Amount</p>
          <p>BDT {isNaN(totalRentAmount) ? 0 : totalRentAmount}</p>
        </div>
        {(customerRent?.months >= 1 && customerRent?.years === undefined) ||
        (customerRent?.months === 0 && customerRent?.years !== undefined) ? (
          <div className="flex justify-between">
            <div className="ml-16 flex items-center payment-check">
              <p className="text-red-500">Advance Payment</p>
              <div className="ml-2">
                <Tooltip
                  content={
                    <div>
                      <Typography
                        variant="small"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          width: "200px",
                        }}
                        className="font-normal opacity-75 px-5 py-2 rounded"
                      >
                        {customerRent?.months >= 2 || customerRent?.years ? (
                          <p>
                            If you want to confirm the booking, you have to pay
                            the minimum Admission Fee = {minimumPayment},
                          </p>
                        ) : (
                          <p>
                            This payment is required if you book for 2 months or
                            more
                          </p>
                        )}
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
            </div>
            <p> BDT {isNaN(minimumPayment) ? 0 : minimumPayment}</p>
          </div>
        ) : (
          ""
        )}

        {/* {customerRent?.months >= 2 || customerRent?.years ? (
          <div className="flex justify-between">
            <div className="ml-16 flex items-center payment-check">
              <input
                type="checkbox"
                name="payment-check"
                id=""
                value="Full-Payment"
                className="mr-2 "
                checked={selectedCheckPayment === "Full-Payment"}
                onChange={handleCheckboxPayment}
              />
              <p className="text-red-500">Full Payment</p>
            </div>
            <p> BDT {isNaN(totalRentAmount) ? 0 : totalRentAmount}</p>
          </div>
        ) : (
          ""
        )} */}

        <div
          className={`flex justify-between ${
            (customerRent?.months >= 1 && customerRent?.years === undefined) ||
            (customerRent?.months === 0 && customerRent?.years >= 1)
              ? "hidden"
              : "block"
          }`}
        >
          <div className="ml-16 flex items-center payment-check">
            <p className="text-red-500">Minimum Payment</p>
            <div className="ml-2">
              <Tooltip
                content={
                  <div>
                    <Typography
                      variant="small"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        width: "200px",
                      }}
                      className="font-normal opacity-75 px-5 py-2 rounded"
                    >
                      If More Than of 3 days Booking, Then 3 Days payment is
                      required to confirm the booking
                    </Typography>
                  </div>
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 cursor-pointer text-blue-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Tooltip>
            </div>
          </div>
          <p> BDT {isNaN(minimumPayment) ? 0 : minimumPayment} </p>
        </div>
      </div>
      <div
        title={!seatBooking?._id ? "Please Select A Seat" : ""}
        className={`bg-[#35B0A7] h-[35px] flex justify-center items-center mt-3 ${
          !seatBooking?._id ? " opacity-60	" : "opacity-100"
        }`}
        style={{ cursor: "pointer" }}
        onClick={handleAddItem}
      >
        <div>
          <button
            className={`text-[16px] text-white bg-transparent `}
            // onClick={() => handleDateSelection("2023-09-19")}
            disabled={!seatBooking?._id ? true : false}
          >
            Apply For Booking
          </button>
        </div>
      </div>
      {scrollY > 4250 ? (
        ""
      ) : (
        <div>
          <div
            className="flex justify-center mb-4 fixed bottom-0"
            style={{ zIndex: 9999, width: "92%" }}
          >
            {data?.category?.name === "Shared Room" && (
              <a
                href="#seat"
                onClick={anchorClickHandler}
                className="filter md:invisible ms-2 hover:text-white py-2"
                style={{ fontSize: 14 }}
              >
                <FaBed style={{ fontSize: 20 }} className="mr-2" />
                Choose Seat
              </a>
            )}

            <a
              href="#cart"
              onClick={anchorClickHandler}
              className="filter md:invisible ms-2 hover:text-white py-2"
              style={{ fontSize: 14 }}
            >
              <i
                className="fas fa-shopping-cart mt-1 mr-2"
                style={{ fontSize: 14 }}
              ></i>
              Booking Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSeatTotal;
