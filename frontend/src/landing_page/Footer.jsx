import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col mt-4">
              <Link to="/">
                <img
                  src="/media/images/logo.svg"
                  alt="Logo"
                  style={{ width: "55%" }}
                />
              </Link>
              <p className="mt-3" style={{ fontSize: "14px" }}>
                © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
              </p>
              <div className="fs-4 d-flex gap-4 ">
                <Link to="/">
                  <i className="fa fa-twitter-square icon-color" aria-hidden="true"></i>{" "}
                </Link>
                <Link to="/">
                  <i className="fa fa-facebook-square icon-color" aria-hidden="true"></i>{" "}
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram icon-color" aria-hidden="true"></i>{" "}
                </Link>
                <Link to="/">
                  <i className="fa fa-linkedin-square icon-color" aria-hidden="true"></i>
                </Link>
              </div>
              <hr />
              <div className="fs-4 d-flex gap-4 text-muted">
                <Link to="/">
                  <i className="fa fa-youtube-play icon-color" aria-hidden="true"></i>{" "}
                </Link>
                <Link to="/">
                  <i className="fa fa-whatsapp icon-color" aria-hidden="true"></i>{" "}
                </Link>
                <Link to="/">
                  <i className="fa fa-telegram icon-color" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="col mt-4 footer">
              <h5>Company</h5>
              <Link to="/about">About</Link> <br />
              <Link to="/products">Products</Link> <br />
              <Link to="/pricing">Pricing</Link> <br />
              <Link to="/">Referral programme</Link> <br />
              <Link to="/">Careers</Link> <br />
              <Link to="/">Zerodha.tech</Link> <br />
              <Link to="/">Press & media</Link> <br />
              <Link to="/">Zerodha Cares (CSR)</Link> <br />
            </div>
            <div className="col mt-4 footer">
              <h5>Support</h5>
              <Link to="/">Contact us</Link> <br />
              <Link to="/">Support portal</Link> <br />
              <Link to="/">Z-Connect blog</Link> <br />
              <Link to="/">List of charges</Link> <br />
              <Link to="/">Downloads & resources</Link> <br />
              <Link to="/">Videos</Link> <br />
              <Link to="/">Market overview</Link> <br />
              <Link to="/">How to file a complaint?</Link> <br />
              <Link to="/">Status of your complaints</Link> <br />
            </div>
            <div className="col mt-4 footer">
              <h5>Account</h5>
              <Link to="/signup">Open an account</Link> <br />
              <Link to="/">Fund Transfer</Link>
            </div>
          </div>
          <div className="mt-4 text-muted">
            <p className="footer-para">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p className="footer-para">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p className="footer-para">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p className="footer-para">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p className="footer-para">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                create a ticket here.
              </a>
            </p>
          </div>
          <div className="footer container d-flex gap-3 justify-content-center">
            <Link to="/">NSE</Link>
            <Link to="/">BSE</Link>
            <Link to="/">MCX</Link>
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Policies & procedures</Link>
            <Link to="/">Privacy policy </Link>
            <Link to="/">Disclosure </Link>
            <Link to="/">For investor's attention </Link>
            <Link to="/">Investor charter</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
