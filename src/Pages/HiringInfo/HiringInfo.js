import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './HiringInfo.css'

const HiringInfo = () => {
    const {hiringTopic}=useParams();
    return (
        <div className='text-center mt-5'>
            <h2 className='hiring-info'>{hiringTopic}</h2>
            <p>Your <b className='hiring-info'>{hiringTopic}</b> request of hiring will be activate after clicking the checkout button. And we will contact with you very soon.</p>
            <p><span>Thanks for hiring.</span></p>
            <Link to="/checkout">
            <button className='checkout-btn text-white rounded border-0 py-2 px-5'>Checkout</button>
            </Link>
        </div>
    );
};

export default HiringInfo;