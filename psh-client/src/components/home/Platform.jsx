import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import forMobile1 from "../../assets/img/formobile1.png";
import forMobile2 from "../../assets/img/formobile2.png";
import forMobile3 from "../../assets/img/formobile3.png";
const Platform = () => {
  return (
    <div className="md:mt-32 sm:mt-5">
      <h2 className="text-2xl font-bold">
        Why this platform better then others?
      </h2>
      <div className="grid grid-cols-12 md:gap-x-8 sm:gap-x-0 md:gap-y-16 sm:gap-y-8 mt-5">
        <div className=" space-y-3 sm:col-span-12 lg:col-span-3 md:col-span-6 ">
          <Card className="max-w-[18rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="/images/fully-furnished@3x.webp.png"
                alt="ui/ux review check"
                style={{ height: 200, width: "100%" }}
              />
            </CardHeader>
            <CardBody className="md:p-4 sm:p-2 md:h-40 sm:h-28 ">
              <h6 className="text-black font-bold">Female-Focused Dormitory</h6>
              <p className="mt-3">
                All rooms are equipped with AC, WiFi, and full furnishing. Ready
                to move in!
              </p>
            </CardBody>
          </Card>
        </div>
        <div className=" space-y-3 sm:col-span-12 lg:col-span-3 md:col-span-6 ">
          <Card className="max-w-[18rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="/images/fully-furnished@3x.webp-1.png"
                alt="ui/ux review check"
                style={{ height: 200, width: "100%" }}
              />
            </CardHeader>
            <CardBody className="md:p-4 sm:p-2 md:h-40 sm:h-28 ">
              <h6 className="text-black font-bold">Full services</h6>

              <p className="mt-3">
                All rooms are equipped with AC, WiFi, and full furnishing. Ready
                to move in!
              </p>
            </CardBody>
          </Card>
        </div>
        <div className=" space-y-3 sm:col-span-12 lg:col-span-3 md:col-span-6">
          <Card className="max-w-[18rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="/images/fully-furnished@3x.webp-2.png"
                alt="ui/ux review check"
                style={{ height: 200, width: "100%" }}
              />
            </CardHeader>
            <CardBody className="md:p-4 sm:p-2 md:h-40 sm:h-28 ">
              <h6 className="text-black font-bold">Fully furnished Room</h6>

              <p className="mt-3">
                All rooms are equipped with AC, WiFi, and full furnishing. Ready
                to move in!
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="space-y-3 sm:col-span-12 lg:col-span-3 md:col-span-6">
          <Card className="max-w-[18rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src="images/fully-furnished@3x.webp-3.png"
                alt="ui/ux review check"
                style={{ height: 200, width: "100%" }}
              />
            </CardHeader>
            <CardBody className="md:p-4 sm:p-2 md:h-40 sm:h-28 ">
              <h6 className="text-black font-bold">Fully furnished Room</h6>

              <p className="mt-3">
                All rooms are equipped with AC, WiFi, and full furnishing. Ready
                to move in!
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* For Desktop */}
      <div className="mt-12 sm:hidden md:block">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 ">
            <div className="flex ">
              <img src="/images/Frame 3727.png" alt="" />
              <div style={{ marginLeft: 40, marginTop: 120 }}>
                <img src="/images/Line 1 (Stroke).png" alt="" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h2>Search on Maps</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4">
            <div className="flex">
              <img src="/images/Group.png" alt="" />
              <div style={{ marginLeft: 40, marginTop: 120 }}>
                <img src="/images/Line 1 (Stroke).png" alt="" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h2>Select Your Perfect Room</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
          <div className=" text-center col-span-12 space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4">
            <div className="flex">
              <img src="/images/Frame 3726.png" alt="" />
            </div>
            <div className="flex justify-center w-full">
              <h2>Book and Get Ready to Stay</h2>
            </div>
            <p>
              Explore and find your desired location on our interactive maps
              feature, ensuring convenience and proximity to your desired area.
            </p>
          </div>
        </div>
      </div>
      {/* For Mobile */}
      {/* <div className="mt-12 ">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile1} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile2} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
          <div className=" text-center space-y-3 sm:col-span-12 lg:col-span-4 md:col-span-4 w-4/5">
            <div className="flex justify-center">
              <div>
                <img src={forMobile3} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <h2>Search on Maps</h2>
              </div>
              <p className="">
                Explore and find your desired location on our interactive maps
                feature, ensuring convenience and proximity to your desired
                area.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Platform;
