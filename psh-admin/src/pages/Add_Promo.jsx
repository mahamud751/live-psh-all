import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Promo = () => {
  const [files, setFiles] = useState("");
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      promoName: formData.get("promoName"),
      promoCode: formData.get("promoCode"),
      minimumDays: formData.get("minimumDays"),
      promoStart: formData.get("promoStart"),
      promoEnd: formData.get("promoEnd"),
      promoDiscount: formData.get("promoDiscount"),
      promoDetails: formData.get("promoDetails"),
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

      const product = {
        ...data2,
        photos: list,
      };

      await axios.post("https://api.psh.com.bd/api/promo", product);
      MySwal.fire("Good job!", "successfully added", "success");
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
    event.target.reset();
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="customize registration_div card">
          <form onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label ">
                  Promo Name
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="promoName"
                  placeholder="Promo Name"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label ">
                  Promo Code
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="promoCode"
                  placeholder="Promo Code"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Total Duration (input Total Days)
                </label>

                <input
                  type="number"
                  className="main_form w-100"
                  name="minimumDays"
                  placeholder="Total Duration (input Total Days)"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Promo Start Date
                </label>

                <input
                  type="date"
                  className="main_form w-100"
                  name="promoStart"
                  placeholder="Promo Start Date"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Promo End Date
                </label>

                <input
                  type="date"
                  className="main_form w-100"
                  name="promoEnd"
                  placeholder="Promo Code"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Discount (Input as percentages )
                </label>

                <input
                  type="number"
                  className="main_form w-100"
                  name="promoDiscount"
                  placeholder="Discount"
                />
              </div>

              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Image upload
                </label>

                <input
                  type="file"
                  className="main_form w-100 p-0"
                  name="img"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label htmlFor="inputState" className="form-label  ">
                  Promo Details
                </label>

                <textarea
                  className="main_form w-100 px-2"
                  style={{ height: "100px" }}
                  name="promoDetails"
                  placeholder="Promo Code Details"
                />
              </div>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
              >
                Add Promo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_Promo;
