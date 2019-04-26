import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Header extends React.Component {
 render () {
   return (
    <Link to='/'>
      <Row type='flex' justify='center' align="middle">
        <Col>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ height: 50 }}
          />
        </Col>
        <Col>
          <h3>Restaraunt App</h3>
        </Col>
        <Col>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ height: 50 }}
          />
        </Col>
      </Row>
    </Link>
   );
 }
}
