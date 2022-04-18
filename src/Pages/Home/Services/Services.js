import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div  id='services'  className='container mt-5'>
            <h2 className='headline text-center'>Available Photography Services</h2>
           <div className='row'>
           {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;