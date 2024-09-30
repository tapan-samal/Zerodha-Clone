import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  imageWidth
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 mt-4 text-center mb-5">
          <img src={imageUrl} alt="Product-img" style={{ width: imageWidth }} />
        </div>
        <div className="col-5 mt-4 ps-5">
          <h2 className="mt-5 ps-5">{productName}</h2>
          <p style={{ textAlign: "justify" }} className="ps-5 lh-lg">
            {productDescription}
          </p>
          <div className="ps-5 fs-5 ">
            {tryDemo && (
              <a href="/tryDemo" className="text-decoration-none fs-6">
                {tryDemo}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a href="/learnMore" className="ps-5 text-decoration-none fs-6">
                {learnMore}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
          <div className="ps-5 mt-3">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} className="ps-4" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
