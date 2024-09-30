import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  kiteConnect
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 mt-5 ps-5">
          <h2 className="mt-5 mb-2 pt-5 ps-5">{productName}</h2>
          <p style={{ textAlign: "justify" }} className="ps-5 lh-lg">
            {productDescription}
          </p>
          <div className="ps-5 fs-5 ">
            {learnMore && (
              <a href="/tryDemo" className="text-decoration-none">
                {learnMore}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {kiteConnect && (
              <a href="/tryDemo" className="text-decoration-none">
                {kiteConnect}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-7 text-end">
          <img src={imageUrl} alt="Product-img" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
