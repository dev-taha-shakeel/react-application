import React, { Component } from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class RestarauntListingPage extends Component {

  componentDidMount() {
    const { getRestarauntsList, restaraunts } = this.props;
    // Not in cache fetch from mocks
    if (!restaraunts) {
      getRestarauntsList();
    }
  }

  updateRestarauntRating = (rating, id) => {
    const { updateRestaraunt, restaraunts } = this.props;
    let listOfRestaraunt = restaraunts.slice();
    listOfRestaraunt[id].rating = rating;
    updateRestaraunt(listOfRestaraunt);
  }

  updateFavouriteRestraunt = (id) => {
    const { updateRestaraunt, restaraunts } = this.props;
    let listOfRestaraunt = restaraunts.slice();
    console.log('favorite', !listOfRestaraunt[id].favourite);
    listOfRestaraunt[id].favourite = !listOfRestaraunt[id].favourite;
    updateRestaraunt(listOfRestaraunt);
  }

  redirectToHomePage = (index) => {
    this.props.history.push('details/' + index);
  }

  renderCoverImageWithRating = (imgSrc, defaultRate, id, favourite) => {
    // To-do: Refactor Rating component into a standalone component for resuability
    return (
      <div>
        <Row
          type="flex"
          align="middle"
          style={{ position: 'absolute', width: '100%' }}
        >
          <Col span={20}>
            <Rate
              defaultValue={defaultRate}
              onChange={(value) => this.updateRestarauntRating(value, id)}
            />
          </Col>
          <Col span={4}>
            {
              favourite ?
              <Icon
                type="heart"
                theme="filled"
                style={{ fontSize: 20, color: '#f00' }}
                onClick={() => this.updateFavouriteRestraunt(id)}
              />
              :
              <Icon
                type="heart"
                style={{ fontSize: 20, color: '#f00' }}
                onClick={() => this.updateFavouriteRestraunt(id)}
              />
            }
          </Col>
        </Row>
        <img alt="logo" src={imgSrc} style={{ height: 250 }}/>
      </div>
    );
  }

  renderCards = () => {
    return this.props.restaraunts.map((restaraunt, index) => {
      return (
        <Col className="gutter-row" span={6}>
          <Card
            id={index}
            key={restaraunt.id}
            title={restaraunt.name}
            className="gutter-row"
            cover={
              this.renderCoverImageWithRating(
                restaraunt.logo,
                restaraunt.rating,
                index,
                restaraunt.favourite,
            )}
            bordered={false}
            style={{ width: 300 }}
            onClick={() => this.redirectToHomePage(index)}
          >
            <div>
              <span>
                <strong>
                  Minimum Charge: 
                </strong>
                <p>
                  {restaraunt.minimumOrder}
                </p>
              </span>
            </div>
            <div>
              <span>
                <strong>
                  Delivery Charge: 
                </strong>
                <p>
                  {restaraunt.deliveryCharges}
                </p>
              </span>
            </div>
          </Card>
        </Col>
      )
    });
  }

  render () {
    const {
      restaraunts,
    } = this.props;
   return (
     <Row>
      <Col offset={1}><h2>Listing</h2></Col>
        <Row type='flex' gutter={16} justify="space-around">
        {
          restaraunts && (
            this.renderCards()
          )
        }
        </Row>
     </Row>
   );
 }
}
