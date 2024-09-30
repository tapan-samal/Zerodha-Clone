import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5 mb-5">
        <div className="col-5 p-4">
          <h1>Trust with confidence</h1>
          <h5 className="mt-5 text-muted">Customer-first always</h5>
          <p className="text-muted py-1">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h5 className="mt-4 text-muted">No spam or gimmicks</h5>
          <p className="text-muted py-1">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h5 className="mt-4 text-muted">The Zerodha universe</h5>
          <p className="text-muted py-1">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h5 className="mt-4 text-muted">Do better with money</h5>
          <p className="text-muted py-1">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "100%" }}
          />
          <div className="d-flex flex-row justify-content-center gap-5">
            <a href="/" className="text-decoration-none">
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="/" className="text-decoration-none">
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <img
          src="media/images/pressLogos.png"
          alt="Press-Logo"
          className="mt-5"
          style={{ width: "65%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Stats;
