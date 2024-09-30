import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
        imageWidth = "86%"
        />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
        imageWidth = "110%"
      />

      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        kiteConnect="Kite Connect"
        imageWidth="100%"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <p className="text-center fs-5 mt-5 pt-5">Want to know more about our technology stack? Check out the <a href="" className="text-decoration-none">Zerodha.tech</a>  blog.</p>
      <Universe />
    </div>
  );
};

export default ProductPage;
