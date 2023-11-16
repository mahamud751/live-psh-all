import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";

import "./OrderTable.css";
import OrderTable from "./OrderTable";
// import OrderPagination from './OrderPagination';

const AdminOrderList = () => {
  const [orderDelete, setOrderDelete] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [allOrder, setAllOrder] = useState([]);

  const { isLoading, refetch } = useQuery([page, pageCount], () =>
    fetch(`https://api.psh.com.bd/api/order?page=${page}&size=${10}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAllOrder(data?.data?.orders);
        const totalPageCount = Math.ceil(data?.data?.orderTotalCount / 10);

        setPageCount(totalPageCount);
      })
  );

  return (
    <div className="" style={{ marginLeft: "170px" }}>
      <Table striped bordered responsive className="mt-3 overflow-x ">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Room / Seat No.</th>
            <th>Check In</th>
            <th>Check Out</th>

            <th>Total Tk</th>
            <th>Payment Status</th>
            <th>Due Amount</th>
            <th>Recieved Tk</th>
            <th>Status</th>
            <th>Details</th>
            <th>Update Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrder?.map((order, index) => (
            <OrderTable
              order={order}
              index={index}
              setOrderDelete={setOrderDelete}
              orderDelete={orderDelete}
              refetch={refetch}
            ></OrderTable>
          ))}
        </tbody>
        <ToastContainer className="toast-position" position="top-center" />
      </Table>
      {/* <OrderPagination/> */}
      <div className="pagination d-flex justify-content-end">
        {[...Array(pageCount)?.keys()]?.map((number, index) => (
          <div key={index}>
            <button
              onClick={() => setPage(number)}
              className={page === number ? "page-selected" : ""}
            >
              {number + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrderList;
