import React from "react";

const Universe = () => {
  return (
    <div className="container text-center">
      <h2 className="mt-5 pt-5 text-muted">The Zerodha Universe</h2>
      <p className="mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-3">
        <div className="col-4 p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Fund House"
            style={{ width: "70%" }}
          />
          <p className=" mt-4 small-text">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            style={{ width: "60%" }}
            className="mt-5"
          />
          <p className=" mt-4 small-text">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ width: "75%" }}
          />
          <p className=" mt-4 small-text">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt="SmallCase Logo"
            style={{ width: "80%" }}
            className="mt-5"
          />
          <p className=" mt-4 small-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          {" "}
          <img
            src="media/images/tijori.svg"
            alt="Tijori House"
            style={{ width: "60%" }}
          />
          <p className=" mt-4 small-text">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "50%" }}
            className="mt-5"
          />
          <p className=" mt-4 small-text">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="btn btn-primary btn-lg px-5 mb-5">Sign up for free</button>
    </div>
  );
};

export default Universe;
