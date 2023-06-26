import React from 'react';
import { Card, List, Col, Row } from 'antd';
import Car from './Car';
import dataCar from './../data/data.json';
import engine from './../assets/engine.png';
import brake from './../assets/brake.png';
import turbo from './../assets/turbo.png';
import trans from './../assets/trans.png';
import susp from './../assets/susp.png';
import zero from './../assets/0.png';
import one from './../assets/1.png';
import two from './../assets/2.png';
import three from './../assets/3.png';
import four from './../assets/4.png';
import five from './../assets/5.png';

function CarList({ number }) {
    console.log(dataCar[number])
    const numberImg = (number) => {
        switch (number) {
            case 1:
                return (<img src={one} alt="" width="50" height="50" />)
            break;
            case 2:
                return (<img src={two} alt="" width="50" height="50" />)
            break;
            case 3:
                return (<img src={three} alt="" width="50" height="50" />)
            break;
            case 4:
                return (<img src={four} alt="" width="50" height="50" />)
            break;
            case 5:
                return (<img src={five} alt="" width="50" height="50" />)
            break;
            default:
                return (<img src={zero} alt="" width="50" height="50" />)
            break;
        }
    }

    return (


        <List
            grid={{
                gutter: 32,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 2,
                xxl: 2,
            }}
            dataSource={dataCar[number]}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>
                        <Row style={{display:"flex", justifyContent:"space-around"}}>
                            <Car img={item.image} />
                            <Row gutter={[16, 16]} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Col span={24} style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                                    {item.price} $
                                </Col>
                                <Col span={24} style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                                    <img src={engine} alt="" width="50" height="50" />
                                    {numberImg(item.data.engine)}
                                </Col>
                                <Col span={24} style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                                    <img src={brake} alt="" width="50" height="50" />
                                    {numberImg(item.data.brake)}
                                </Col>
                                <Col span={24} style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                                    <img src={turbo} alt="" width="50" height="50" />
                                    {numberImg(item.data.turbo)}
                                </Col>
                                <Col span={24} style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                                    <img src={trans} alt="" width="50" height="50" />
                                    {numberImg(item.data.trans)}
                                </Col>
                                <Col span={24} style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                                    <img src={susp} alt="" width="50" height="50" />
                                    {numberImg(item.data.susp)}
                                </Col>
                            </Row>
                        </Row>

                    </Card>
                </List.Item>

            )}
        />
    );
};

export default CarList;