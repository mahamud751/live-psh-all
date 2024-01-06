import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

import "./ExtraForm.css";

const ExtraForm = () => {
  const [image, setImage] = useState([]);

  const handleExtraForm = async (e) => {
    e.preventDefault();

    const purpose = e.target.purpose.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const birthDate = e.target.birthDate.value;
    const profession = e.target.profession.value;
    const maritalStatus = e.target.maritalStatus.value;
    const investorIncome = e.target.investorIncome.value;
    const investAmount = e.target.investAmount.value;
    const investTime = e.target.investTime.value;
    const returnTime = e.target.returnTime.value;
    const knowAbout = e.target.knowAbout.value;
    const reference = e.target.reference.value;
    const address = e.target.address.value;

    const formData = new FormData();

    // image Verify check
    const isValidFileUploaded = (file) => {
      const validExtensions = [
        "png",
        "jpeg",
        "jpg",
        "PNG",
        "JPG",
        "jpeg",
        "JPEG",
      ];
      const fileExtension = file.type.split("/")[1];
      return validExtensions.includes(fileExtension);
    };

    // Customer Nid
    if (image?.length > 1) {
      return toast.error("please provide 1 Visiting Card");
    }
    const file = image[0];
    if (file.size > 5000000) {
      return toast.error("Visiting Card size 5 MB more than not allowed");
    } else {
      if (isValidFileUploaded(file)) {
        Array.from(image).forEach((item) => {
          formData.append("image", item);
        });
      } else {
        return toast.error("Visiting Card is not valid");
      }
    }

    // Form Data Append

    formData.append("purpose", purpose);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("birthDate", birthDate);
    formData.append("profession", profession);
    formData.append("maritalStatus", maritalStatus);
    formData.append("investorIncome", investorIncome);
    formData.append("investAmount", investAmount);
    formData.append("investTime", investTime);
    formData.append("returnTime", returnTime);
    formData.append("knowAbout", knowAbout);
    formData.append("reference", reference);
    formData.append("address", address);
    // save order information to the database
    try {
      await axios.post("https://api.psh.com.bd/api/extraForm", formData);

      toast.success("Form Uploaded successfully done");
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <form onSubmit={handleExtraForm} className="md:mx-5 sm:mx-3 extra-form">
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mb-10">
        <div className="">
          <div>
            <p className="text-black flex justify-left font-bold border-b pb-2">
              PSH Finance - Already Own Property
            </p>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-3 md:mt-5 sm:mt-3">
              <div className="col-span-2">
                <label htmlFor="">Purpose</label>
                <select
                  className="personal-info w-full h-[45px] rounded"
                  name="purpose"
                >
                  <option>Investment</option>
                  <option>⁠Franchise</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="">Name</label>
                <input
                  placeholder="Your Name *"
                  type="text"
                  className="text-black personal-info rounded w-full"
                  name="name"
                  required
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                />
              </div>

              <div className="col-span-2 ">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Email *"
                  className="text-black personal-info rounded w-full"
                  name="email"
                  required
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="text-black personal-info rounded w-full"
                  name="phone"
                  required
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                />
              </div>
              <div className=" col-span-2 ">
                <label htmlFor="">Address</label>
                <textarea
                  placeholder="Details Address *"
                  className="text-black personal-info rounded w-full"
                  name="address"
                  cols="30"
                  required
                  rows="3"
                  maxLength={100}
                  style={{
                    padding: "2px 10px",
                  }}
                />
              </div>
              <div className="  col-span-2">
                <label htmlFor="">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="Date of Birth *"
                  className="text-black personal-info rounded w-full"
                  name="birthDate"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                />
              </div>
              <div className=" col-span-2">
                <label htmlFor="">Profession</label>
                <input
                  type="text"
                  placeholder="Profession *"
                  className="text-black personal-info rounded w-full"
                  name="profession"
                  required
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                  // required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="">Marital Status</label>
                <select
                  className="personal-info w-full h-[45px] rounded"
                  name="maritalStatus"
                >
                  <option>Never married</option>
                  <option>Divorced, with Children</option>
                  <option>Divorced, no Children</option>
                  <option>Married, have Children</option>
                  <option>Married, without Children</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className=" flex justify-left  ">Income Per Month</label>
                <select
                  name="investorIncome"
                  className="text-black personal-info rounded w-full"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                >
                  <option>0-100000</option>
                  <option>100000-300000</option>
                  <option>300000-500000</option>
                  <option>500000-1000000</option>
                  <option>Upto 1000000+</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className=" flex justify-left  ">
                  Amount of Investment
                </label>
                <select
                  name="investAmount"
                  className="text-black personal-info rounded w-full"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                >
                  <option>0-100000</option>
                  <option>100000-300000</option>
                  <option>300000-500000</option>
                  <option>500000-1000000</option>
                  <option>Upto 1000000+</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className=" flex justify-left  ">Investment Time</label>
                <select
                  name="investTime"
                  className="text-black personal-info rounded w-full"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                >
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className=" flex justify-left ">
                  Expected Return Time
                </label>
                <select
                  name="returnTime"
                  className="text-black personal-info rounded w-full"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                >
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>
              <div className=" col-span-2">
                <label htmlFor="">Visiting Card</label>
                <input
                  multiple
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                  type="file"
                  className=" personal-info rounded w-full h-[45px] p-2 file-input"
                  required
                  name="image"
                  id=""
                />
              </div>

              <div className="col-span-2">
                <label className=" flex justify-left  ">
                  How did you know about us?
                </label>
                <select
                  name="knowAbout"
                  className="personal-info rounded w-full"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                >
                  <option>Faceboook</option>
                  <option>Linkedin</option>
                  <option>Google</option>
                  <option>Newspaper</option>
                  <option>Friend/Relatives</option>
                  <option>Others</option>
                </select>
              </div>
              <div className=" col-span-2">
                <label htmlFor="">Reference</label>
                <input
                  type="text"
                  placeholder="Reference"
                  className="text-black personal-info rounded w-full"
                  name="reference"
                  style={{
                    height: "45px",
                    padding: "0px 10px",
                  }}
                  // required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-7">
        <div className="bg-[#00bbb4] text-white rounded cursor-pointer">
          <input
            type="submit"
            value="Submit"
            className="px-5 py-2 cursor-pointer"
          />
        </div>
      </div>

      <Toaster
        containerStyle={{ top: 100 }}
        toastOptions={{ position: "top-center" }}
      ></Toaster>
    </form>
  );
};

export default ExtraForm;
