import axios from "axios";
import React from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";

const ExtraChargeEditModal = ({ setShow, show, charge, refetch }) => {
  const handleClose = () => setShow(false);

  const handleExtraCharge = async (e) => {
    e.preventDefault();

    const updateExtraCharge = {
      vatTax: e.target.vatTax.value,
      admissionFee: e.target.admissionFee.value,
      securityFee: e.target.securityFee.value,
    };

    try {
      const response = await axios.put(
        `https://api.psh.com.bd/api/extraCharge/${charge._id}`,
        updateExtraCharge,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.message);
      refetch();
    } catch (error) {
      return toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Extra Charge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleExtraCharge}>
            <div className="d-flex ">
              <label htmlFor="">Vat & Tax :</label>

              <input
                type="text"
                name="vatTax"
                placeholder="How much percent VAT & Tax would you like to charge?"
                style={{ width: "300px", height: "30px", marginLeft: "45px" }}
                defaultValue={charge?.vatTax}
              />
            </div>

            <div className="d-flex mt-2">
              <label htmlFor="">Admission Fee :</label>

              <input
                type="number"
                placeholder="Admission Fee"
                name="admissionFee"
                className="ml-2"
                style={{ width: "300px", height: "30px" }}
                defaultValue={charge?.admissionFee}
              />
            </div>
            <div className="d-flex mt-2">
              <label htmlFor="">Security Fee :</label>

              <input
                type="number"
                placeholder="Security Fee"
                name="securityFee"
                className="ml-4"
                style={{ width: "300px", height: "30px" }}
                defaultValue={charge?.securityFee}
              />
            </div>
            <input
              type="submit"
              value="Update"
              style={{
                marginLeft: "328px",
                backgroundColor: "#27B3B1",
                border: "none",
              }}
              className="mt-2 text-white px-4 py-2"
            />
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExtraChargeEditModal;
