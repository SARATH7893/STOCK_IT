import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <br></br>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }}
            className="text-muted"
          >
            <li>
              Call & Trade And RMS Auto-Squareoff:Additional Charges Of ₹50 +
              GST Per Order.
            </li>
            <li>Digital Contract Notes Will Be Sent Via E-Mail.</li>
            <li>
              Physical Copies Of Contract Notes, If Required, Shall Be Charged
              ₹20 Per Contract Note. Courier Charges Apply.
            </li>
            <li>
              For NRI Account (non-PIS), 0.5% Or ₹100 Per Executed Order For
              Equity (Whichever Is Lower).
            </li>
            <li>
              For NRI Account (PIS), 0.5% Or ₹200 Per Executed Order For Equity
              (Whichever Is Lower).
            </li>
            <li>
              If The Account Is In Debit Balance, Any Order Placed Will Be
              Charged ₹40 Per Executed Order Instead Of ₹20 Per Executed Order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List Of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;