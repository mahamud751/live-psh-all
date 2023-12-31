import React from "react";
import Image from "next/image";
import Link from "next/link";
const Yarn = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-7 p-0">
          <Image
            width={320}
            height={220}
            src="https://plus.unsplash.com/premium_photo-1675799807465-2a0d6be9b01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y290dG9ufGVufDB8fDB8fHww"
            alt="vision"
            style={{ width: "100%", height: 600 }}
            className="img-fluid rounded"
          />
          <img src="" className="img-fluid rounded" />
        </div>
        <div className="col-sm-5 py-3 position-relative">
          <div className="yarn-div">
            <h1>
              Your yarn sourcing <br />
              solution
            </h1>
            <p>
              We are one stop shop for all your yarn requirements. We offer our
              global clients with competitive sourcing, quality assurance,
              compliance and a complete solution for supply chain management in
              textile industry with expert market knowledge, delivery excellence
              and end to end logistics support.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a
          href="#"
          className="badge badge-pill py-3 px-5 border border-dark text-dark mr-2 my-2"
        >
          Enquiry for products
        </a>
        <Link
          href={"/register"}
          className="badge badge-pill py-3 px-5 border border-dark bg-dark text-white my-2"
        >
          Become a member
        </Link>
      </div>
    </div>
  );
};

export default Yarn;
