import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../../hooks/useFetch";
import SingleCard from "../../components/home/SingleCard";
import BranchProperty from "./BranchProperty";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// import BranchDetails from "./BrachList";

const BranchDetails = () => {
  const { id } = useParams();
  const { data: branchData, loading } = UseFetch(`branch/${id}`);

  return (
    <div className="custom-container sm:px-5 md:px-0">
      <div className="flex items-center gap-x-3 md:mt-5 sm:mt-5">
        <Link to="/" className="hover:text-[#00bbb4] md:block sm:hidden">
          <p>Home</p>
        </Link>
        <p className="sm:hidden md:block">
          <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
        </p>
        <Link to="/" className="md:hidden sm:block">
          <p>
            <MdKeyboardArrowLeft className="w-[20px] h-[20px]" />
          </p>
        </Link>
        <p>Property</p>
      </div>

      {loading ? (
        <p className="text-center my-80">Loading...</p>
      ) : branchData?.property?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-x-5 md:gap-x-7 sm:grid-cols-1 mt-2 sm:gap-x-0 z-0 sm:mx-auto md:mx-0">
            {branchData?.property?.map((item) => (
              <div className="">
                <BranchProperty
                  key={item._id}
                  item={item}
                  branchData={branchData}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center text-bg-danger not_found">
            <img
              className="img-fluid"
              src="https://i.ibb.co/Jr6dcW7/Figma.png"
              alt=""
            />
            <div className="flex justify-center my-12">
              <Link to={"/"}>
                <button className="ml-1 rounded bg-[#00bbb4] font-bold px-8 py-3 uppercase text-white text-sm">
                  GO TO HOME
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-900">
          <h1 className="my-5 text-center">
            Welcome to <span style={{ color: "#00bbb4" }}>{data.name}</span>
          </h1>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
            {data.property ? (
              data?.property?.map((item, i) => <BranchList item={item} />)
            ) : (
              <div className="d-flex justify-content-center text-bg-danger not_found">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/Jr6dcW7/Figma.png"
                  alt=""
                />
              </div>
            )}
          </div>
        </div> */}
    </div>
  );
};

export default BranchDetails;
