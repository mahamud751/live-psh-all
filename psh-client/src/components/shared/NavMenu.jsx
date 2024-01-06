import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  MenuHandler,
  MenuList,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BsTelephonePlus } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineFileUnknown, AiOutlineHome } from "react-icons/ai";

import { AuthContext } from "../../contexts/UserProvider";
import { placeProfileMenu } from "../../redux/reducers/smProfileMenuSlice";
import LoginModal from "./LoginModal";

import UseFetch from "../../hooks/useFetch";
import SearchBoxWithNav from "../home/SearchBoxWithNav";
import { HiOutlineUserCircle } from "react-icons/hi";

function ProfileMenu(id) {
  const { data } = UseFetch(`users/${id}`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser();
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className="md:block hidden">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              {/* <Avatar
                variant="circular"
                size="sm"
                alt="candice wu"
                className="border border-blue-500 p-0.5"
                src={user?.photos}
              /> */}
              <HiOutlineUserCircle style={{ width: "30px", height: "30px" }} />

              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <Link to={"/profile"} onClick={closeMenu}>
              <MenuItem className={`flex items-center gap-2 rounded `}>
                <Typography as="span" variant="small" className="font-normal">
                  {user?.firstName} {user?.lastName}
                </Typography>
              </MenuItem>
            </Link>
            <NavLink onClick={handleLogOut}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded `}
              >
                <Typography as="span" variant="small" className="font-normal">
                  Log out
                </Typography>
              </MenuItem>
            </NavLink>
          </MenuList>
        </Menu>
      </div>

      {/* For Mobile */}
      <Link to="/profile">
        <div
          className=" md:hidden sm:block "
          onClick={() => dispatch(placeProfileMenu(true))}
        >
          <Menu>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full"
            >
              {/* <Avatar
                variant="circular"
                size="sm"
                alt="candice wu"
                className="border border-blue-500 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              /> */}
              <HiOutlineUserCircle style={{ width: "30px", height: "30px" }} />
            </Button>
          </Menu>
        </div>
      </Link>
    </>
  );
}

export default function Navmenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const [size, setSize] = React.useState(null);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  // const handleOpen = (value) => setSize(value);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleLogOut = () => {
    logoutUser();
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState("");
  const { loginUser, registerUser } = useContext(AuthContext);
  const isProfileMenu = useSelector(
    (state) => state?.profileMenu?.isProfileMenu
  );
  const onSubmit = async (data) => {
    const { email, password } = data;

    await loginUser(email, password);
    navigate(location.state?.from || "/");
  };
  const onSubmitRegister = async (data) => {
    const { firstName, email, phone, password, refferCode } = data;

    await registerUser(firstName, email, phone, password, refferCode);
    navigate("/");
  };
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const { pathname } = useLocation();

  const [navVlaue, setNaValue] = useState(pathname);

  useEffect(() => {
    setNaValue(pathname);
  }, [pathname]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center xl:gap-6 lg:gap-4 md:gap-0 sm:gap-0 navbar_md">
      <Typography
        as="li"
        className="p-1 font-normal "
        onClick={() => setNaValue("/")}
      >
        <Link
          to={"/"}
          className=" flex items-center text-black hover:text-[#00bbb4] md:ml-0 sm:ml-5"
          style={{ color: navVlaue === "/" ? "#00bbb4" : "black" }}
        >
          <div className="md:hidden sm:block">
            <AiOutlineHome
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal "
        onClick={() => setNaValue("/partner")}
      >
        <Link
          to={"/partner"}
          className=" flex items-center text-black hover:text-[#00bbb4] md:ml-0 sm:ml-5"
          style={{ color: navVlaue === "/partner" ? "#00bbb4" : "black" }}
        >
          <div className="md:hidden sm:block">
            <MdOutlineMapsHomeWork
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          Register a property
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal "
        onClick={() => setNaValue("/corporate-housing")}
      >
        <Link
          to={"/corporate-housing"}
          className=" flex items-center text-black hover:text-[#00bbb4] md:ml-0 sm:ml-5 "
          style={{
            color: navVlaue === "/corporate-housing" ? "#00bbb4" : "black",
          }}
        >
          <div className="md:hidden sm:block">
            <MdOutlineMapsHomeWork
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          Corporate Housing
        </Link>
      </Typography>

      <Typography
        as="li"
        className="p-1 font-normal"
        onClick={() => setNaValue("/psh-finance")}
      >
        <Link
          to={"/psh-finance"}
          className="flex items-center hover:text-[#00bbb4] md:ml-0 sm:ml-5"
          style={{ color: navVlaue === "/psh-finance" ? "#00bbb4" : "black" }}
        >
          <div className="md:hidden sm:block">
            <FaHandsHelping
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          Investment opportunities
        </Link>
      </Typography>

      <Typography
        as="li"
        className="p-1 font-normal"
        onClick={() => setNaValue("/about")}
      >
        <Link
          to={"/about"}
          className="flex items-center hover:text-[#00bbb4] md:ml-0 sm:ml-5"
          style={{ color: navVlaue === "/about" ? "#00bbb4" : "black" }}
        >
          <div className="md:hidden sm:block">
            <AiOutlineFileUnknown
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          About us
        </Link>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal"
        onClick={() => setNaValue("/contact")}
      >
        <Link
          to={"/contact"}
          className="flex items-center hover:text-[#00bbb4] md:ml-0 sm:ml-5"
          style={{ color: navVlaue === "/contact" ? "#00bbb4" : "black" }}
        >
          <div className="md:hidden sm:block">
            <BsTelephonePlus
              style={{ width: "24px", height: "24px" }}
              className="mr-2"
            />
          </div>
          Contact
        </Link>
      </Typography>
    </ul>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 230) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollY]);

  return (
    <>
      {isScrolled ? (
        <div
          className={`bg-white navbar_sticky_search shadow-md md:hidden sm:block`}
        >
          <div className=" flex custom-container ">
            <Navbar className="py-2 shadow-none px-0 border-none">
              <div className="flex items-center justify-between text-blue-gray-900 ">
                <div
                  className={"ms-[8px]"}
                  onClick={() => {
                    window.location.reload(), window.scrollTo(0, 0);
                  }}
                >
                  <Link to={"/"}>
                    <img
                      src={"https://i.ibb.co/GpqY8tQ/PSH-web-logo-1.png"}
                      alt=""
                      style={{ width: "250px", height: "30px" }}
                    />
                  </Link>
                </div>

                <div style={{ marginTop: -15 }}>
                  <SearchBoxWithNav />
                </div>

                <div className={"contents"}>
                  <div className="mr-4 hidden lg:block nav_Link ">
                    {navList}
                  </div>
                  <div className="flex justify-end sm:w-full md:w-auto">
                    <div className="sm:block md:hidden ">
                      <div>{user && <ProfileMenu />}</div>
                    </div>
                  </div>
                  {/* <div className="sm:block md:hidden">
                {user && <ProfileMenu />} */}
                  <IconButton
                    variant="text"
                    className={
                      "mr-6 mt-0 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    }
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="sm:hidden md:block">
                    {user ? (
                      <ProfileMenu />
                    ) : (
                      <>
                        <div className="md:block">
                          <button
                            className="sign_btn sm:text-[14px] md:text-[16px]"
                            onClick={handleOpen}
                          >
                            Sign Up/Login
                          </button>
                        </div>
                        <>
                          {/* <LoginModal handleOpen={handleOpen} open={open} /> */}
                        </>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Collapse open={openNav}>
                  <div onClick={() => setOpenNav(!openNav)}>{navList}</div>
                  <div className="">
                    <div className="flex justify-center items-center gap-x-1 w-full ">
                      {user ? (
                        ""
                      ) : (
                        <div className="md:block">
                          <button
                            className="sign_btn uppercase"
                            onClick={handleOpen}
                          >
                            Sign Up/Login
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      ) : (
        <div className="bg-white navbar_sticky  shadow-md md:hidden sm:block">
          <div className=" flex custom-container ">
            <Navbar
              className={` ${
                user ? "sm:py-0" : "sm:py-3"
              }  md:py-2 shadow-none px-0 border-none`}
            >
              <div className="flex items-center justify-between text-blue-gray-900">
                <div
                  className={"md:ms-0 sm:ms-[15px]"}
                  onClick={() => {
                    window.location.reload(), window.scrollTo(0, 0);
                  }}
                >
                  <Link to={"/"}>
                    <img
                      src={"https://i.ibb.co/GpqY8tQ/PSH-web-logo-1.png"}
                      alt="PSH Logo"
                    />
                  </Link>
                </div>

                <div className={"contents"}>
                  <div className="mr-4 hidden lg:block nav_Link">{navList}</div>
                  <div className="flex justify-end sm:w-full md:w-auto">
                    <div className="sm:block md:hidden ms-3">
                      <div>{user && <ProfileMenu />}</div>
                    </div>
                  </div>
                  {/* <div className="sm:block md:hidden">
                {user && <ProfileMenu />} */}
                  <IconButton
                    variant="text"
                    className={
                      "mr-6 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    }
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="sm:hidden md:block">
                    {user ? (
                      <ProfileMenu />
                    ) : (
                      <>
                        <div className="md:block">
                          <button
                            className="sign_btn sm:text-[14px] md:text-[16px]"
                            onClick={handleOpen}
                          >
                            Sign Up/Login
                          </button>
                        </div>
                        <>
                          {/* <LoginModal handleOpen={handleOpen} open={open} /> */}
                        </>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Collapse open={openNav}>
                  <div onClick={() => setOpenNav(!openNav)}>{navList}</div>
                  <div className="">
                    <div className="flex justify-center items-center gap-x-1 w-full ">
                      {user ? (
                        ""
                      ) : (
                        <div className="md:block">
                          <button
                            className="sign_btn uppercase"
                            onClick={handleOpen}
                          >
                            Sign Up/Login
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      )}
      <div className="bg-white navbar_sticky shadow-md sm:hidden md:block">
        <div className=" flex custom-container ">
          <Navbar className="sm:py-0 md:py-2 shadow-none px-0 border-none">
            <div className="flex items-center justify-between text-blue-gray-900 ">
              <div
                className={"md:ms-0 sm:ms-[15px]"}
                onClick={() => {
                  window.location.reload(), window.scrollTo(0, 0);
                }}
              >
                <Link to={"/"}>
                  <img
                    src={"https://i.ibb.co/GpqY8tQ/PSH-web-logo-1.png"}
                    alt="PSH logo"
                    className="navbar_m_logo"
                  />
                </Link>
              </div>

              <div className={"contents"}>
                <div className="mr-4 hidden lg:block nav_Link">{navList}</div>
                <div className="flex justify-end sm:w-full md:w-auto">
                  <div className="sm:block md:hidden ms-3">
                    <div>{user && <ProfileMenu />}</div>
                  </div>
                </div>
                {/* <div className="sm:block md:hidden">
                {user && <ProfileMenu />} */}
                <IconButton
                  variant="text"
                  className={
                    "mr-6 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  }
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="sm:hidden md:block">
                  {user ? (
                    <ProfileMenu />
                  ) : (
                    <>
                      <div className="md:block">
                        <button
                          className="sign_btn sm:text-[14px] md:text-[16px]"
                          onClick={handleOpen}
                        >
                          Sign Up/Login
                        </button>
                      </div>
                      <>
                        {/* <LoginModal handleOpen={handleOpen} open={open} /> */}
                      </>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <Collapse open={openNav}>
                <div onClick={() => setOpenNav(!openNav)}>{navList}</div>
                <div className="">
                  <div className="flex justify-center items-center gap-x-1 w-full ">
                    {user ? (
                      ""
                    ) : (
                      // <>
                      //   <NavLink onClick={handleLogOut}>
                      //     <MenuItem
                      //       className={`flex items-center gap-2 rounded `}
                      //     >
                      //       <button className="sign_out uppercase ">
                      //         Log Out
                      //       </button>
                      //     </MenuItem>
                      //   </NavLink>
                      // </>
                      <div className="md:block">
                        <button
                          className="sign_btn uppercase"
                          onClick={handleOpen}
                        >
                          Sign Up/Login
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
      <LoginModal handleOpen={handleOpen} open={open} />
    </>
  );
}
