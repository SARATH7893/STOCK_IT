import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
                <h1 className='mt-5'> Open A StockIt Account</h1>
                <p>Modern Platforms And Apps , ₹0 Investments, And Flat ₹20 Intraday And F&O Trades.</p>
                <Link to="/signup"><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign Up Now</button></Link>
        </div>
    </div>
    );
}

export default OpenAccount;