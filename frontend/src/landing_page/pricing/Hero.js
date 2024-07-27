import React from 'react';

function Hero() {
    return (  
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1 >Pricing</h1>
                <h3 className='text-muted mt-3 fs-5'>Free Equity Investments And Flat ₹20 Traday And F&O Trades</h3>
            </div>
            <div className="row p-4 mt-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" alt="Equity Delivery" />
                    <h1 className='fs-3'>Free Equity Delivery</h1>
                    <p className='text-muted'>All Equity Delivery Investments (NSE, BSE) Are Absolutely Free — ₹ 0 Brokerage.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/intradayTrades.svg" alt="Intraday Trades" />
                    <h1 className='fs-3'>Intraday And F&O Trades</h1>
                    <p className='text-muted'>Flat Rs. 20 Or 0.03% (Whichever Is Lower) Per Executed Order On Intraday Trades Across Equity, Currency, And Commodity Trades.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" alt="Direct Mutual Fund" />
                    <h1 className='fs-3'>Free Direct MF</h1>
                    <p className='text-muted'>All Direct Mutual Fund Investments Are Absolutely Free — ₹ 0 Commissions & DP Charges.</p>
                </div>
            </div>
        </div>  
    );
}

export default Hero;<h1>Hero</h1>