import React from 'react'
import creditcard from '../../assets/creditcard.png'
import date from '../../assets/date.png'
import coin from '../../assets/coins.png'
import locked from '../../assets/locked.png'

import {
  Input
} from 'reactstrap';


class Payment extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      card_number: '',
      no_space_card_number: '',
      expiry_date: '',
      amount: '',
      amount_without_comma: '',
      cvs: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    let val = e.target.value.replace(/\D/g, '');
    switch (e.target.id) {
      case 'card_number':
        let addSpace = val.replace(/(.{4})/g, '$1 ').trim();
        let noSpace = addSpace.replace(/ /g, '');
        this.setState(
          {
            card_number: addSpace,
            no_space_card_number: noSpace
          }
        )
        break;
      case 'expiry_date':
        let slashed = val.replace(/(.{2})/, '$1/').trim();
        this.setState(
          {
            expiry_date: slashed,
          }
        )
        break;
      case 'amount':
        let comma = val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.setState(
          {
            amount: comma,
            amount_without_comma: val
          }
        )
        break;
      default:
        this.setState(
          {
            [e.target.id]: val
          }
        )
        break;
    }
  }


  render() {
    // let info = this.props.info;
    let { card_number, expiry_date, cvs, amount} = this.state
    return (
      <React.Fragment>
        <form className="" action="" method="post" id="card_payment_form">
          <div className="payment_form">
            <div className="cardNumber">
              <label htmlFor="card_number">Card Number</label><br />
              <span className="icon"> <img src={creditcard} alt="" /> </span>
              <Input id="card_number" className="input" type="text" name="" value={card_number} pattern="[\d ]*" onChange={this.handleChange} maxLength="24" placeholder=" 0000 - 0000 - 0000 - 0000" required />
            </div>
            <div className="inlineElement">
              <div className="exp">
                <label htmlFor="expiry_date">Expire</label><br />
                <span className="icon"><img src={date} alt="" /> </span>
                <Input id="expiry_date" className="expiry" type="text" name="" value={expiry_date} pattern="[\d/]*" onChange={this.handleChange} maxLength="5" placeholder=" 00/00" required />
              </div>
              <div className="cvs">
                <label htmlFor="cvs">CVC</label><br />
                <span className="icon"><img src={locked} alt="" /> </span>
                <Input id="cvs" className="cv" type="text" name="" value={cvs} pattern="[\d]*" onChange={this.handleChange} maxLength="3" placeholder="000" required />
              </div>
            </div>
            <div className="amountElement">
              <label htmlFor="amount"> Amount (₦) </label><br/>
              <span className="icon"><img src={coin} alt="" /> </span>
              <Input id="amount" className="input" type="text" name="" value={amount} pattern="[\d,]*" onChange={this.handleChange} maxLength="20" placeholder="min. ₦200" required />
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Payment
