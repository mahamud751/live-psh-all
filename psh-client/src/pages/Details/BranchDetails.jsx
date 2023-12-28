import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/useFetch";

// import BranchDetails from "./BrachList";

const BranchDetails = () => {
  const { id } = useParams();
  const { data } = UseFetch(`branch/${id}`);
  console.log(data);
  return (
    <div>
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
