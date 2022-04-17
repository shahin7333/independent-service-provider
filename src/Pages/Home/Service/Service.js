import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({service}) => {
    const {img,details,topic,price}=service;
    return (
<div class="gy-5 col-sm-12 col-md-6 col-lg-4" >
<div className='card' style={{width: "18rem"}}>
  <img  src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{topic}</h5>
    <p class="card-text">{details}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    );
};

export default Service;