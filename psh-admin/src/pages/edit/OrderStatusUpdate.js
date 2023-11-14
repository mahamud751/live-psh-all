import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Modal } from "react-bootstrap";

const OrderStatusUpdate = ({ data, refetch, setStatusShow, statusShow }) => {
  const { _id, name, seatNumber, desc, status } = data;

  const [user, setUser] = useState(data);
  const [files, setFiles] = useState("");
  const [orders, setOrders] = useState([]);
  const handleClose = () => setStatusShow(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://psh-server.onrender.com/api/order"
        );
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const MySwal = withReactContent(Swal);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...user };
    if (field === "status") {
      newInfo[field] = value;
    }
    newInfo[field] = value;
    setUser(newInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === user?.status) {
      return MySwal.fire(`Sorry Already ${user?.status}`);
    }

    const formData = new FormData(e.target);

    // const data2 = {
    //   branchId: formData.get("branch"),
    // };
    const newPost = {
      ...user,
      // ...data2,
    };
    try {
      const product = {
        ...newPost,
      };

      await axios.patch(
        `https://psh-server.onrender.com/api/order/${_id}`,
        product
      );
      MySwal.fire("Good job!", "successfully edited", "success");
      refetch();
    } catch (err) {
      console.log(err);
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div className="container">
      <div
        class="modal fade"
        id={`status${data._id}`}
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
                Status Update
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div>
                      <div className="">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="inputState" className="">
                            Status ({status})
                          </label>
                          <br />
                          <select
                            name="status"
                            id="inputState"
                            className="main_form"
                            style={{ width: "450px" }}
                            onBlur={handleOnBlur}
                            defaultValue={user.status}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Approved">Approved</option>
                            <option value="Canceled">Canceled</option>
                          </select>
                        </div>

                        <div className="d-flex justify-content-center ml-5">
                          <button type="submit" style={{ width: 220 }}>
                            Update Status
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Toaster
                    containerStyle={{ top: 300 }}
                    toastOptions={{ position: "top-center" }}
                  ></Toaster>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusUpdate;
