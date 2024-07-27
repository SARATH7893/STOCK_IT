import React from 'react';
function Education() {
    return ( 
    
        <div className='container mt-5'>
        <div className='row'>
        <div className='col-6'>
               <img src="media/images/education.svg" style={{width:"70%"}}></img>
        </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free And Open Market Education</h1>
                <p>Varsity, The Largest Online Stock Market Education Book In The World Covering Everything From The Basics To Advance Trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
                <p className='mt-5'>Trading Q&A, The Most Active Trading And Investiment Community In India For All Your Market Related Queries.</p>
                <a href='' style={{textDecoration:"none"}}>Trading Q&A <i className="fa-solid fa-arrow-right-long"></i></a>
            </div> 
        </div>
    </div>);
}

export default Education;