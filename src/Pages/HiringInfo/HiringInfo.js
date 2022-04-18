import React from 'react';
import { useParams } from 'react-router-dom';

const HiringInfo = () => {
    const {hiringTopic}=useParams();
    return (
        <div>
            <h2>HiringInfo:{hiringTopic}</h2>
        </div>
    );
};

export default HiringInfo;