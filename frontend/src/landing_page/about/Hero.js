import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We Pioneered The Discount Broking Model In India <br />
          Now, We Are Breaking Ground With Our Technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted " style={{lineHeight:"1.8",fontSize:"1.2em"}}>
        <div className="col-6 p-5">
          <p>
            We Kick-Started Operations On The 15th Of August, 2010 With The Goal
            Of Breaking All Barriers That Traders And Investors Face In India In
            Terms Of Cost, Support, And Technology.
          </p>
          <p>
            Today, Our Disruptive Pricing Models And In-House Technology Have
            Made Us The Biggest Stock Broker In India.
          </p>
          <p>
            Over 1+ Crore Clients Place Millions Of Orders Every Day Through Our
            Powerful Ecosystem Of Investment Platforms, Contributing Over 15% Of
            All Indian Retail Trading Volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In Addition, We Run A Number Of Popular Open Online Educational And
            Community Initiatives To Empower Retail Traders And Investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , Our Fintech Fund And Incubator, Has Invested In Several Fintech
            Startups With The Goal Of Growing The Indian Capital Markets.
          </p>
          <p>
            And Yet, We Are Always Up To Something New Every Day. Catch Up On
            The Latest Updates On Our Blog Or See What The Media Is Saying About
            Us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
