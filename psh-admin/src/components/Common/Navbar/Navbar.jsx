import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img3 from "../../../img/home/Ellipse 116.png";
import img6 from "../../../img/home/noun-stream-4701152.png";
import img7 from "../../../img/home/noun-stream-play-5240252.png";

import img9 from "../../../img/home/Group 1329.png";
import img13 from "../../../img/home/log.png";

import { UilSearch } from "@iconscout/react-unicons";
import "./Navbar.css";
import { useContext } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../contexts/UserProvider";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const { admin } = useAdmin();

  const location = useLocation();
  const navigate = useNavigate();

  console.log(user);

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
          <div className="nav_design ms-3">
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
          className="main-sidebar sidebar-dark-primary elevation-4 side_menubar"
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
                className="nav nav-pills nav-sidebar flex-column myDIV"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
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
                        <a href="/order" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Order</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/issue"}>
                      <li className="main_nav-link">
                        <a href="/issue" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issue</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {user && user.role === "admin" ? (
                  <>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Manager
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_manager"}>
                          <li className="main_nav-link">
                            <a href="/add_manager" className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">
                                  Add Manager & Partner
                                </span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/manager_list"}>
                          <li className="main_nav-link">
                            <a href="/manager_list" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Manager List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/partner_list"}>
                          <li className="main_nav-link">
                            <a href="/partner_list" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Partner List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Branch
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_branch"}>
                          <li className="main_nav-link">
                            <a href="/add_branch" className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Add Branch</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/branch_list"}>
                          <li className="main_nav-link">
                            <a href="/branch_list" className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Branch List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p className="span_text">
                      Property
                      <i className="fas fa-angle-left right" />
                      <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    {(user && user.role === "admin") ||
                    user.role === "manager" ||
                    user.role === "partner" ? (
                      <>
                        <Link to={"/add_property"}>
                          <li className="main_nav-link">
                            <a href="/add_property" className="nav-link">
                              <div className="menu_flex">
                                <span className="span_text">Add Property</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </>
                    ) : (
                      ""
                    )}
                    {user && user.role === "admin" ? (
                      <Link to={"/property_list"}>
                        <li className="main_nav-link">
                          <a href="/property_list" className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </a>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                    {user && user.role === "manager" ? (
                      <Link to={"/property_list_m"}>
                        <li className="main_nav-link">
                          <a href="/property_list_m" className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </a>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                    {user && user.role === "partner" ? (
                      <Link to={"/property_list_p"}>
                        <li className="main_nav-link">
                          <a href="/property_list_p" className="nav-link">
                            <div className="menu_flex">
                              <span className="span_text">Property List</span>
                            </div>
                          </a>
                        </li>
                      </Link>
                    ) : (
                      ""
                    )}
                  </ul>
                </li>

                {(user && user.role === "admin") || user.role === "manager" ? (
                  <>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Category
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_category"}>
                          <li className="main_nav-link">
                            <a href="/add_category" className="nav-link">
                              {/* <i class="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Category</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/category_list"}>
                          <li className="main_nav-link">
                            <a href="/category_list" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Category List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Facility
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">4</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_facility_category"}>
                          <li className="main_nav-link">
                            <a
                              href="/add_facility_category"
                              className="nav-link"
                            >
                              {/* <i class="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Add Facility Category
                                </span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/facility_category_list"}>
                          <li className="main_nav-link">
                            <a
                              href="/facility_category_list"
                              className="nav-link"
                            >
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">
                                  Facility Category List
                                </span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/add_facility"}>
                          <li className="main_nav-link">
                            <a href="/add_facility" className="nav-link">
                              {/* <i class="fa-sharp fa-solid fa-building-columns span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Facility</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/facility_list"}>
                          <li className="main_nav-link">
                            <a href="/facility_list" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img6} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Facility List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Banner
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_banner"}>
                          <li className="main_nav-link">
                            <a href="/add_banner" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Banner</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/banner_list"}>
                          <li className="main_nav-link">
                            <a href="/banner_list" className="nav-link">
                              {/* <i class="fa-solid fa-grip-lines span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Banner List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p className="span_text">
                          Promo
                          <i className="fas fa-angle-left right" />
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <Link to={"/add_promo"}>
                          <li className="main_nav-link">
                            <a href="/add_promo" className="nav-link">
                              {/* <img style={{ width: 16 }} src={img7} alt="" /> */}
                              <div className="menu_flex">
                                <span className="span_text">Add Promo</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                        <Link to={"/promo_list"}>
                          <li className="main_nav-link">
                            <a href="/promo_list" className="nav-link">
                              {/* <i class="fa-solid fa-grip-lines span_text2"></i> */}
                              <div className="menu_flex">
                                <span className="span_text">Promo List</span>
                              </div>
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </li>

                    {/* <Link to={"/add_recommended"}>
                      <li className="main_nav-link">
                        <a href="/add_recommended" className="nav-link">
                          <img style={{ width: 16 }} src={img7} alt="" />
                          <div className="menu_flex">
                            <span className="span_text">Add Recommended</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/recommended_list"}>
                      <li className="main_nav-link">
                        <a href="/recommended_list" className="nav-link">
                          <i class="fa-solid fa-grip-lines span_text2"></i>
                          <div className="menu_flex">
                            <span className="span_text">Recommended List</span>
                          </div>
                        </a>
                      </li>
                    </Link> */}

                    <Link to={"/review"}>
                      <li className="main_nav-link">
                        <a href="/review" className="nav-link">
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
                {user && user.role === "admin" ? (
                  <>
                    {/* <Link to={"/seat_list"}>
                      <li className="main_nav-link">
                        <a href="/seat_list" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Seat List</span>
                          </div>
                        </a>
                      </li>
                    </Link> */}
                    <Link to={"/issues"}>
                      <li className="main_nav-link">
                        <a href="/issues" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issues</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/orders"}>
                      <li className="main_nav-link">
                        <a href="/orders" className="nav-link">
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
                    {/* <Link to={"/add_seat"}>
                      <li className="main_nav-link">
                        <a href="/add_seat" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Add Seat</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/seat_list_m"}>
                      <li className="main_nav-link">
                        <a href="/seat_list_m" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Seat List</span>
                          </div>
                        </a>
                      </li>
                    </Link> */}
                    <Link to={"/issues_m"}>
                      <li className="main_nav-link">
                        <a href="/issues_m" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Issues</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                    <Link to={"/orders_m"}>
                      <li className="main_nav-link">
                        <a href="/orders_m" className="nav-link">
                          <div className="menu_flex">
                            <span className="span_text">Orders</span>
                          </div>
                        </a>
                      </li>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {user && user.role === "admin" ? (
                  <>
                    <Link to={"/leaseProperty"}>
                      <li className="main_nav-link">
                        <a href="/leaseProperty" className="nav-link">
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
                {user && user.role === "admin" ? (
                  <>
                    <Link to={"/extraCharge"}>
                      <li className="main_nav-link">
                        <a href="/extraCharge" className="nav-link">
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
