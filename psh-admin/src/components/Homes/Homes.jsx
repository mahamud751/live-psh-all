import React, { useState } from "react";
import "./Home.css";
import img from "../../img/new/style.png";
import AdminOrderList from "../Orders/AdminOrderList";
import { AuthContext } from "../../contexts/UserProvider";
import { useContext } from "react";

import ManagerOrdersList from "../Orders/ManagerOrdersList";

const Homes = () => {
  const { user } = useContext(AuthContext);
  const [allBookings, setAllBookings] = useState([]);

  // Find Total Booking Amount Branch Or All Booking By Filtering
  let totalBookingAmount = 0;

  for (const item of allBookings) {
    totalBookingAmount += item.totalAmount;
  }
  // Find Total Booking Amount Branch Or All Booking By Filtering
  let totalReceiveAmount = 0;

  for (const item of allBookings) {
    totalReceiveAmount += item.totalReceiveTk;
  }

  let totalDueAmount = 0;

  for (const item of allBookings) {
    totalDueAmount += item.dueAmount;
  }

  return (
    <>
      <div>
        <div>
          <div className="wrapper">
            {/* Content Wrapper. Contains page content */}
            <div
              className="content-wrapper h-0"
              style={{ background: "unset" }}
            >
              <div className="row customize">
                <div className="col-md-3 home_card_m">
                  <div className="card_1">
                    <div className="d-flex p-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className="img1" />
                      </div>
                      <div className="ms-3 text-white">
                        <p className="fs-5">Total Bookings</p>
                        <p className="fw-bold">{allBookings?.length} Booking</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 home_card_m">
                  <div className="card_2">
                    <div className="d-flex p-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className="img2" />
                      </div>
                      <div className="ms-3 text-white">
                        <p className="fs-5">Total Booking Amount</p>
                        <p className="fw-bold">Tk {totalBookingAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card_3">
                    <div className="d-flex p-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className="img3" />
                      </div>
                      <div className="ms-3 text-white">
                        <p>Total Cash Amount</p>
                        <p className="fw-bold">Tk {totalReceiveAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card_4">
                    <div className="d-flex p-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <img src={img} alt="" className="img3" />
                      </div>
                      <div className="ms-3 text-white">
                        <p>Total Due Amount</p>
                        <p className="fw-bold">Tk {totalDueAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {user?.role === "manager" || user?.role === "partner" ? (
        <div className="mt-0">
          <ManagerOrdersList setAllBookings={setAllBookings} />
        </div>
      ) : (
        <div className="mt-0">
          <AdminOrderList setAllBookings={setAllBookings} />
        </div>
      )}
    </>
  );
};

export default Homes;
