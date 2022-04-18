import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='mt-5 d-flex align-items-center justify-content-center'>
             <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;