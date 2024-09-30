import React from "react";

const Team = () => {
  return (
    <div className="row m-5">
      <h2 className="text-center mb-4 pb-5">People</h2>
      <div className="col-6 text-center ps-5 pe-0">
        <img
          src="media\images\nithinKamath.jpg"
          alt="Founder"
          className="rounded-circle mb-3"
          style={{ width: "18rem" }}
        />
        <h5>Nithin Kamath</h5>
        <p>Founder, CEO</p>
      </div>
      <div className="col-6" style={{width:'45%'}}>
        <p className="lh-lg">
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <p className="lh-lg">
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
        </p>
        <p>Playing basketball is his zen.</p>
        <p>
          Connect on{" "}
          <a href="/" className="text-decoration-none">
            Homepage
          </a>{" "}
          /{" "}
          <a href="/trading" className="text-decoration-none">
            TradingQnA
          </a>{" "}
          /{" "}
          <a href="/twitter" className="text-decoration-none">
            Twitter
          </a>{" "}
        </p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 text-center">
          <img
            src="media\images\Nikhil.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Nikhil"
          />
          <h5>Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/Kailash.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Kailash"
          />
          <h5>Dr. Kailash Nadh</h5>
          <p>CTO</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/Venu.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Venu"
          />
          <h5>Venu Madhav</h5>
          <p>COO</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-4 text-center">
          <img
            src="media/images/Hanan.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Hanan"
          />
          <h5>Hanan Delvi</h5>
          <p>CCO</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/Seema.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Seema"
          />
          <h5>Seema Patil</h5>
          <p>Director</p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/karthik.jpg"
            className="rounded-circle mb-3"
            style={{ width: "15rem" }}
            alt="Karthik"
          />
          <h5>Karthik Rangappa</h5>
          <p>Chief of Education</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
