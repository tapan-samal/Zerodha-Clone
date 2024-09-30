import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#387ed1" }}>
      <div className="row text-light mb-5 p-5 mx-5">
        <div className="col-7 mt-4">
          <h5>Support Portal</h5>
          <h5 className="mt-5 mb-5 fs-4">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <div class="position-relative w-100">
            <input
              type="text"
              className="w-100 py-3 px-3 border-0"
              placeholder="Eg: how I activate F&O, why is my order getting rejected..."
            />
            <i className="fa fa-search position-absolute search-icon"></i>
          </div>

          <div className="fs-6 mt-3">
            <a href="" className="text-light lh-lg me-4">
              Track account opening
            </a>{" "}
            <a href="" className="text-light lh-lg me-4">
              {" "}
              Track segment activation
            </a>
            <a href="" className="text-light lh-lg me-5">
              {" "}
              Intraday margins
            </a>{" "}
            <br />
            <a href="" className="text-light lh-lg">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-5 mt-4">
          <h6 className="text-end mb-5">
            <a href="" className="text-light">
              Track Tickets
            </a>
          </h6>
          <h5 className="ms-3">Featured</h5>
          <p className="ms-3">
            Due to the settlement holiday on Monday, your account balance will
            not include the following credits on 16 September, 2024:
          </p>
          <ul>
            <li>
              Intraday profits made in the Equity segment on Sept 13, 2024.
            </li>
            <li>
              Credits from trades made in NFO, Currency, and Commodity
              derivatives on Sept 13, 2024. This will include options premium
              credits, futures M2M profits, etc. <a href="">Read more.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
