import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";
import axios from "axios";

const Branch = ({ data }) => {
  const { _id, name } = data;

  const [files, setFiles] = useState("");
  const MySwal = withReactContent(Swal);
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      name: formData.get("name"),
      locationLink: formData.get("locationLink"),
      // nearLocation: formData.get("nearLocation"),
      branchEmail: formData.get("branchEmail"),
      branchAddress: formData.get("branchAddress"),
      branchMobileNumber: formData.get("branchMobileNumber"),
    };
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const branch = {
        ...data2,
        photos: list,
      };

      await axios.put(`https://api.psh.com.bd/api/branch/${_id}`, branch);
      MySwal.fire("Good job!", "successfully added", "success");
      formRef.current.reset();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="row p-3">
          <div className="col-md-6 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Branch Name
            </label>

            <input
              type="text"
              className="main_form w-100"
              name="name"
              placeholder="Branch Name"
              required
            />
          </div>
          <div className="col-md-6 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Location (Google Location Link)
            </label>

            <input
              type="text"
              className="main_form w-100"
              name="locationLink"
              placeholder="Google Location Link"
              required
            />
          </div>
          {/* <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Near Location
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="nearLocation"
                  placeholder="Near Location"
                />
              </div> */}

          <div className="col-md-6 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Phone Number
            </label>

            <input
              type="text"
              className="main_form w-100"
              name="branchMobileNumber"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="col-md-6 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Email
            </label>

            <input
              type="text"
              className="main_form w-100"
              name="branchEmail"
              placeholder="Branch Email"
              required
            />
          </div>

          <div className="col-md-6 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Address
            </label>

            <textarea
              cols="50"
              rows="3"
              className="px-2 rounded"
              style={{ width: "640px" }}
              name="branchAddress"
              placeholder="Deatails Address"
              required
            />
          </div>
          <div className="col-md-12 form_sub_stream">
            <label htmlFor="inputState" className="form-label profile_label3 ">
              Image upload
            </label>

            <input
              type="file"
              className="main_form w-100 p-0"
              name="img"
              onChange={(e) => setFiles(e.target.files)}
              multiple
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-center my-5">
          <button type="submit" className="profile_btn" style={{ width: 175 }}>
            Update Branch
          </button>
        </div>
      </form>
    </div>
  );
};

export default Branch;
