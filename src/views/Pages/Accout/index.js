import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
// import { isAuthEmail, authenticateUser, isAuthUserType } from '../../../services/Auth'
import { Link } from 'react-router-dom';
// import CustomerMap from '../../Map/CustomerMap'
import {
  Button,
  Input,
  Row
} from 'reactstrap';

class Account extends Component {

  render() {
    return (
      <React.Fragment>
        <Row>
          <div className="order_content">
            <div className="bag">
              <p className="bag-head">Review order &nbsp; - 1 item</p>
            </div>
            <div className="summary_inline">
              <div className="account_icon">
                <i className="fa fa-user"></i>
              </div>
              <div className="account_detail">
                <span className="h2">Name</span><br /><br />
                <Input type="text" id="email_signIn" value="John Fash" onChange={this.handleChange} placeholder="Username" autoComplete="username" />
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="account_icon">
                <i className="fa fa-user"></i>
              </div>
              <div className="account_detail">
                <span className="h2">Address</span>
                <span className="summary_text">House 5A, Block 4B, Jubilee Estate Ikorodu, Lagos Nigeria</span><br />
                <span className="h2">+2349036723177</span>
                <span className="hr"></span>
                <Link to="/account/address"><Button className="mr-1 change_address"><span className="uppercase">change</span></Button></Link>
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="account_icon">
                <i className="fa fa-user"></i>
              </div>
              <div className="account_detail">
                <span className="h2">Email</span>
                <span className="summary_text">fashanutosin7@gmail.com</span>
                <span className="hr"></span>
                <Button className="mr-1"><span className="uppercase">change password</span></Button>
              </div>
            </div>
            <span className="hr"></span>
            <button type="submit" form="card_payment_form" className="btn-go-checkout uppercase"> <i className="fa fa-lock"></i> &nbsp; SAVE</button>
          </div>
        </Row>

      </React.Fragment>
    )
  }
}

export default Account
