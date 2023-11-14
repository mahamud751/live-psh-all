import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { BiSolidEdit } from "react-icons/bi";
import ExtraChargeEditModal from "./ExtraChargeEditModal";
import useExtraCharge from "../../hooks/useExtraCharge";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
const ExtraCharge = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [extraCharge, refetch] = useExtraCharge();
  console.log(extraCharge);
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <h3 className=" mb-3">Extra Charge</h3>
              </div>
            </div>
          </div>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Vat & Tax</th>
                <th>Admission Fee</th>
                <th>Security Fee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {extraCharge.map((charge) => (
                <>
                  <tr>
                    <td>{charge?.vatTax}%</td>
                    <td> Tk {charge?.admissionFee}</td>
                    <td> TK {charge?.securityFee}</td>
                    <td>
                      {" "}
                      <span onClick={handleShow}>
                        <BiSolidEdit
                          style={{ width: "30px", height: "30px" }}
                        />
                      </span>
                    </td>
                  </tr>
                  <ExtraChargeEditModal
                    show={show}
                    setShow={setShow}
                    charge={charge}
                    refetch={refetch}
                  />
                </>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
      <Toaster
        containerStyle={{ top: 100 }}
        toastOptions={{ position: "top-center" }}
      ></Toaster>
    </div>
  );
};

export default ExtraCharge;
