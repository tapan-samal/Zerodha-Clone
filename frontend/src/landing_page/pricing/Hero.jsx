import React from "react";

const Hero = () => {
  return (
    <div className="container text-center mt-5">
      <div className="mb-5 pb-5 border-bottom">
        <h1 className="mt-5 pt-5 fs-1 text-muted">Pricing</h1>
        <h5 className="text-muted mt-3 pb-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>
      <div className="row p-3">
        <div className="col-4 mt-5">
          <img
            src="media/images/pricingEq.svg"
            style={{ width: "70%" }}
            alt="0"
          />
          <h2 className="mt-4 text-muted fs-3">Free equity delivery</h2>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/pricing20.svg"
            style={{ width: "70%" }}
            alt="0"
          />
          <h2 className="mt-4 text-muted fs-3">Intraday and F&O trades</h2>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/pricingEq.svg"
            style={{ width: "70%" }}
            alt="0"
          />
          <h2 className="mt-4 text-muted fs-3">Free direct MF</h2>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
