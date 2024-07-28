import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The StockIt Universe</h1>
        <p>
          Extend Your Trading And Investment Experience Even Further With Our
          Partner Platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic Investment Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"35%"}}/>
          <p className="text-small text-muted">Algo & Strategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"40%"}}/>
          <p className="text-small text-muted">Options Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Screenshot(274).png " style={{width:"35%"}} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpilogo.png" />
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"35%"}}/>
          <p className="text-small text-muted">Insurance</p>
        </div>
       <Link to="/signup">
       <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
       </Link>
      </div>
    </div>
  );
}

export default Universe;