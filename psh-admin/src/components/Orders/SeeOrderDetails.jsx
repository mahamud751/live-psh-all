import React from "react";

const SeeOrderDetails = ({ show, setShow, order }) => {
  return (
    <div className="">
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "1000px" }}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Booking Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body w-100">
              <div className="row">
                <div className="col-lg-3">
                  <label htmlFor=""></label>
                  <p></p>
                </div>
                <div className="col-lg-3">hello</div>
                <div className="col-lg-3">hello</div>
                <div className="col-lg-3">hello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOrderDetails;
