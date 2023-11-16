import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

import OrderStatusUpdate from "../../pages/edit/OrderStatusUpdate";
import { AiOutlineEye, AiOutlineFieldTime } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import SeeOrderDetails from "./SeeOrderDetails";
import BookingDateSetUpdate from "../../pages/edit/BookingDateSetUpdate";
import BookingDateUpdate from "../../pages/edit/BookingDateUpdate";
import { useQuery } from "react-query";
import Payment from "../../pages/edit/Payment";
import { ToastContainer } from "react-toastify";
import useTransaction from "../../hooks/useTransaction";
import { AuthContext } from "../../contexts/UserProvider";
import useExtraCharge from "../../hooks/useExtraCharge";
import useBranch from "../../hooks/useBranch";
const ManagerOrdersList = ({ setAllBookings }) => {
  const MySwal = withReactContent(Swal);
  const [transactions] = useTransaction();
  const { user } = useContext(AuthContext);
  const userBranch = user?.branch?._id;

  const [extraCharge] = useExtraCharge();

  // const [branch, setBranch] = useState("All");
  const branch = "All";

  //sub stream
  const [data, setData] = useState([]);
  const [allBranch] = useBranch(data);
  const [totalReceiveAmount, setTotalReceiveAmount] = useState([]);

  const { isLoading, refetch } = useQuery(
    [data, extraCharge, branch, userBranch],
    () =>
      fetch(`https://api.psh.com.bd/api/order?branch=${branch}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          const mangerBranchOrders = data?.orders?.filter(
            (booking) => booking?.branch._id === userBranch
          );

          setData(mangerBranchOrders);

          setAllBookings(mangerBranchOrders);
        })
  );

  const findManagerBranch = allBranch?.find(
    (branch) => branch?._id === userBranch
  );

  const columns = [
    {
      text: "Date",
      formatter: (cellContent, row, index) => {
        const formattedDate = new Date(row?.createdAt).toLocaleString();
        return (
          <>
            {" "}
            <p>{formattedDate?.split(",")[0]}</p>
          </>
        );
      },
    },

    {
      text: <span>Phone</span>,
      formatter: (cellContent, row, index) => {
        return (
          <>
            {" "}
            <p>{row?.phone}</p>
          </>
        );
      },
    },
    {
      text: <span>Room / Seat No</span>,
      formatter: (cellContent, row, index) => {
        return (
          <>
            {row?.bookingInfo?.roomType === "Shared Room"
              ? row?.bookingInfo?.seatBooking?.seatNumber
              : row?.bookingInfo?.data?.roomNumber}
          </>
        );
      },
    },
    {
      text: "Check In",
      formatter: (cellContent, row, index) => {
        return <>{row?.bookingInfo?.rentDate?.bookStartDate}</>;
      },
    },
    {
      text: "Check Out",
      formatter: (cellContent, row, index) => {
        return <>{row?.bookingInfo?.rentDate?.bookEndDate}</>;
      },
    },
    {
      text: "Total Tk",
      formatter: (cellContent, row, index) => {
        return (
          <>
            {" "}
            <p className="fw-bold">Tk {row?.bookingInfo?.totalAmount}</p>
          </>
        );
      },
    },
    {
      text: "Payment Status",
      formatter: (cellContent, row, index) => {
        return (
          <span
            className=" fw-bold "
            style={{ color: row?.paymentStatus === "Paid" ? "green" : "red" }}
          >
            {" "}
            {row?.paymentStatus}
          </span>
        );
      },
    },
    {
      text: "Due Amount",
      formatter: (cellContent, row, index) => {
        // const findOrderTranstion = transactions?.filter(
        //   (transaction) => transaction?.orderId === row?._id
        // );

        // let totalReceiveTk = 0;

        // for (const item of findOrderTranstion) {
        //   totalReceiveTk += item.receivedTk;
        // }
        return (
          <span
            className=" fw-bold"
            style={{ color: row?.paymentStatus === "Paid" ? "green" : "red" }}
          >
            {" "}
            Tk {row?.dueAmount}
          </span>
        );
      },
    },
    {
      text: "Total Receive",
      formatter: (cellContent, row, index) => {
        // const findOrderTranstion = transactions?.filter(
        //   (transaction) => transaction?.orderId === row?._id
        // );

        // let totalReceiveTk = 0;

        // for (const item of findOrderTranstion) {
        //   totalReceiveTk += item.receivedTk;
        // }

        return <p className="fw-bold">Tk {row?.totalReceiveTk}</p>;
      },
    },
    {
      text: "Status",
      formatter: (cellContent, row, index) => {
        return (
          <>
            <div className=" d-flex ">
              <div>
                <p
                  className="fw-bold"
                  style={{
                    color: row?.status === "Approved" ? "#27b3b1" : "",
                  }}
                >
                  {row?.status}
                </p>
              </div>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#status${row._id}`}
                className="d-flex  bg-white p-0"
              >
                <BiSolidEdit style={{ width: "24px", height: "24px" }} />
              </button>
              {/* Modal Order Status Update */}
            </div>
            <div>
              <OrderStatusUpdate data={row} refetch={refetch} />
            </div>
          </>
        );
      },
    },
    {
      text: "Details",
      formatter: (cellContent, row, index) => {
        return (
          <div>
            <button
              type="button"
              className="bg-white"
              data-bs-toggle="modal"
              data-bs-target={`#details${row._id}`}
            >
              <span>
                <AiOutlineEye style={{ width: "24px", height: "24px" }} />
              </span>
            </button>

            {/* Modal Order Details */}
            <SeeOrderDetails
              data={row}
              transactions={transactions}
              setTotalReceiveAmount={setTotalReceiveAmount}
              totalReceiveAmount={totalReceiveAmount}
            />
          </div>
        );
      },
    },
    {
      text: "Update Duration",
      formatter: (cellContent, row, index) => {
        return (
          <>
            <div className="d-flex justify-content-center">
              <button
                title={`${
                  row?.status === "Approved"
                    ? "Sorry ! Your Booking Already Approved"
                    : ""
                }`}
                type="button"
                className={`rounded ${
                  row?.status === "Approved" ? "bg-white" : ""
                }`}
                style={{
                  backgroundColor:
                    row?.status === "Approved" ? "white" : "#35b0a7",
                }}
                data-bs-toggle="modal"
                data-bs-target={`#dateUpdate${row._id}`}
                disabled={row?.status === "Approved" ? true : false}
              >
                <AiOutlineFieldTime style={{ width: "24px", height: "24px" }} />
              </button>
            </div>
            {/* Modal order Date Update */}
            {row?.bookingInfo?.roomType === "Shared Room" ? (
              <div>
                <BookingDateSetUpdate
                  data={row}
                  refetch={refetch}
                  extraCharge={extraCharge}
                />
              </div>
            ) : (
              <div>
                <BookingDateUpdate
                  data={row}
                  refetch={refetch}
                  extraCharge={extraCharge}
                />
              </div>
            )}
          </>
        );
      },
    },

    {
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            <div className="d-flex gap-2 fw-bold">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#payment${row._id}`}
                style={{ backgroundColor: "#00BBB4" }}
              >
                Payment
              </button>
              {/* 
              <button className="bg-danger">End</button> */}
            </div>
            <Payment data={row} refetch={refetch} isLoading={isLoading} />
          </>
        );
      },
    },
    {
      text: "RQ",
      formatter: (cellContent, row, index) => {
        return (
          <>
            {" "}
            <p className=" fw-bold" style={{ color: "red" }}>
              {row?.isCancel === "Yes" ? (
                "Cancel Request"
              ) : (
                <span className="text-black">No Request</span>
              )}
            </p>
          </>
        );
      },
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    style: { width: 60 },
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: "Next",
    prePageText: "Previous",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  //delete
  const [products, setProducts] = useState(data);
  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you Sure?");
    if (confirmation) {
      const url = `https://api.psh.com.bd/api/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          MySwal.fire("Good job!", "successfully deleted", "success");
          if (data.deletedCount === 1) {
            const remainItem = products.filter((item) => item._id !== id);
            setProducts(remainItem);
          }
        });
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <section className="content customize_list">
          <div className="container-fluid">
            <div className=" d-flex justify-content-between gap-5 ">
              <h6 className=" ">Bookings</h6>

              <div className=" d-flex gap-5 ">
                <div>
                  <label htmlFor="">Branch </label> <br />
                  <select
                    className="rounded"
                    style={{ height: "30px" }}
                    disabled
                  >
                    <option value={findManagerBranch?._id}>
                      {findManagerBranch?.name}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <hr style={{ height: "1px", background: "rgb(191 173 173)" }} />
            {data?.length > 0 ? (
              <div className="card">
                <div className="card-body card_body_sm">
                  <>
                    <ToolkitProvider
                      bootstrap4
                      keyField="id"
                      columns={columns}
                      data={data}
                      pagination={pagination}
                    >
                      {(props) => (
                        <React.Fragment>
                          <BootstrapTable
                            bootstrap4
                            keyField="id"
                            columns={columns}
                            data={data}
                            pagination={pagination}
                            {...props.baseProps}
                          />
                          <ToastContainer
                            className="toast-position"
                            position="top-center"
                          />
                        </React.Fragment>
                      )}
                    </ToolkitProvider>
                  </>
                </div>
              </div>
            ) : (
              <p className="text-center text-danger fw-bold">
                Sorry No Booking Found
              </p>
            )}
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

      {/* Control Sidebar */}
    </div>
  );
};

export default ManagerOrdersList;
