import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { placeFaqMenu } from "../../redux/reducers/smProfileMenuSlice";
export default function Faq4() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch();
  return (
    <div className="md:ps-20 sm:ps-0 md:pr-32 sm:pr-0 accourding-part">
      <div className=" cursor-pointer flex items-center">
        <div
          className="md:hidden sm:block"
          onClick={() => dispatch(placeFaqMenu(true))}
        >
          <HiArrowNarrowLeft style={{ width: "24px", height: "24px" }} />
        </div>
        <h3 className="text-xl font-bold md:ms-0 sm:ms-4 md:mb-0  ">
          Order Cancellations and Changes
        </h3>
      </div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              How do I change the type of room/residence I booked?
            </p>
            <div className="absolute right-0">
              {open === 1 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr-0">
          To change your order, you can contact PSH's WhatsApp Customer Service
          at +88017000000 .
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex justify-between ">
            <p className="text-sm">How do I change my booking check-in date?</p>
            <div className="absolute right-0">
              {open === 2 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          PSH's check-in date conditions are as follows: 1.It is permissible to
          move the check-in date earlier to any date as long as the room is
          available 2.It is permitted to postpone the check-in date a maximum of
          7 days from the first check-in date 3.Check-in date changes are only
          permitted once To change the check-in date, you can contact PSH's
          WhatsApp Customer Service at +880170000000 .
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Will I be charged a fee if I reschedule an order?
            </p>
            <div className="absolute right-0">
              {open === 3 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          Schedule changes are free of charge. However, if there is a difference
          in rent due to a change in schedule, then the difference will be added
          to the rental fee that you have to pay.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">How do I cancel my order? </p>
            <div className="absolute right-0">
              {open === 4 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          You can contact WhatsApp Customer Service PSH at +88017000000 to
          cancel your order. Our team will assist with the order cancellation
          process and refund if any (cancellation fees follow PSH's cancellation
          policy). After cancellation, you will receive a confirmation email
          after your order has been cancelled.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Will I be charged a fee if I cancel my order?{" "}
            </p>
            <div className="absolute right-0">
              {open === 5 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          Yes, cancellation fees will follow PSH's cancellation policy as
          follows:
          <p>
            1.Cancellation more than 14 days before check-in date: cancellation
            fee is 50% of the deposit or 50% of the rental fee (following the
            highest value)
          </p>
          <p>
            2.Cancellations under 14 days before check-in date or no-show:
            cancellation fee is 100% of the deposit or 100% of the rental fee
            (following the highest amount). If no-show until H+2 check-in then
            the order will be automatically cancelled.
          </p>{" "}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">How long does the refund process take? </p>
            <div className="absolute right-0">
              {open === 6 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          Refunds will be made a maximum of 14 working days after the
          cancellation is made.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              What should I do if I do not receive my refund within the expected
              time?
            </p>
            <div className="absolute right-0">
              {open === 7 ? (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      rotate: "180deg",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown
                    style={{
                      width: "24px",
                      height: "24px",
                      transition: "rotate 0.2s ease-in-out",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="md:pr-40 sm:pr0">
          You can contact PSH Customer Service via WhatsApp at +880170000000 .
        </AccordionBody>
      </Accordion>
    </div>
  );
}
