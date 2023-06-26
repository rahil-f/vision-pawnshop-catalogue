import React from 'react';
import { Image, theme } from 'antd';

const { useToken } = theme;

function Car({ img }) {
    return (
        <Image
            width={400}
            src={img}
        />);
};

export default Car;