import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UilSearch } from "@iconscout/react-unicons";
import { BiSolidChevronDown } from "react-icons/bi";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import img3 from "../../../img/home/Ellipse 116.png";
import { AuthContext } from "../../../contexts/UserProvider";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);

  const handleLogOut = () => {
    logoutUser();
    navigate("/signup");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (location.pathname === "/signup") {
    return null;
  }
  return (
    <div>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand">
          {/* Left navbar links */}
          <div className="nav_design">
            <ul className="navbar-nav" style={{ marginTop: -6 }}>
              <div className="navbar_bar">
                <li className="nav-link">
                  <a
                    className="nav-link"
                    data-widget="pushmenu"
                    href="..."
                    role="button"
                  >
                    <i className="fas fa-bars bars_1" />
                  </a>
                </li>
              </div>
            </ul>
            <ul
              style={{ zIndex: 1 }}
              className="nav navbar-nav navbar-right nav_bar_icons menu_right_li"
            >
              <li className="new_invoice_top_menu_link_li">
                <div className="logoSearch">
                  <div className="search">
                    <input type="text" placeholder="Search here" />
                    <div className="s-icon">
                      <UilSearch />
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={img3} className="profile_image" alt="" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </div>
            </ul>
          </div>
          {/* Right navbar links */}
        </nav>

        <aside
          className="main-sidebar sidebar-dark-primary elevation-4 side_menubar "
          style={{
            position: "fixed",
          }}
        >
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div>
              <h6 className="navbar_logo_text text-center my-4">LOGO</h6>
            </div>

            <nav className="mt-2" style={{ width: "1000px" }}>
              <ul
                className="nav nav-pills nav-sidebar flex-column "
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <div className="navbar_bar bar_menu_sm">
                  <li className="nav-link">
                    <a
                      className="nav-link"
                      data-widget="pushmenu"
                      href="..."
                      role="button"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <i
                        className="fa-solid fa-circle-xmark "
                        style={{ fontSize: 36 }}
                      ></i>
                    </a>
                  </li>
                </div>

                <Link to={"/"}>
                  <li className="main_nav-link">
                    <a href="/" className="nav-link">
                      <div className="menu_flex">
                        <span className="span_text">Home</span>
                      </div>
                    </a>
                  </li>
                </Link>
                {user && user.role === "user" ? (
                  <>
                    <Link to={"/order"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Bookings</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                    <Link to={"/issue"}>
                      <li className="main_nav-link">
                        <span className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issue</span>
                          </div>
                        </span>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}

                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <li className={`nav-item`}>
                      <span
                        className="nav-link "
                        onClick={() => {
                          setIsActive1(!isActive1);
                          setIsActive2(false);
                          setIsActive3(false);
                          setIsActive4(false);
                          setIsActive5(false);
                          setIsActive6(false);
                          setIsActive7(false);
                        }}
                      >
                        <p className="span_text">
                          Manager
                          <i
                            className={`fas fa-angle-left right ${
                              isActive1 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">2</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive1 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive1 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_manager"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">
                                  Add Manager & Partner
                                </span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/manager_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Manager List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/partner_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Partner List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={() => {
                          setIsActive1(false);
                          setIsActive2(!isActive2);
                          setIsActive3(false);
                          setIsActive4(false);
                          setIsActive5(false);
                          setIsActive6(false);
                          setIsActive7(false);
                        }}
                      >
                        <p className="span_text">
                          Branch
                          <i
                            className={`fas fa-angle-left right ${
                              isActive2 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">2</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive2 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive2 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_branch"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Add Branch</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/branch_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Branch List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      setIsActive1(false);
                      setIsActive2(false);
                      setIsActive3(!isActive3);
                      setIsActive4(false);
                      setIsActive5(false);
                      setIsActive6(false);
                      setIsActive7(false);
                    }}
                  >
                    <p className="span_text">
                      Property
                      <i
                        className={`fas fa-angle-left right ${
                          isActive3 ? "d-none" : "d-block"
                        }`}
                      />
                      <span className="badge badge-info right">2</span>
                      <BiSolidChevronDown
                        style={{ width: "23px", height: "23px" }}
                        className={`down-arrow ${
                          isActive3 ? "d-block" : "d-none"
                        }`}
                      />
                    </p>
                  </span>
                  <ul
                    className={` custom-drop ${
                      isActive3 ? "custom-drop-show" : ""
                    }`}
                  >
                    {(user && user.role === "SuperAdmin") ||
                    user.role === "manager" ||
                    user.role === "partner" ? (
                      <>
                        <Link to={"/add_property"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Add Property</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </>
                    ) : (
                      ""
                    )}
                    {(user && user.role === "SuperAdmin") ||
                    user.role === "admin" ? (
                      <Link to={"/property_list"}>
                        <li className="main_nav-link">
                          <span className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </span>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                    {user && user.role === "manager" ? (
                      <Link to={"/property_list_m"}>
                        <li className="main_nav-link">
                          <span className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </span>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                    {user && user.role === "partner" ? (
                      <Link to={"/property_list_p"}>
                        <li className="main_nav-link">
                          <span className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </span>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                  </ul>
                </li>

                {(user && user.role === "SuperAdmin") ||
                user.role === "manager" ? (
                  <>
                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={() => {
                          setIsActive1(false);
                          setIsActive2(false);
                          setIsActive3(false);
                          setIsActive4(!isActive4);
                          setIsActive5(false);
                          setIsActive6(false);
                          setIsActive7(false);
                        }}
                      >
                        <p className="span_text">
                          Category
                          <i
                            className={`fas fa-angle-left right ${
                              isActive4 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">2</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive4 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive4 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_category"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <i className="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Category</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/category_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Category List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={() => {
                          setIsActive1(false);
                          setIsActive2(false);
                          setIsActive3(false);
                          setIsActive4(false);
                          setIsActive5(!isActive5);
                          setIsActive6(false);
                          setIsActive7(false);
                        }}
                      >
                        <p className="span_text">
                          Facility
                          <i
                            className={`fas fa-angle-left right ${
                              isActive5 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">4</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive5 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive5 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_facility_category"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <i className="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Add Room Category
                                </span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/facility_category_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Facility Category List
                                </span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/add_facility"}>
                          <li className="main_nav-link nav-link">
                            {/* <i className="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                            <div className="menu_flex">
                              <span className="span_text">Add Facility</span>
                            </div>
                          </li>
                        </Link>

                        <Link to={"/facility_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Facility List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/add_commonfacility"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <i className="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Add Common Facility
                                </span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/commonfacility_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Common Facility List
                                </span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={() => {
                          setIsActive1(false);
                          setIsActive2(false);
                          setIsActive3(false);
                          setIsActive4(false);
                          setIsActive5(false);
                          setIsActive6(!isActive6);
                          setIsActive7(false);
                        }}
                      >
                        <p className="span_text">
                          Banner
                          <i
                            className={`fas fa-angle-left right ${
                              isActive6 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">2</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive6 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive6 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_banner"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Banner</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/banner_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Banner List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <span
                        className="nav-link"
                        onClick={() => {
                          setIsActive1(false);
                          setIsActive2(false);
                          setIsActive3(false);
                          setIsActive4(false);
                          setIsActive5(false);
                          setIsActive6(false);
                          setIsActive7(!isActive7);
                        }}
                      >
                        <p className="span_text">
                          Promo
                          <i
                            className={`fas fa-angle-left right ${
                              isActive7 ? "d-none" : "d-block"
                            }`}
                          />
                          <span className="badge badge-info right">2</span>
                          <BiSolidChevronDown
                            style={{ width: "23px", height: "23px" }}
                            className={`down-arrow ${
                              isActive7 ? "d-block" : "d-none"
                            }`}
                          />
                        </p>
                      </span>
                      <ul
                        className={` custom-drop ${
                          isActive7 ? "custom-drop-show" : ""
                        }`}
                      >
                        <Link to={"/add_promo"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Promo</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                        <Link to={"/promo_list"}>
                          <li className="main_nav-link">
                            <span className="nav-link">
                              {/* <i className="fa-solid fa-grip-lines span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Promo List</span>
                              </div>
                            </span>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <Link to={"/review"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Review</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/issues"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issues</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/orders"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Bookings</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {user && user.role === "manager" ? (
                  <>
                    <Link to={"/issues_m"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issues</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/orders_m"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Bookings</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/transaction-m"}>
                      <li className="main_nav-link">
                        <div className="menu_flex nav-link">
                          <span className="span_text">Transaction</span>
                        </div>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/leaseProperty"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Lease Property</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/extraCharge"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Extra Charge</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/transaction"}>
                      <li className="main_nav-link">
                        <div className="menu_flex nav-link">
                          <span className="span_text">Transaction</span>
                        </div>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/user-manage"}>
                      <li className="main_nav-link">
                        <div className="menu_flex nav-link">
                          <span className="span_text">User Manage</span>
                        </div>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {(user && user.role === "SuperAdmin") ||
                user.role === "admin" ? (
                  <>
                    <Link to={"/pages"}>
                      <li className="main_nav-link">
                        <a className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Pages</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                <li className="main_nav-link password_sm">
                  <a className="nav-link" onClick={handleLogOut}>
                    <div className="menu_flex">
                      <span className="span_text">Log Out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
