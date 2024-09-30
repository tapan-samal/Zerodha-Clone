import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-3 mb-5">
        <div className="col-5 mt-5">
          <h2>Unbeatable pricing</h2>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" className="text-decoration-none fw-bold">
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-7 mt-5">
          <div className="row p-4">
            <div className="col-4 d-flex p-0">
              <img src="media/images/pricingEq.svg" style={{width:'50%'}} alt="0"  />
              <p style={{fontSize: ".7rem", marginTop:'3rem'}}>Free account opening</p>
            </div>
            <div className="col-4 d-flex p-0">
              <img src="media/images/pricingEq.svg"  style={{width:'50%'}} alt="0"  />
              <p style={{fontSize: ".7rem", marginTop:'3rem'}}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-4 d-flex p-0">
              <img src="media/images/pricing20.svg"  style={{width:'50%'}} alt="20" />
              <p style={{fontSize: ".7rem", marginTop:'3rem'}}> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
