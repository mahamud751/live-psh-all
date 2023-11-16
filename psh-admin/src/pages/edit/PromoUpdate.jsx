import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";
import axios from "axios";

const Promo = ({ data, refetch }) => {
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

      await axios.put(`https://api.psh.com.bd/api/promo/${data._id}`, product);
      MySwal.fire("Good job!", "successfully Updated", "success");
      refetch();
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
    event.target.reset();
  };
  return (
    <>
      <div className="">
        <div
          className="modal fade"
          id={`promo${data?._id}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ maxWidth: "750px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Promo Update
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="p-3">
                    <div className="form_sub_stream d-flex flex-column">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Promo Name
                      </label>

                      <input
                        type="text"
                        className="main_form "
                        name="promoName"
                        placeholder="Promo Name"
                        defaultValue={data?.promoName}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Promo Code
                      </label>

                      <input
                        type="text"
                        className="main_form "
                        name="promoCode"
                        placeholder="Promo Code"
                        defaultValue={data?.promoCode}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Total Duration (input Total Days)
                      </label>

                      <input
                        type="number"
                        className="main_form "
                        name="minimumDays"
                        placeholder="Total Duration (input Total Days)"
                        defaultValue={data?.minimumDays}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Promo Start Date
                      </label>

                      <input
                        type="date"
                        className="main_form "
                        name="promoStart"
                        placeholder="Promo Start Date"
                        defaultValue={data?.promoStart}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Promo End Date
                      </label>

                      <input
                        type="date"
                        className="main_form"
                        name="promoEnd"
                        placeholder="Promo Code"
                        defaultValue={data?.promoEnd}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Discount
                      </label>

                      <input
                        type="number"
                        className="main_form"
                        name="promoDiscount"
                        placeholder="Discount"
                        defaultValue={data?.promoEnd}
                        required
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Promo Details
                      </label>

                      <textarea
                        className="main_form"
                        style={{ height: "100px" }}
                        name="promoDetails"
                        placeholder="Promo Code Details"
                        defaultValue={data?.promoDetails}
                        required
                      />
                    </div>

                    <div>
                      <img
                        src={data?.photos[0] && data?.photos[0]}
                        style={{ width: "300px", height: "200px" }}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column form_sub_stream">
                      <label
                        htmlFor="inputState"
                        className="form-label profile_label3 "
                      >
                        Image upload
                      </label>

                      <input
                        type="file"
                        className="main_form  p-0"
                        name="img"
                        onChange={(e) => setFiles(e.target.files)}
                        multiple
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end my-3">
                    <button
                      type="submit"
                      className="px-3"
                      style={{ backgroundColor: "#35b0a7" }}
                    >
                      Update Promo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
