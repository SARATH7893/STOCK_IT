import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/sarathProfile.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Sarath</h4>
          
        </div>
        <div className="col-6 p-3">
          <p>
            Sarath Bootstrapped And Founded StockIt In 2010 To Overcome The
            Hurdles He Faced During His Decade Long Stint As A Trader. Today,
            StockIt Has Changed The Landscape Of The Indian Broking Industry.
          </p>
          <p>
            He Is A Student Of Prasad V Potluri Siddhartha Institute Of Technology. 
          </p>
          <p>Playing Basketball Is His Zen.</p>
          <p>
            Connect On <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> /{" "}
            <a  className="text-decoration-none" href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;