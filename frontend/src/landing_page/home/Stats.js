import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust With Confidence</h1>
                    <h2 className='fs-4'>Customer-First Always</h2>
                    <p className='text-muted'>That's Why 1.3+ Crore Customers Trust StockIt With ₹3.5+ Lakh Crores Worth Of Equity Investments.</p>
                    <h2 className='fs-4'>No Spam Or Gimmicks</h2>
                    <p className='text-muted'>No Gimmicks, Spam,"Gamification", Or Annoying Push Notifications.High Quality Apps That You Use At Your Pace ,The Way You Like.</p>
                    <h2 className='fs-4'>The StockIt Universe</h2>
                    <p className='text-muted'>Not Just An App,But A Whole Ecosystem.Our Investiments In 30+ Fintech Startups Offer You Tailored Services Specific To Your Needs.</p>
                    <h2 className='fs-4'>Do Better With Money</h2>
                    <p className='text-muted'>With Initiatives Like Nudge And Kill Switch,We Don't Just Faciliate Transactions, But Actively Help You Do Better With Your Money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:'90%'}}></img>
                    <div className='text-center p-5'>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore Our Products <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;