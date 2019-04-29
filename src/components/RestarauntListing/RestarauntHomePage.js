import React, { Component } from 'react';
import { Row, Col, List } from 'antd';
import 'antd/dist/antd.css';

export default class RestarauntHomePage extends Component {

  componentDidMount() {
    const { getRestarauntDetails } = this.props;
    const restarauntId = this.props.match.params.id;
    getRestarauntDetails(Number(restarauntId));
  }

  renderMenu = () => {
    const { details } = this.props;
    const dataSource = details[Number(this.props.match.params.id)].menu;
    return (
      <List
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<h4>{item.name}</h4>}
              description="A scrumptious dish"
            />
            <div>
              <span>
                <strong>Price</strong>
                <p>{item.price}</p>
              </span>
            </div>
          </List.Item>
        )}
      />
    )
  }

  render () {
    const { details } = this.props;
    return (
      <div>
        <Row type="flex" justify="start">
          <Col span={3} offset={1}>
            <h2>Menu</h2>
          </Col>
        </Row>
        <Row type="flex" align="middle" justify="center">
          <Col span={20}>
            {
              details && (
                this.renderMenu()
              )
            }
          </Col>
        </Row>
      </div>
    );
  }
}
