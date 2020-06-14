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
            <div className="profile_avatar">
              <p className="bag-head">Review order &nbsp; - 1 item</p>
            </div>
            <div className="summary_inline">
              <div className="account_icon" >
              <span role="img" aria-label="name">&#127915;</span>
              </div>
              <div className="account_detail">
                <span className="h2">Name</span><br /><br />
                <Input type="text" id="email_signIn" value="John Fash" onChange={this.handleChange} placeholder="Username" autoComplete="username" />
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="account_icon">
              <span role="img" aria-label="name">&#9873;</span>
              </div>
              <div className="account_detail">
                <span className="h2">Address</span>
                <span className="summary_text">House 5A, Block 4B, Jubilee Estate Ikorodu, Lagos Nigeria</span><br />
                <span className="h2"><span role="img" aria-label="name">&#9742;</span> +2349036723177</span>
                <span className="hr"></span>
                <Link to="/account/address"><Button className="mr-1 change_address"><span className="uppercase">change</span></Button></Link>
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="account_icon">
              <span role="img" aria-label="name">&#9993;</span>
              </div>
              <div className="account_detail">
                <span className="h2">Email</span>
                <span className="summary_text">fashanutosin7@gmail.com</span>
                <span className="hr"></span>
                <Button className="mr-1"><span className="uppercase">change password</span></Button>
              </div>
            </div>
            <span className="hr"></span>
            <div className="summary_inline">
              <div className="account_icon">
              <span role="img" aria-label="name">&#9892;</span>
              </div>
              <div className="account_detail">
                <div className="personal_wrapper">
                  <div className="personal_one">
                    <span className="h2">Gender</span><br /><br />
                      <Input type="select">
                        <option>👨 &nbsp; Male</option>
                        <option>👩 &nbsp; Female</option>
                      </Input>
                  </div>
                  <span style={{width:'5%'}}></span>
                  <div className="personal_two">
                    <span className="h2">Birthday</span><br /><br />
                    <Input type="date" onChange={this.handleChange} placeholder="date" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" form="card_payment_form" className="btn-go-checkout uppercase"> 🖫 &nbsp; SAVE</button>
          </div>
        </Row>

      </React.Fragment>
    )
  }
}

export default Account
