import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-3">
        <div className="col-6">
          <img
            src="media\images\education.svg"
            alt="Education"
            style={{ width: "82%" }}
          />
        </div>
        <div className="col-6 mt-5">
          <h3 className="text-muted">Free and open market education</h3>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" className="text-decoration-none">
          Varsity{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/" className="text-decoration-none">
          TradingQ&A{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
