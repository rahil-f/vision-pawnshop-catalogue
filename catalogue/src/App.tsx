import React, { useState } from 'react';
import { Divider, Layout, Anchor, ConfigProvider  } from 'antd';
import './App.css';
import CarList from './view/CarList';
const { Header, Content, Footer } = Layout;

function App() {
  const [black, setBlack] = useState<"light" | "dark">("light");

  const colorSheme = black === "light" ? {
    colorPrimary: 'white',
    colorBgBase: 'white',
    colorTextBase: 'black',
    fontFamily: 'Roboto',
    fontSize: 20
  } : {
    colorPrimary: '#121212',
    colorBgBase: '#121212',
    colorTextBase: 'white',
    colorBorder: '#627D98',
    colorBorderSecondary: '#627D98',
    fontFamily: 'Roboto',
    fontSize: 20
  }

  return (
    <ConfigProvider
      theme={{
        token: colorSheme,
      }}
    >
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '100px',
            color: 'white',
            backgroundColor: '#FFD700'
          }}
        >
          <div className="demo-logo" style={{ paddingTop:'25px', paddingRight: '50px' }}>
            <img src="https://media.discordapp.net/attachments/1010379680391643187/1120755340431085568/PAWN_SHOP.png" alt="" width="60" height="60" />
          </div>
          <Anchor
          style={{ color: 'white'}}
          direction="horizontal"
          items={[
            {
              key: 'compact',
              href: '#compact',
              title: 'Compact',
            },
            {
              key: 'sedans',
              href: '#sedans',
              title: 'Sedans',
            },
            {
              key: 'sport',
              href: '#sport',
              title: 'Sport',
            },
            {
              key: 'sport-classic',
              href: '#sport-classic',
              title: 'Sport Classic',
            },
            {
              key: 'moto',
              href: '#moto',
              title: 'Moto',
            },
            {
              key: 'muscles',
              href: '#muscles',
              title: 'Muscles',
            },
            {
              key: 'tout-terrain',
              href: '#tout-terrain',
              title: 'Tout Terrain',
            },
            {
              key: 'SUV',
              href: '#SUV',
              title: 'SUV',
            },
            {
              key: 'van',
              href: '#van',
              title: 'Van',
            },
            {
              key: 'bateau',
              href: '#bateau',
              title: 'Bateau',
            },
            {
              key: 'aerien',
              href: '#aerien',
              title: 'Aerien',
            },
          ]}
        />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
          <Divider id="compact">Compact</Divider>
          <CarList number={0}/>
          <Divider id="sedans">Sedans</Divider>
          <CarList number={1}/>
          <Divider id="sport">Sport</Divider>
          <CarList number={2}/>
          <Divider id="sport-classic">Sport Classic</Divider>
          <CarList number={3}/>
          <Divider id="moto">Moto</Divider>
          <CarList number={4}/>
          <Divider id="muscles">Muscles</Divider>
          <CarList number={5}/>
          <Divider id="tout-terrain">Tout Terrain</Divider>
          <CarList number={6}/>
          <Divider id="SUV">SUV</Divider>
          <CarList number={7}/>
          <Divider id="van">Van</Divider>
          <CarList number={8}/>
          <Divider id="bateau">Bateau</Divider>
          <CarList number={9}/>
          <Divider id="aerien">Aerien</Divider>
          <CarList number={10}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Pawnshop catalogue ©2023 Created by rahil-f/Pr3stor</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
