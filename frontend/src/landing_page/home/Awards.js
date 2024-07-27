import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock Broker In India</h1>
                    <p className='mb-5'>1.3+ Million StockIt Clients Contribute To Over 15% Of All Retail Order Volumes In India Daily By Trading And Investing In:</p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li>Futures And Options</li>
                        <li>Commodity Derivatives</li>
                        <li>Currency Derivatives</li>
                    </ul>
                        </div>
                        <div className='col-6'>
                    <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct Mutual Funds</li>
                        <li>Bonds And Gov</li>
                    </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:'90%'}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards ;
