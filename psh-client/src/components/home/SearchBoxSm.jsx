import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

import { FaBed } from "react-icons/fa";
import { BiBody } from "react-icons/bi";

import { GiSofa } from "react-icons/gi";
import DatePicker from "react-datepicker";

import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { leftDate, rightDate, toTalRent } from "../../redux/reducers/dateSlice";
import { addDays, addMonths, addYears, subDays } from "date-fns";
import UseFetch from "../../hooks/useFetch";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import durationImg from "../../assets/img/clock-01.png";
import { AuthContext } from "../../contexts/UserProvider";

const SearchBoxSm = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const reduxDispatch = useDispatch();
  const startDate = useSelector((state) => state.dateCount.startDate);

  const endDate = useSelector((state) => state.dateCount.endDate);
  const customerRent = useSelector((state) => state.dateCount.customerRent);
  const { data, loading, error, reFetch } = UseFetch(`category`);
  const { data: branch } = UseFetch(`branch`);
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const inputRef = useRef(null);
  const [destination, setDestination] = useState("");

  const [inputActive, setInputActive] = useState(false);
  const filteredData = branch.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputActive(false);
      }
    };

    if (inputActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [inputActive]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setQuery(item.name);
    setInputActive(false);
    setDestination(item.name);
  };

  useEffect(() => {
    reduxDispatch(toTalRent());

    if (customerRent.remainingDays < 1) {
      reduxDispatch(rightDate(addDays(new Date(startDate), 1)));
    }
  }, [startDate, endDate, customerRent?.remainingDays]);

  // get month Last Day
  function getLastDayOfMonth() {
    const today = new Date(startDate);
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1.
    const lastDay = new Date(year, month, 0).getDate(); // Setting day to 0 gets the last day of the previous month.
    return lastDay;
  }

  const [bedrooms, setBedrooms] = useState([]);

  const [FurnishedDisplay, setFurnishedDisplay] = useState("");
  const [FurnishedQuery, setFurnishedQuery] = useState("");
  const [FurnishedValue, setFurnishedValue] = useState(0);
  const furnitures = ["Furnished", "Unfurnished"];

  const [genderDisplay, setGenderDisplay] = useState("");
  const [genderQuery, setGenderQuery] = useState("female");
  const [genderValue, setGenderValue] = useState(0);
  const gender = ["Female", "Male"];
  // const gender = ["All", "Male", "Female", "Others"];

  const [categoryDisplay, setCategoryDisplay] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [categoryValue, setCategoryValue] = useState(0);
  const category = ["All", ...data.map((item) => item?.name)];
  const beds = [
    "All",
    "Bunk Bed",
    "Single Bed",
    "Double Bed",
    "Semi-Double Bed",
    "1 BR",
    "2 BR",
    "3 BR",
  ];
  const [bedValue, setBedValue] = useState(0);

  const handleFurnitureSelection = (index) => {
    setFurnishedValue(index);
    const selectedFurniture = furnitures[index];
    setFurnishedDisplay(selectedFurniture);

    // Map furnitures values to query values
    if (selectedFurniture === "Furnished") {
      setFurnishedQuery("yes");
    } else if (selectedFurniture === "Unfurnished") {
      setFurnishedQuery("no");
    }
  };

  const handleGenderSelection = (index) => {
    setGenderValue(index);
    const selectedGender = gender[index];
    setGenderDisplay(selectedGender);

    // Map gender values to query values
    if (selectedGender === "Female") {
      setGenderQuery("female");
    } else if (selectedGender === "Male") {
      setGenderQuery("male");
    }
    // } else if (selectedGender === "Others") {
    //   setGenderQuery("both");
    // }
  };

  const handleCategorySelection = (index) => {
    setCategoryValue(index);
    const selectedCategory = category[index];
    setCategoryDisplay(selectedCategory);

    // Map category values to query values
    if (selectedCategory === "All") {
      setCategoryQuery(""); // Empty string means no specific category filter
    } else {
      setCategoryQuery(selectedCategory);
    }

    // Handle bed selection based on category
    if (selectedCategory === "Private Room") {
    } else if (selectedCategory === "Shared Room") {
    } else if (selectedCategory === "Apartment") {
    } else {
      setBedValue(0); // Reset bed selection to "All" for other categories
      setBedrooms([]);
    }
  };

  const handleBedSelection = (index) => {
    if (categoryValue === 1) {
      // Private Room category
      if (beds[index] === "Bunk Bed") {
        // If 2 BR is selected, set bedrooms to ["2 BR"]
        setBedrooms(["Bunker"]);
      }
      setBedValue(index); // Update the selected bed value
    } else if (categoryValue === 2) {
      // Shared Room category
      if (index === 2) {
        setBedrooms(["1"]); // Set bedrooms to ["Bunker"] for Shared Room
      } else if (index === 3) {
        setBedrooms(["2"]); // Automatically select "1 BR" bed for Private Room
      } else {
        setBedrooms([`${index}`]); // Set bedrooms to the selected bed
      }
      setBedValue(index); // Update the selected bed value
    } else if (categoryValue === 3) {
      // Shared Room category
      if (beds[index] === 2) {
        setBedrooms(["1"]); // Set bedrooms to ["Bunker"] for Shared Room
      } else if (index === 3) {
        setBedrooms(["2"]); // Automatically select "1 BR" bed for Private Room
      } else if (index === 4) {
        setBedrooms(["3"]); // Automatically select "1 BR" bed for Private Room
      } else {
        setBedrooms([`${index}`]); // Set bedrooms to the selected bed
      }
      setBedValue(index); // Update the selected bed value
    } else {
      // Other categories
      if (index === 0) {
        // If "All" is selected, set bedrooms to an empty array
        setBedrooms([]);
      } else {
        setBedrooms([`${index}`]); // Set selected bedroom value for other categories
      }
      setBedValue(index); // Update the selected bed value
    }
  };

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const payload = {
      destination,
      bedrooms: bedrooms.length > 0 ? bedrooms : "Any",
      furnitured: FurnishedQuery,
      gender: genderQuery,
      category: categoryQuery,
    };

    dispatch({ type: "NEW_SEARCH", payload });
    navigate("/list", { state: payload });
  };

  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

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
    <div className="searchBoxSm mt-5">
      {isScrolled ? (
        <div
          className={` flex searchButtonTop items-center ms-5 ${
            user ? "w-[110px]" : "w-[150px]"
          }`}
          onClick={() => handleOpen("xxl")}
        >
          <h5 className={"text-black text-[12px] mt-1"}> Search</h5>

          <div>
            <i className="fa fa-search mt-3" />
          </div>
        </div>
      ) : (
        ""
      )}

      {isScrolled ? (
        ""
      ) : (
        <div className="searchButton" onClick={() => handleOpen("xxl")}>
          <h5 className="text-black text-[1rem]"> Find Your Accommodation</h5>

          <i className="fa fa-search mt-2" />
        </div>
      )}
      <Dialog open={size === "xxl"} size={size || "xxl"} handler={handleOpen}>
        <div>
          <Button
            variant="text"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <i
              className="fa-solid fa-arrow-left text-2xl"
              style={{ color: "#00bbb4" }}
            ></i>
          </Button>
        </div>
        <DialogHeader> </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSearch}>
            <div>
              <div className="search-filed2">
                <ul className="flex justify-center main-search text-[12px]">
                  <li className="list-none py-1">
                    <span
                      onClick={() =>
                        reduxDispatch(
                          rightDate(addDays(new Date(startDate), 1))
                        )
                      }
                      className={` px-11 cursor-pointer py-2 ${
                        customerRent.remainingDays < getLastDayOfMonth() &&
                        customerRent.years === undefined
                          ? "dmyActive "
                          : "dmyNonActive"
                      }`}
                    >
                      Day
                    </span>
                  </li>
                  <li className="list-none py-1">
                    <span
                      onClick={() =>
                        reduxDispatch(
                          rightDate(addMonths(new Date(startDate), 1))
                        )
                      }
                      className={` px-11 cursor-pointer py-2 ${
                        customerRent.remainingDays >= getLastDayOfMonth() &&
                        customerRent.years === undefined
                          ? "dmyActive "
                          : "dmyNonActive"
                      }`}
                    >
                      Month
                    </span>
                  </li>
                  <li className="list-none py-1">
                    <span
                      onClick={() =>
                        reduxDispatch(rightDate(addYears(new Date(endDate), 1)))
                      }
                      className={` px-11 cursor-pointer py-2 ${
                        customerRent.years >= 1 ? "dmyActive " : "dmyNonActive"
                      }`}
                    >
                      Year
                    </span>
                  </li>
                </ul>

                <hr style={{ margin: "5px 0" }} />
                <ul className="flex " style={{ marginTop: "23px" }}>
                  <li className="sm:text-[12px] ">
                    <span
                      className={`tab ${categoryValue === 0 ? "selected" : ""}`}
                      onClick={() => handleCategorySelection(0)}
                    >
                      All
                    </span>
                  </li>
                  {data.map((rent, index) => (
                    <li key={index + 1} className="sm:text-[12px]">
                      <span
                        className={`tab ${
                          categoryValue === index + 1 ? "selected" : ""
                        }`}
                        onClick={() => handleCategorySelection(index + 1)}
                      >
                        {rent?.property?.length > 0 ? rent?.name : ""}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Search filed */}
                <div className="input-filed-area mb-6" ref={inputRef}>
                  <div className="location-icon">
                    <img
                      src="https://i.ibb.co/z8kf0jf/location.png"
                      style={{
                        color: "#00bbb4",
                        width: "20px",
                        height: "20px",
                        marginTop: "2px",
                      }}
                      alt="location"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Looking for best place to live"
                    required
                    value={query}
                    className="input_main rounded"
                    ref={inputRef}
                    style={{
                      background: "none",
                      outline: "none",
                      width: "100%",
                      height: "40px",
                      paddingLeft: "40px",
                    }}
                    onChange={(e) => setQuery(e.target.value)}
                    onClick={() => setInputActive(true)}
                  />
                  {inputActive && (
                    <ul className="p-2 absolute bg-white border border-[#00bbb4] rounded w-full z-10">
                      {filteredData.map((item, index) => (
                        <li
                          key={item._id}
                          onClick={() => handleItemClick(item)}
                          className="hover:bg-[#00bbb4] hover:text-white cursor-pointer px-2 rounded w-full"
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Date Picker */}
                <div className="flex mt-5 px-2 py-1 border border-[#00bbb4] rounded ">
                  <div className="flex sm-date">
                    <i
                      className="fa-solid fa-calendar-days me-2 mt-1"
                      style={{ color: "#00bbb4" }}
                    ></i>
                    <DatePicker
                      selected={new Date(startDate)}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => reduxDispatch(leftDate(date))}
                      minDate={subDays(new Date(), 0)}
                    />
                  </div>
                  <div className="arrow-icon-sm">
                    <BsArrowRight />
                  </div>
                  <div className="flex sm-date ml-[-28px]">
                    <i
                      className="fa-solid fa-calendar-days me-2 mt-1"
                      style={{ color: "#00bbb4" }}
                    ></i>
                    <DatePicker
                      selected={
                        customerRent?.remainingDays < 1
                          ? addDays(new Date(startDate), 1)
                          : new Date(endDate)
                      }
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => reduxDispatch(rightDate(date))}
                      minDate={subDays(new Date(startDate), -1)}
                    />
                  </div>
                </div>
                {/* Date Count and Gender */}
                <div className="flex items-center mt-2 w-full gap-x-5">
                  <div className="flex items-center rounded gap-x-1 border border-[#00bbb4] py-0.5 w-[50%] pl-1">
                    <div>
                      <img src={durationImg} alt="" />
                    </div>
                    <div className="text-[12px]">
                      <span className="">
                        {`${
                          customerRent?.daysDifference >= 0
                            ? `${customerRent?.daysDifference} days`
                            : ""
                        }`}
                        {`${
                          customerRent?.months &&
                          customerRent?.days >= 0 &&
                          !customerRent?.years
                            ? `${customerRent?.months} months, ${customerRent?.days} days`
                            : ""
                        }`}
                        {`${
                          customerRent?.years &&
                          customerRent?.months >= 0 &&
                          customerRent?.days >= 0
                            ? `${customerRent?.years} year`
                            : ""
                        }`}
                      </span>
                    </div>
                  </div>
                  <div className="w-[50%] border border-[#00bbb4] rounded">
                    <select
                      className="pl-5 py-1 gender-sm text-[14px]"
                      value={genderValue}
                      onChange={(e) => handleGenderSelection(e.target.value)}
                    >
                      {gender.map((gender, index) => (
                        <option key={index} value={index}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Bed type and furnished or Unfurnished */}
                <div className="flex items-center mt-2 w-full gap-x-5">
                  <div className="flex items-center rounded gap-x-1 border border-[#00bbb4] py-0.5 w-[50%] pl-1">
                    <select
                      className=" pl-5 py-1 gender-sm text-[14px]"
                      name=""
                      id=""
                    >
                      <option disabled>Bed Type</option>
                      {beds.map((bed, index) => {
                        if (
                          (categoryValue === 1 &&
                            bed !== "Bunk Bed" &&
                            bed !== "Single Bed") ||
                          (categoryValue === 2 &&
                            bed !== "Single Bed" &&
                            bed !== "Double Bed" &&
                            bed !== "Semi-Double Bed") ||
                          (categoryValue === 3 &&
                            bed !== "All" &&
                            bed !== "1 BR" &&
                            bed !== "2 BR" &&
                            bed !== "3 BR")
                        ) {
                          return null; // Skip rendering
                        }

                        return (
                          <option key={index} className="my-4">
                            <span
                              onClick={() => handleBedSelection(index)}
                              className={`${
                                bedValue === index
                                  ? "bedActive"
                                  : "bedNonActive"
                              } `}
                            >
                              {bed}
                            </span>
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-[50%] border border-[#00bbb4] rounded">
                    <select
                      className="pl-5 py-1 gender-sm text-[14px]"
                      value={FurnishedValue}
                      onChange={(e) => handleFurnitureSelection(e.target.value)}
                    >
                      {furnitures.map((furniture, index) => (
                        <option key={index} value={index}>
                          {furniture}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Rent Styled Searching */}
                {/* <div className="flex justify-between">
                  <div>
                    <div>
                      <ul className={` styled-search-2 mt-3 `}>
                        {beds.map((bed, index) => {
                          if (
                            (categoryValue === 1 && bed !== "Bunk Bed") ||
                            (categoryValue === 2 &&
                              bed !== "1 BR" &&
                              bed !== "2 BR") ||
                            (categoryValue === 3 &&
                              bed !== "All" &&
                              bed !== "1 BR" &&
                              bed !== "2 BR" &&
                              bed !== "3 BR")
                          ) {
                            return null; // Skip rendering
                          }

                          return (
                            <li key={index} className="my-4">
                              <span
                                onClick={() => handleBedSelection(index)}
                                className={`${
                                  bedValue === index
                                    ? "bedActive"
                                    : "bedNonActive"
                                } `}
                              >
                                {bed}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <ul className=" styled-search-2 mt-6">
                      {furnitures.map((furniture, index) => (
                        <li key={index} className="my-4">
                          <span
                            onClick={() => handleFurnitureSelection(index)}
                            className={`${
                              FurnishedValue === index
                                ? "bedActive"
                                : "bedNonActive"
                            }`}
                          >
                            {furniture}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="styled-search-2 mt-6">
                      {gender.map((gender, index) => (
                        <li key={index} className="my-4">
                          <span
                            onClick={() => handleGenderSelection(index)}
                            className={`${
                              genderValue === index
                                ? "bedActive"
                                : "bedNonActive"
                            }`}
                          >
                            {gender}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <div className="mt-7 w-full">
                  <div
                    className="w-full"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="submit"
                      value="Find Accomodation"
                      style={{
                        backgroundColor: "#00bbb4",
                        border: "none",
                        width: "100%",
                        color: "white",
                        padding: "15px 10px",
                        borderRadius: "5px",
                        // marginTop: "12px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </DialogBody>
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </div>
  );
};

export default SearchBoxSm;
