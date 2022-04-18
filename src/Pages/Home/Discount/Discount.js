import React from 'react';
import './Discount.css'

const Discount = () => {
    return (

        <div id='discount' className='container mt-5'> 
            <h2 className='heading-discount text-center'>Get More Offer On Photography</h2>
           <div className='row'>
         
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <h4 className='highlight text-center mt-5'>Discount?</h4>
            <p>You are new in my site? Do you want to hire me for your business? Get <b className='highlight'>35%</b> discount for the first time Hiring me. This offer only for the new Member and this offer only get for the first hiring.</p>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
            <h4 className='highlight text-center mt-5'>Special Discount?</h4>
            <p>This offer only for those member, who will hire me more the five times. Thsese member get always <b className='highlight'>20%</b> discount on available price for all time.</p>
        </div>
            </div>
          
        </div>
    );
};

export default Discount;