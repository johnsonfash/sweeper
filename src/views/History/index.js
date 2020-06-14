import React, { Component } from 'react'
import { Row } from 'reactstrap';

class History extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
        <div className="history">
          <div className="timeline">
            <div className="history_box">
              <div className="history_date">
                <span className="month">25 Feb</span>
                <span className="hour">09:00 am</span>
              </div>
              <div className="activity">
                <div className="title">
                  Ordered for waste disposal
            </div>
                <div className="description">
                  Quantity: 2 bag(s).
            </div>
                <div className="update">
                  <span className="confirmed" role="img" aria-label="confirmed">&#9989; &nbsp; CONFIRMED</span>
                </div>
              </div>
            </div>

            <div className="history_box">
              <div className="history_date">
                <span className="month">25 Feb</span>
                <span className="hour">09:00 am</span>
              </div>
              <div className="activity">
                <div className="title">
                  Ordered for waste disposal
            </div>
                <div className="description">
                  Quantity: 1 bag(s).
            </div>
                <div className="update">
                  <span className="pending"> &#9685; &nbsp; PENDING PICKUP</span>
                </div>
              </div>
            </div>

            <div className="history_box">
              <div className="history_date">
                <span className="month">25 Feb</span>
                <span className="hour">09:00 am</span>
              </div>
              <div className="activity">
                <div className="title">
                  Ordered for waste disposal
            </div>
                <div className="description">
                  Quantity: 6 bag(s).
            </div>
                <div className="update">
                  <span className="cancelled">CANCELLED</span>
                </div>
              </div>
            </div>

            <div className="history_box">
              <div className="history_date">
                <span className="month">25 Feb</span>
                <span className="hour">09:00 am</span>
              </div>
              <div className="activity">
                <div className="title">
                  Ordered for waste disposal
            </div>
                <div className="description">
                  Quantity: 1 bag(s).
            </div>
                <div className="update">
                  <span className="pending"> &#9685; &nbsp; PENDING PICKUP</span>
                </div>
              </div>
            </div>

            <div className="history_box">
              <div className="history_date">
                <span className="month">25 Feb</span>
                <span className="hour">09:00 am</span>
              </div>
              <div className="activity">
                <div className="title">
                  Ordered for waste disposal
            </div>
                <div className="description">
                  Quantity: 2 bag(s).
            </div>
                <div className="update">
                  <span className="confirmed" role="img" aria-label="confirmed">&#9989; &nbsp; CONFIRMED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Row>
      </React.Fragment>
    )
  }
}

export default History
