import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-2 mb-5">
        <div className="mt-5">
          <h2>Open a Zerodha account</h2>
          <h6 className="mt-4 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </h6>
          <Link to="/signup">
            <button className="btn btn-primary fs-5 mt-4 px-4">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
