import { Modal } from "react-bootstrap";
import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import "./Payment.css";

const Payment = ({ paymentShow, setPaymentShow, data, refetch }) => {
  const [paymentType, setPaymentType] = useState("Payment Type");
  const paymentOption = ["Receive", "Reduce"];
  const [paymentOptionValue, setPaymentOptionValue] = useState(0);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (paymentType === "Payment Type") {
      return toast.warn("Please Select Payment Type");
    }

    const receivedTk = e.target.receivedTk.value;
    const dueAmount =
      data.bookingInfo.totalAmount -
      (data?.totalReceiveTk + Number(receivedTk));

    if (data?.dueAmount < Number(receivedTk)) {
      return toast.warn(`Sorry ! Your Due ${data?.dueAmount}`);
    }
    if (data.bookingInfo.totalAmount === data?.totalReceiveTk) {
      return toast.warn(`Sorry ! This Order Payment Already Paid`);
    }
    if (data.bookingInfo.totalAmount < Number(receivedTk)) {
      return toast.warn(
        `Sorry Your Total Tk ${data?.bookingInfo?.totalAmount}`
      );
    }

    const receivedPayment = {
      totalAmount: data.bookingInfo.totalAmount,
      receivedTk: Number(receivedTk),
      dueAmount: dueAmount,
      totalReceiveTk: data?.totalReceiveTk + Number(receivedTk),
      paymentType: paymentType,
      paymentStatus: "Unpaid",
      paymentNumber: e.target?.paymentNumber?.value,
      transactionId: e.target?.transactionId?.value,
      bankName: e.target?.bankName?.value,
      bankHoldingName: e.target?.bankHoldingName?.value,
      receiverName: e.target?.receiverName?.value,
    };

    try {
      await axios.patch(
        `https://api.psh.com.bd/api/order/${data?._id}`,
        receivedPayment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Payment Successfully Done");
      refetch();
    } catch (error) {
      return toast.error(error.response.data.message);
    }
    e.target.reset();
  };

  // Handle Reduce Payment

  const handleReducePayment = async (e) => {
    e.preventDefault();
    const unReceivedTk = e.target.unReceivedTk.value;

    if (Number(unReceivedTk) > data?.totalReceiveTk) {
      return toast.warn(
        `Sorry ! You Total Received Tk ${data?.totalReceiveTk}`
      );
    }

    const dueAmount =
      data.bookingInfo.totalAmount -
      (data?.totalReceiveTk - Number(unReceivedTk));

    const reducePayment = {
      totalAmount: data.bookingInfo.totalAmount,
      unReceivedTk: Number(unReceivedTk),
      dueAmount: dueAmount,
      totalReceiveTk: data?.totalReceiveTk - Number(unReceivedTk),
      receiverName: e.target?.receiverName?.value,
    };

    try {
      await axios.patch(
        `https://api.psh.com.bd/api/order/${data._id}`,
        reducePayment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Success");
      refetch();
    } catch (error) {
      return toast.error(error.response.data.message);
    }
    e.target.reset();
  };

  return (
    <div className="container">
      <div
        class="modal fade"
        id={`payment${data?._id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Payment
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="d-flex gap-3">
                {paymentOption?.map((option, index) => (
                  <p
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        paymentOptionValue === index ? "#00BBB4" : "",
                      color: paymentOptionValue === index ? "white" : "",
                      padding: "5px",
                    }}
                    className="fs-5  rounded"
                    onClick={() => setPaymentOptionValue(index)}
                  >
                    {option}
                  </p>
                ))}
              </div>
              {paymentOptionValue === 0 ? (
                <form onSubmit={handlePayment}>
                  <div className="d-flex gap-3 justify-items-center">
                    <div>
                      <label htmlFor="" className="fs-5">
                        Received
                      </label>
                      <br />
                      <input
                        type="number"
                        placeholder="Type Received Tk 
                "
                        id=""
                        className="px-2 rounded"
                        style={{ width: "300px", height: "40px" }}
                        name="receivedTk"
                        required
                      />{" "}
                      <br />
                    </div>
                    <div className="">
                      <label htmlFor="">Payment Method</label>
                      <br />
                      <select
                        name="paymentType"
                        id=""
                        className="rounded"
                        style={{
                          width: "150px",
                          height: "40px",
                          marginTop: "5px",
                        }}
                        required
                        onChange={(e) => setPaymentType(e.target.value)}
                        defaultValue={paymentType}
                      >
                        <option disabled>Payment Type</option>
                        <option>Bkash</option>
                        <option>Nagad</option>
                        <option>dutch-bangla</option>
                        <option>Cash</option>
                        <option>Bank</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    {paymentType === "Payment Type" ? (
                      ""
                    ) : (
                      <>
                        {paymentType !== "Cash" && paymentType !== "Bank" ? (
                          <>
                            <input
                              type="number"
                              placeholder="Type Payment Number "
                              id=""
                              className="px-2 rounded mt-2"
                              style={{ width: "300px", height: "40px" }}
                              name="paymentNumber"
                              required
                            />
                            <br />
                            <input
                              type="text"
                              placeholder="Type Transaction Id"
                              id=""
                              className="px-2 rounded mt-2"
                              style={{ width: "300px", height: "40px" }}
                              name="transactionId"
                              required
                            />
                            <br />
                          </>
                        ) : (
                          ""
                        )}

                        {paymentType === "Bank" ? (
                          <>
                            <input
                              type="text"
                              placeholder="Type Bank Name 
                "
                              id=""
                              className="px-2 rounded mt-2"
                              style={{ width: "300px", height: "40px" }}
                              name="bankName"
                              required
                            />
                            <br />
                            <input
                              type="text"
                              placeholder="Type Holding Name
                "
                              id=""
                              className="px-2 rounded mt-2"
                              style={{ width: "300px", height: "40px" }}
                              name="bankHoldingName"
                              required
                            />
                            <br />
                          </>
                        ) : (
                          ""
                        )}

                        <input
                          type="text"
                          placeholder="Receiver Name
                "
                          id=""
                          className="px-2 rounded mt-2"
                          style={{ width: "300px", height: "40px" }}
                          name="receiverName"
                          required
                        />
                        <br />
                      </>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="mt-2 px-4 py-1 rounded text-white"
                    id=""
                    style={{
                      fontSize: "18px",
                      backgroundColor:
                        data?.totalReceiveTk === data.bookingInfo.totalAmount
                          ? "rgb(170 221 220)"
                          : "#00BBB4",
                      border: "none",
                    }}
                    disabled={
                      data?.totalReceiveTk === data.bookingInfo.totalAmount
                        ? true
                        : false
                    }
                  />
                </form>
              ) : (
                ""
              )}
              {paymentOptionValue === 1 ? (
                <form onSubmit={handleReducePayment}>
                  <div className="mb-3">
                    <label htmlFor="" className="fs-5">
                      Reduce Payment
                    </label>
                    <br />
                    <input
                      type="number"
                      name="unReceivedTk"
                      placeholder="Type Reduce Tk"
                      id=""
                      className="px-2 rounded"
                      style={{ width: "450px", height: "40px" }}
                    />{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Name of recipient
      "
                      id=""
                      className="px-2 rounded mt-2"
                      style={{ width: "450px", height: "40px" }}
                      name="receiverName"
                      required
                    />
                    <br />
                    <input
                      type="submit"
                      value="Reduce"
                      className="mt-2 px-4 py-1 text-white rounded"
                      name=""
                      id=""
                      style={{
                        fontSize: "18px",
                        border: "none",
                        backgroundColor: data?.totalReceiveTk
                          ? "#00BBB4"
                          : "rgb(170 221 220)",
                      }}
                      disabled={data?.totalReceiveTk === 0 ? true : false}
                    />
                  </div>
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
