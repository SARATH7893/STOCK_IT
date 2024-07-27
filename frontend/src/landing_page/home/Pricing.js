import React from 'react';
function Pricing() {
    return (  
                <div className='container '>
                    <div className='row'>
                        <div className='col-4'>
                            <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                            <p>We Pioneered The Concept Of Discount Booking And Prices Transperency In India. Flat Fees And No Hidden Charges.</p>
                            <a href='' style={{textDecoration:"none"}}>See Pricing<i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-6 mb-5'>
                            <div className='row text-center '>
                                <div className='col p-3 border'>
                                    <h1 className='mb-3'>₹0</h1>
                                    <p>Free Equity Delivery And <br/>Direct Mutual Funds</p>
                                </div>
                                <div className='col p-3 border'>
                                <h1 className='mb-3'>₹20</h1>
                                <p>Intraday And F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Pricing;