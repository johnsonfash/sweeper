import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
import Payment from '../../components/Payment'
// import { isAuthEmail, authenticateUser, isAuthUserType } from '../../services/Auth'
import { Link } from 'react-router-dom';
// import CustomerMap from '../Map/CustomerMap'
import {
  Button,
  Row
} from 'reactstrap';

class Summary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <div className="order_content">
            <div className="bag">
              <p className="bag-head">Review order &nbsp; - 1 item</p>
            </div>
            <div className="summary_inline">
              <div className="summary_type summary_h1">
                Order
              </div>
              <div className="summary_detail">
                <span className="summary_h1">Waste Bag Pickup</span>
                <p className="summary_muted">Order code: SS022592000</p><br />
                <span className="h2">Quantity:</span>
                <span className="h2"> &#10799;1</span>
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="summary_type summary_h1">
                Pickup <span style={{ color: '#20a8d8' }}>@</span>
              </div>
              <div className="summary_detail">
                <span className="h2">John Fash</span>
                <span className="summary_text">House 5A, Block 4B, Jubilee Estate Ikorodu lagos</span>
                <span className="summary_text">Ikorodu, Lagos Nigeria</span><br />
                <span className="h2">+2349036723177</span>
                <span className="hr"></span>
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
            <FormGroup>
              <Label htmlFor="country">Country</Label>
              <Input type="text" id="country" placeholder="Country name" />
            </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal> */}
                <Link to="/account/address"><Button className="mr-1 change_address"><span className="uppercase">change address</span></Button></Link>
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_pay">
              <label htmlFor="toggle" className="toggle_label"> Pay with credit <span style={{ color: '#f0ad4e' }}>Card</span> ▼</label>
              <input type="checkbox" id="toggle" className="toggle" />
              <div className="community_container">
                <Payment info={{ view: 'community', id: 12 }} />
              </div>
            </div>
            <div className="bag-total">
              <div className="subtotal">
                <p className="small">Sub-total:</p>
                <p className="small">₦825.00</p>
              </div>
              <div className="delivery">
                <p className="small">Pickup (Standard - 8 working days):</p>
                <p className="small">Free</p>
              </div>
              <hr />
              <div className="total">
                <h3>Total:</h3>
                <h3>₦825.00</h3>
              </div>
              <button type="submit" form="card_payment_form" className="btn-go-checkout uppercase"> <i className="fa fa-lock"></i> &nbsp; Pay</button>
            </div>
          </div>
        </Row>

      </React.Fragment>
    )
  }
}

export default Summary
