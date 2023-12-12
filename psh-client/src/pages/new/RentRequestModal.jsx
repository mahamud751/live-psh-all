import { Toaster } from "react-hot-toast";
import axios from "axios";
import React, { useState, useRef, useContext } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UseFetch from "../../hooks/useFetch";
import { AuthContext } from "../../contexts/UserProvider";
import { Link } from "react-router-dom";
import "./business.css";
const RentRequestModal = () => {
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { data } = UseFetch(`leaseproperty`);

  const email = user?.email;
  const main = data.filter((pd) => pd?.email === email);
  console.log(main);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      firstName: formData.get("firstName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      propertyType: formData.get("propertyType"),
      position: formData.get("position"),
      totalRoom: parseInt(formData.get("totalRoom")),
      company: parseInt(formData.get("company")),
      companyEmail: formData.get("companyEmail"),
      location: formData.get("location"),
      availabilityForVisit: formData.get("availabilityForVisit"),
      availabilityForVisitTime: formData.get("availabilityForVisitTime"),
    };

    try {
      const product = {
        ...data2,
      };

      await axios.post("https://api.psh.com.bd/api/rentRequest", product);
      MySwal.fire("Good job!", "successfully added", "success");
      formRef.current.reset();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div className=" mt-5  custom-container">
      <h3 className="text-[32px] font-bold whitespace-normal		">
        Tell us your needs
      </h3>
      <div>
        {main.length <= 0 ? (
          <>
            <div className="mt-5 font-bold text-xl border-b pb-1">
              <span>Company data</span>
            </div>
            <div className="px-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="requestModal"
              >
                <div className="grid grid-cols-1 md:gap-x-5">
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 ">
                    <label htmlFor="" className="">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>

                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 font-normal mt-1">
                    <label htmlFor="">Position</label>
                    <input
                      type="text"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Position*"
                      name="position"
                    />
                  </div>

                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Company Name</label>
                    <input
                      type="text"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Company Name*"
                      name="company"
                    />
                  </div>
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Company Email Address</label>
                    <input
                      type="email"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Company email address*"
                      name="companyEmail"
                    />
                  </div>
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Phone Number*"
                      name="email"
                    />
                  </div>
                </div>
                <div className=" border-b pb-1">
                  <div className="mt-7 font-bold text-xl">
                    <span>Property Location *</span>
                  </div>
                </div>
                <div className="col-span-2 ">
                  <label htmlFor="">Enter Your Location</label>
                  <input
                    type="text"
                    className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                    placeholder="Enter your location"
                    name="location"
                  />
                </div>
                {/* Property Information */}
                <div className="mt-7 font-bold text-xl border-b pb-1">
                  <span>Select housing type*</span>
                </div>
                <div className="grid grid-cols-1 gap-x-5 mt-5">
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Property Type</label>

                    <select
                      name="propertyType"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                    >
                      <option value="Share Room">Share Room</option>
                      <option value="Private Room">Private Room</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                  </div>
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Number of Room</label>
                    <input
                      type="text"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Number of Room"
                      name="totalRoom"
                    />
                  </div>
                </div>

                {/* Property Location */}

                {/* Emergency Contact */}
                <div className="border-b pb-1">
                  <div className="mt-7 font-bold text-xl">
                    <span>Property Visit Request *</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5 mt-5">
                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Availability for Visit</label>
                    <input
                      type="date"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Availability for Visit"
                      name="availabilityForVisit"
                    />
                  </div>

                  <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 mt-1">
                    <label htmlFor="">Availability for Visit Time</label>
                    <input
                      type="time"
                      className="w-full h-10 bg-[#F7F7F7] rounded pl-2"
                      placeholder="Availability for Visit Time"
                      name="availabilityForVisitTime"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-12 mb-12">
                  <button
                    type="submit"
                    className="bg-[#00BBB4] text-white px-12 py-3 rounded cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div
              style={{
                position: "fixed",
                top: 8,
                left: 8,
              }}
            >
              <Toaster
                containerStyle={{ top: 100 }}
                toastOptions={{ position: "top-center" }}
              ></Toaster>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Link to={"http://localhost:3000/"} style={{ fontSize: 36 }}>
              See Your Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentRequestModal;
