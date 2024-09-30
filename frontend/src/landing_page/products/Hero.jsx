import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 border-bottom mb-5">
        <h1>Technology</h1>
        <h4 className="text-muted mt-2">Sleek, modern, and intuitive trading platforms</h4>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="/investment" className="text-decoration-none">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
