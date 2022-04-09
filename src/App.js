import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// import LinkedinOutlined from '@ant-design/icons'

import {Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          Created by - Ritik Kumar<br/>
          Connect Me... <br/>
          <Space>
            <a href='https://www.linkedin.com/in/ritik-kumar-3039091ba/' target= '_blank'>Linkedin</a>
            <a href='https://www.instagram.com/__ritik_srivastav/?hl=en' target= '_blank'>Instagram</a>
            <a href='https://github.com/Ritikkumar992' target= '_blank'>github</a>
          </Space>
          <br/>
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
        
      </div>
    </div>
  </div>
);

export default App;
