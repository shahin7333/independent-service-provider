import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
   
  const { img, details, topic, price } = service;
  const navigate=useNavigate();
  const hiringDetails=id=>{
navigate(`/services/${id}`)
}
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className='bg-light m-3'>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{topic}</h5>
          <p className="card-text">{details}</p>
          <h6 className="card-text">
            {price}
          </h6>
        </div>
        <button onClick={()=>hiringDetails(topic)} className='btn-hire-me px-5 py-2 rounded text-white'>Hire Me</button>
      </div>
    </div>
  )
}

export default Service
