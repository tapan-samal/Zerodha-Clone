import React from "react";
import {Link} from "react-router-dom";


const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-2 mb-5">
        <img
          src="media/images/homeHero.png"
          style={{ width: "70%", margin: "0 auto" }}
          alt="Hero Image"
        />
        <div className="mt-5">
          <h1>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary fs-5 m-3 px-4">
              Sign up Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
