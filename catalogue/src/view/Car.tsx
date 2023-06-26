import React from 'react';
import { Image } from 'antd';

function Car({ img }) {
    return (
        <Image
            height={300}
            src={img}
        />);
};

export default Car;