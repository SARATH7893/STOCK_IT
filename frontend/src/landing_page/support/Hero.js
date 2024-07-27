import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
        <div className="p-5 " id="supportWrapper">
          <h4>Support Portal</h4>
          <h4><a href="" className='text-decoration-none'>Track Tickets</a></h4>
        </div>
        <div className="p-3  row m-3" >
        <div className="p-5 col-6" >
            <h1 className='fs-3'>Search For An Answer Or Browse Help Topics<br/> To Create A Ticket</h1>
            <br/>
            <input placeholder='Eg . How Do I Activate F&O,Why Is My Order Getting Rejected.. '/>
            <br/><br/>
            <a href='' className='text-decoration-none'>Track Account Opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='' className='text-decoration-none'>Track Segment Activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='' className='text-decoration-none'>Intraday </a>
            <br/>
            <a href='' className='text-decoration-none'> Margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='' className='text-decoration-none'>Kite User Manual</a>
        </div>
        <div className="p-5  col-6"  >
            <h1 id="featured">Featured</h1>
            <ol>
                <li><a href='' className='text-decoration-none'><h4>Current TakeOvers And Delisting-June 2024</h4></a></li>
                <li><a href='' className='text-decoration-none'><h4>Latest Intraday Leverages- MIS & CO</h4></a></li>
            </ol>
        </div>
        </div>
      </section>
    );
  }

export default Hero;<h1>hero</h1>