import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
import { Row, Input } from 'reactstrap';
import { Link} from 'react-router-dom';
import bag from '../../assets/garbage_bag.jpg'
// import { isAuthEmail, authenticateUser, isAuthUserType } from '../../services/Auth'


class Order extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
            <div className="order_content">
            <div className="bag">
              <p className="bag-head"><span className="uppercase">Your Bag</span> - 1 item</p>
            </div>
            <div className="bag-product">
              <div className="image">
                <img src={bag} className="product-image" alt="waste bag"/>
              </div>
              <div className="description">
                <p className="muted">Order code: SS022592000</p>
                <span className="invinsible_hr"></span>
                <span className="h1">Waste Bag Pickup</span>
                <p className="blur">Type: Standard plastic bag</p>
                <p className="description-text">Select quantity according to plastic bag in description.</p>
                <p className="blur">Bag size: 0.5m x 0.5m</p>
                <span className="h1">₦825.00</span>
                <div className="quantity-wrapper">
                  <div className="increase_wrapper">
                    <span className="incremento">
                      <button type="button" name="button" className="but"><span role="img" aria-label="minus"> &#10134;</span></button>
                  <label htmlFor="quantity"></label>
                  <Input type="text" id="quantity" maxLength="3" name="location" className="quantity"/>
                      <button type="button" name="button" className="but"><span role="img" aria-label="plus"> &#10133;</span></button>
                    </span>
                  </div>
                  <button className="btn-remove uppercase">&#128465; del</button>
                </div>
              </div>
            </div>
            <div className="bag-total">
              <div className="subtotal">
                <p className="small">Subtotal:</p>
                <p className="small">₦825.00</p>
              </div>
              <div className="delivery">
                <p className="small">Pickup (Standard - 8 working days):</p>
                <p className="small">Free</p>
              </div>
              <hr/>
              <div className="total">
                <h3>Total:</h3>
                <h3>₦825.00</h3>
              </div>
              <Link to="/order/summary"><button className="btn-go-checkout uppercase"> Checkout</button></Link>
            </div>
            </div>
        </Row>

      </React.Fragment>
    )
  }
}

export default Order
