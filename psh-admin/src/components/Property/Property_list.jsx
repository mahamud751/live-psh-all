import React, { useContext, useEffect, useState } from "react";
import img from "../../img/college/Icon material-delete.png";
import img3 from "../../img/college/Icon feather-edit.png";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Property.css";
import Property from "../../pages/edit/Property";
import { AuthContext } from "../../contexts/UserProvider";

const Property_list = (props) => {
  const MySwal = withReactContent(Swal);
  const { user } = useContext(AuthContext);
  const userBranch = user.branch.name;

  //sub stream
  const [data, setData] = useState([]);

  const [categories, setCategories] = useState({});
  const [branch, setBranch] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://api.psh.com.bd/api/category",
          {
            mode: "cors",
          }
        );
        const categoryMap = {};
        data.forEach((category) => {
          categoryMap[category._id] = category.name;
        });
        setCategories(categoryMap);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("https://api.psh.com.bd/api/branch", {
          mode: "cors",
        });
        const categoryMap = {};
        data.forEach((category) => {
          categoryMap[category._id] = category.name;
        });
        setBranch(categoryMap);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const columns = [
    {
      text: "No",
      formatter: (cellContent, row, index) => {
        return (
          <>
            {" "}
            <p>{index + 1}</p>
          </>
        );
      },
    },
    {
      text: "Picture",
      formatter: (cellContent, row) => {
        return (
          <div>
            <img
              src={row.photos[0]}
              alt=""
              style={{ width: 120, height: 120 }}
            />
          </div>
        );
      },
    },
    {
      dataField: "name",
      text: "Name",
    },
    { dataField: "category.name", text: "Category" },
    { dataField: "branch.name", text: "Branch" },
    // {
    //   text: "Type",
    //   formatter: (cellContent, row) => {
    //     const categoryName =
    //       categories[row.category ? row.category.id : ""] || "";
    //     return <p>{categoryName}</p>;
    //   },
    // },
    // {
    //   text: "Category",
    //   formatter: (cellContent, row) => {
    //     return <p>{row.category ? (row.category.id == id[value] ? name : "") : ""}</p>;
    //   },
    // },
    // {
    //   dataField: "type",
    //   text: "Type",
    // },
    {
      dataField: "desc",
      text: "Description",
    },
    {
      dataField: "availble",
      text: "Availble",
    },
    {
      dataField: "city",
      text: "City",
    },
    {
      dataField: "perDay",
      text: "Per Day",
    },
    {
      dataField: "perMonth",
      text: "Per Month",
    },
    {
      dataField: "perYear",
      text: "Per Month",
    },
    {
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            {" "}
            <div className="d-flex justify-content-center">
              <img
                src={img3}
                alt=""
                data-toggle="modal"
                data-target={`#loginModal${row._id}`}
              />
              <img
                src={img}
                alt=""
                className="ms-3"
                onClick={() => handleCategory(row._id)}
              />
            </div>
            <div
              className="modal fade"
              id={`loginModal${row._id}`}
              tabIndex="{-1}"
              role="dialog"
              aria-labelledby="loginModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ width: 700 }}>
                  <div className="modal-body">
                    <Property data={row} />
                  </div>
                </div>
              </div>
            </div>
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
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.psh.com.bd/api/property`,
          {
            mode: "cors",
          }
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const main = data.filter((pd) => pd.branch.name === userBranch);
  const mainData = user?.user?.role === "manager" ? main : [];
  //delete
  const [products, setProducts] = useState(data);
  const handleCategory = async (id) => {
    const confirmation = window.confirm("Are you Sure?");
    if (confirmation) {
      const url = `https://api.psh.com.bd/api/property/${id}`;
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
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Define the table columns
    const columns = [
      { title: "No", dataKey: "no" },
      { title: "Type", dataKey: "type" },
      { title: "Description", dataKey: "desc" },
      { title: "Availble", dataKey: "availble" },
      { title: "Address", dataKey: "address" },
      { title: "Per Day", dataKey: "perDay" },
      { title: "Per Month", dataKey: "perMonth" },
      { title: "Per Year", dataKey: "perYear" },
    ];

    // Map the data array to match the table columns
    const tableData = data.map((item, index) => {
      return [
        index + 1,

        item.type,
        item.desc,
        item.availble,
        item.address,
        item.perDay,
        item.perMonth,
        item.perYear,
      ];
    });

    // Set the table content using autotable plugin
    doc.autoTable(columns, tableData, { startY: 20 });

    // Save the PDF file
    doc.save("hotel_list.pdf");
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <h6 className="college_h6">Property List</h6>
              </div>
              <div className="export_btn_main">
                <div>
                  <div className="">
                    <div className="corporate_addNew_btn">
                      <Link to="/add_property">
                        <button className="college_btn2 ms-4 p-3">
                          Add New
                        </button>
                      </Link>
                    </div>
                  </div>
                  <button
                    className="export_btn mt-2 p-3"
                    onClick={handleDownloadPDF}
                  >
                    Export to PDF
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ height: "1px", background: "rgb(191 173 173)" }} />
            <div className="card">
              <div className="card-body card_body_sm">
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="_id"
                    columns={columns}
                    data={mainData}
                    pagination={pagination}
                    exportCSV
                  >
                    {(props) => (
                      <React.Fragment>
                        <BootstrapTable
                          bootstrap4
                          keyField="_id"
                          columns={columns}
                          data={mainData}
                          pagination={pagination}
                          {...props.baseProps}
                        />
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                </>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Property_list;
