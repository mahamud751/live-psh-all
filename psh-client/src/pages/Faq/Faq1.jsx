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

export default function Faq1() {
  const [open, setOpen] = useState(1);
  const dispatch = useDispatch();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="md:ps-20 sm:ps-0 md:pr-32 sm:pr-0 accourding-part ">
      <div className=" cursor-pointer flex items-center">
        <div
          className="md:hidden sm:block"
          onClick={() => dispatch(placeFaqMenu(true))}
        >
          <HiArrowNarrowLeft style={{ width: "24px", height: "24px" }} />
        </div>
        <h3 className="text-xl font-bold md:ms-0 sm:ms-4 md:mb-0  ">
          Search and Order
        </h3>
      </div>

      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              How can I search and find a room that suits my preferences?
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
        <AccordionBody className="md:pr-40 sm:pr0">
          You can search on the psh application or website by entering keywords,
          your destination location and your check-in date. You can also apply
          filters to get search results that are more in line with your
          preferences.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex justify-between ">
            <p className="text-sm">
              What if the housing I want is not available?
            </p>
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
          You can enter your name in the queue by clicking the "Join Waiting
          List" in the residence you want on the PSH application or website. The
          PSH team will contact you if the room you want is available.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              What equipment is available at PSH's residence?
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
          The equipment available varies depending on the unit, but all rooms at
          PSH are fully furnished and in all residences there is a kitchen and
          dining room with standard equipment. If you need other equipment while
          staying in PSH, you can order Add-Ons.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Can I book a room for a check-in date more than 1 month from now?
            </p>
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
          You can contact our Customer Service team via WhatsApp at 01770000000
          if you want to book a room for a check-in date above 1 from now.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">How do I book a place to stay in PSH?</p>
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
          You can book a place to stay via the PSH application or
          https://psh.com.bd/ by following these steps: On the residence details
          page, click "Select" in the room variant of your choice Check your
          personal data and orders Choose the method & payment method Copy the
          virtual account number and pay via mobile banking Payment is received
          and you will be directed to prepare for check-in
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              How much does it cost to rent a residential room in PSH?
            </p>
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
          Our room prices vary depending on location and facilities. You can
          check prices and availability on the PSH application or
          https://psh.com.bd/
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              How do I do it if I want to check the location first?
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
          You can schedule a visit via the PSH application or
          https://psh.com.bd/ on the details page of the residence you want to
          see in person.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">What is a deposit?</p>
            <div className="absolute right-0">
              {open === 8 ? (
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
          Deposit is a security fee that residents must pay before check-in.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9}>
        <AccordionHeader onClick={() => handleOpen(9)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Do I need to pay a deposit when booking PSH?
            </p>
            <div className="absolute right-0">
              {open === 9 ? (
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
          Yes, there is a deposit with a different amount for each residence.
          The deposit will be returned a maximum of 14 working days after you
          check-out.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10}>
        <AccordionHeader onClick={() => handleOpen(10)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Can I pay a down payment first when placing an order?
            </p>
            <div className="absolute right-0">
              {open === 10 ? (
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
          You can choose to pay the deposit first, then pay the rent before
          checking in or at the beginning of every month you live in PSH.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11}>
        <AccordionHeader onClick={() => handleOpen(11)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">Can you afford the monthly rent?</p>
            <div className="absolute right-0">
              {open === 11 ? (
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
          Yes, PSH has several flexible and profitable payment methods for you.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12}>
        <AccordionHeader onClick={() => handleOpen(12)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Is there any additional charge for parking?
            </p>
            <div className="absolute right-0">
              {open === 12 ? (
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
          There is usually an extra charge for parking, as numbers are limited.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13}>
        <AccordionHeader onClick={() => handleOpen(13)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">Is there a minimum rental length?</p>
            <div className="absolute right-0">
              {open === 13 ? (
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
          You can rent a room for a minimum of 1 days only.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14}>
        <AccordionHeader onClick={() => handleOpen(14)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              Do laundry and room cleaning have to be paid for?
            </p>
            <div className="absolute right-0">
              {open === 14 ? (
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
          Specifically for residences managed by PSH, our services include
          laundry and room cleaning, with different quotas depending on the
          unit. To increase your quota, you can order Add-Ons.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15}>
        <AccordionHeader onClick={() => handleOpen(15)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              What payment methods can be used to place an order?
            </p>
            <div className="absolute right-0">
              {open === 15 ? (
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
          PSH provides various payment methods that you can choose from. The
          following payment methods are available: 1. Virtual Account BCA 2.
          Virtual 3.Account BNI Permata Virtual Account
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 16}>
        <AccordionHeader onClick={() => handleOpen(16)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              How do I know that my order was successful?
            </p>
            <div className="absolute right-0">
              {open === 16 ? (
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
          You can check your order on the "My Residence" on the PSH application
          or website. Apart from that, you will also receive a confirmation
          email if your order has been successful.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 17}>
        <AccordionHeader onClick={() => handleOpen(17)} className="">
          <div className="flex justify-between ">
            <p className="text-sm">
              What should I do when I have paid but my order status has not
              changed?{" "}
            </p>
            <div className="absolute right-0">
              {open === 17 ? (
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
          If you have made a payment but your order status has not changed, you
          can click the "I have paid" on the PSH application or website. When
          the status has not changed, you can contact the PSH team via WhatsApp
          at +8801770000000 for help. Make sure you save proof of payment so
          that our team can help you immediately.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
