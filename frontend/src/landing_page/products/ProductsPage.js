import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our Ultra-Fast Flagship Trading Platform With Streaming Market Data, Advanced Charts, An Elegant UI, And More. Enjoy The Kite Experience Seamlessly On Your Android And IOS Devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The Central Dashboard For Your StockIt Account. Gain Insights Into Your Trades And investments With In-Depth Reports And Visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy Direct MutualFunds Online, Commission-Free, Delivered Directly To Your Demat Account. Enjoy The Investment Experience On Your Android And IOS Devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build Powerful Trading Platforms And Experiences With Our Super Simple HTTP/JSON APIs. If You Are A Startup, Build Your Investment App And ShowCase It To Our Clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An Easy To Grasp, Collection Of Stock Market Lessons With In-Depth Coverage And Illustrations. Content Is Broken Down Into Bite-Size Cards To Help You Learn On The Go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want To Know More About Our Technology Stack? Check Out The StockIt.Tech
        Blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;