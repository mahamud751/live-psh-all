import React, { useContext, useRef, useState } from "react";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";

import { useQuery } from "react-query";

import { ToastContainer } from "react-toastify";

import ViewTransactionModal from "./ViewTransactionModal";
import UpdateTransaction from "./UpdateTransaction";
import useBooking from "../../hooks/useBooking";
import useBranch from "../../hooks/useBranch";
import ReactToPrint from "react-to-print";
import { Table } from "react-bootstrap";
import TransactionPrint from "./TransactionPrint";
import { AuthContext } from "../../contexts/UserProvider";

const TransactionAdmin = () => {
  const ref = useRef();
  const { user } = useContext(AuthContext);

  const MySwal = withReactContent(Swal);
  const [bookings] = useBooking();

  const [userEmail, setUserEmail] = useState("All");
  const [branch, setBranch] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [data, setData] = useState([]);
  const [allBranch] = useBranch(data);
  const [userAllBooking, setUserAllBooking] = useState([]);

  const handleSearch = (e) => {
    setUserEmail(e.target.value);
  };
  const handleBranch = (e) => {
    setBranch(e.target.value);
  };

  // Find User Booking By Filtering
  let totalBookingAmount = 0;
  console.log(userAllBooking);
  if (userEmail !== "All" && branch === "All") {
    const findBranchBooking = bookings.filter(
      (booking) => booking?.email === userEmail
    );
    for (const item of findBranchBooking) {
      totalBookingAmount += item.totalAmount;
    }
  } else if (branch !== "All" && userEmail !== "All") {
    const findBranchBooking = bookings.filter(
      (booking) => booking?.branch._id === branch && booking.email === userEmail
    );
    for (const item of findBranchBooking) {
      totalBookingAmount += item.totalAmount;
    }
  } else if (branch !== "All" && userEmail === "All") {
    const findBranchBooking = bookings.filter(
      (booking) => booking?.branch?._id === branch
    );
    for (const item of findBranchBooking) {
      totalBookingAmount += item.totalAmount;
    }
  } else {
    for (const item of bookings) {
      totalBookingAmount += item.totalAmount;
    }
  }

  let mytotalReceiveTk = 0;

  for (const item of data) {
    mytotalReceiveTk += item.receivedTk;
  }

  // Transactions
  const { isLoading, refetch } = useQuery(
    [
      data,
      userEmail,
      branch,
      fromDate,
      toDate,
      userAllBooking,
      bookings,
      // totalBookingAmount,
    ],
    () =>
      fetch(
        `https://api.psh.com.bd/api/transaction?email=${userEmail}&fromDate=${fromDate}&toDate=${toDate}&branch=${branch}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => setData(data?.transaction))
  );

  // find Total Receive Amount
  // console.log(getSingleBranch, getshareRoomBranch);
  const columns = [
    {
      text: "Date",
      formatter: (cellContent, row, index) => {
        const formattedDate = new Date(row?.paymentDate)
          .toISOString()
          .split("T")[0];
        return (
          <>
            {" "}
            <p>{formattedDate}</p>
          </>
        );
      },
    },
    {
      text: "Booking Id",
      formatter: (cellContent, row, index) => {
        return (
          <>
            <p> #{row?.orderId.slice(19)}</p>
          </>
        );
      },
    },
    {
      dataField: `userName`,
      text: "Full Name",
    },
    {
      dataField: `userEmail`,
      text: "Email",
    },
    {
      dataField: `userPhone`,
      text: "Phone",
    },

    {
      text: "Branch",
      formatter: (cellContent, row, index) => {
        return <p>{row?.branch?.name}</p>;
      },
    },

    {
      text: "Receive Amount",
      formatter: (cellContent, row, index) => {
        return (
          <span className=" fw-bold" style={{ color: "green" }}>
            {" "}
            Tk {row?.receivedTk}
          </span>
        );
      },
    },

    {
      dataField: "paymentType",
      text: "Payment Type",
    },
    {
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            <div className="d-flex justify-content-center gap-3">
              {user?.role === "SuperAdmin" ? (
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target={`#transaction${row._id}`}
                  className="d-flex bg-white mt-2"
                >
                  <BiSolidEdit style={{ width: "30px", height: "30px" }} />
                </button>
              ) : (
                ""
              )}

              <button
                type="button"
                className="bg-white"
                data-bs-toggle="modal"
                data-bs-target={`#details${row._id}`}
              >
                <span>
                  <AiOutlineEye style={{ width: "30px", height: "30px" }} />
                </span>
              </button>

              {user?.role === "SuperAdmin" ? (
                <div>
                  <AiOutlineDelete
                    onClick={() => handleDelete(row._id)}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            <UpdateTransaction
              data={row}
              refetch={refetch}
              transactions={data}
              bookings={bookings}
              setUserAllBooking={setUserAllBooking}
            />
            {/* Modal Transaction Details */}
            <ViewTransactionModal
              data={row}
              bookings={bookings}
              userAllBooking={userAllBooking}
            />
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
      const url = `https://api.psh.com.bd/api/transaction/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          MySwal.fire("Good job!", "successfully deleted", "success");
          refetch();
          if (data.deletedCount === 1) {
            const remainItem = products.filter((item) => item._id !== id);
            setProducts(remainItem);
          }
        });
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper " style={{ background: "unset" }}>
          <section className="content customize_list">
            <div className="">
              <div className=" d-flex justify-content-between gap-5 ">
                <h6 className=" ">Transaction</h6>

                <div className=" d-flex gap-5 ">
                  <div className=" ">
                    <label htmlFor="">Customer </label> <br />
                    <select
                      onChange={handleSearch}
                      className="rounded ml-2"
                      style={{ height: "30px" }}
                    >
                      <option value="All">All</option>
                      {bookings?.map((booking) => {
                        return (
                          <option key={booking._id} value={booking?.email}>
                            {booking?.fullName} ({booking?.phone})
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="">From Date </label>
                    <br />
                    <div>
                      <input
                        type="date"
                        className="rounded"
                        onChange={(e) => setFromDate(e.target.value)}
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="">To Date </label> <br />
                    <div>
                      <input
                        type="date"
                        className="rounded"
                        name=""
                        id=""
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">Branch </label> <br />
                    <select
                      className="rounded"
                      style={{ height: "30px" }}
                      onChange={handleBranch}
                    >
                      <option value="All">All</option>
                      {allBranch?.map((branch) => (
                        <option value={branch?._id}>{branch?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-5 justify-content-end mt-3">
                <div className=" mt-4">
                  <label htmlFor="" className="fw-medium">
                    Total Booking Amount :
                  </label>
                  <span style={{ color: "green" }} className="fw-bold">
                    {" "}
                    Tk {data?.length > 0 ? totalBookingAmount : 0}
                  </span>
                </div>
                <div className=" mt-4">
                  <label htmlFor="" className="fw-medium">
                    Total Receive :
                  </label>
                  <span style={{ color: "green" }} className="fw-bold">
                    {" "}
                    Tk {data?.length > 0 ? mytotalReceiveTk : 0}
                  </span>
                </div>
                <div className=" mt-4">
                  <label htmlFor="" className="fw-medium">
                    Total Due :
                  </label>
                  <span style={{ color: "red" }} className="fw-bold">
                    {" "}
                    Tk{" "}
                    {data?.length > 0
                      ? totalBookingAmount - mytotalReceiveTk
                      : 0}
                  </span>
                </div>
                {data.length > 0 ? (
                  <div className="mt-2">
                    <ReactToPrint
                      trigger={() => (
                        <button
                          className=" px-3 rounded text-white font-medium"
                          style={{ backgroundColor: "#35b0a7" }}
                        >
                          Print
                        </button>
                      )}
                      content={() => ref.current}
                    />
                  </div>
                ) : (
                  ""
                )}
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
                  Sorry No Transaction Found
                </p>
              )}
              {/* /.row (main row) */}
            </div>
            <div className="d-none">
              <div ref={ref}>
                <h4 className="mt-5 mb-4 ">Transaction History</h4>
                <Table striped bordered responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Booking Id</th>
                      <th>Branch</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Receive Amount</th>
                      <th>Payment Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((transaction) => (
                      <TransactionPrint transaction={transaction} />
                    ))}
                  </tbody>
                </Table>
                <div
                  className="d-flex justify-content-end "
                  style={{ marginRight: "280px" }}
                >
                  <p style={{ color: "green" }} className="fw-bold">
                    {" "}
                    Total Cash = {data?.length > 0 ? mytotalReceiveTk : 0} Tk
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    </>
  );
};

export default TransactionAdmin;
