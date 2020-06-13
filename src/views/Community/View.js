import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Row, Progress } from 'reactstrap';
import { sendCommunityData } from '../../store/actions/community'
import Payment from '../../components/Payment'
import { isAuthUserType } from '../../services/Auth'
import { Link } from 'react-router-dom'
import Page404 from '../../views/Pages/Page404'


class View extends Component {
  constructor(props) {
    super(props)

    this.deleting = this.deleting.bind(this)
  }

  componentDidMount() {
    let id = this.props.match.params.id * 1;
    let { sendData, communityData } = this.props
    if (!isNaN(id)) {
      if (communityData.communityData.length === 0) {
        sendData(id, 'get');
      }
    }
  }

  deleting(id) {
    let formData = new FormData();
    formData.append('type', 'delete');
    formData.append('id', id);
    this.props.sendData(formData,'post');
    this.props.history.push('/community')
  }



  render() {
    let id = this.props.match.params.id * 1;
    let { loading, error, errorMessage, communityData } = this.props.communityData
    let u;
    let button;
    switch (isAuthUserType()){
      case 'customer':
        button = (id) => { return ( <span className="container"><div className="payment_h2">Card Payment</div>
         <Payment info={{view:'community',id}} />  <div className="btn_view">
            <button type="submit" name="button" form="card_payment_form" className="btn_donate btn delete">Donate</button>
          </div>
         </span> )};
        break;
      case 'admin':
        button = (id) => { return(<div className="btn_view">
        <button className="delete btn" onClick={ () => this.deleting(id) }>Delete</button>
        <Link to={'/community/edit/'+ id}><button className="edit btn">Edit</button></Link>
        </div>)};
        break;
      default:
        button = (id) => { return (null) };
    }

    if (isNaN(id)) {
      u = <Page404/>;
    } else {
      if (loading === 'done') {
        if (communityData.error.error === "false") {
          let data = [communityData.data.find(comm => comm.id === id)];
          u =   <React.Fragment>
                  {data && data.map(comm => {
                    let eachPara = comm.details.split(/[\r\n]+/);
                    let allDetails = eachPara && eachPara.map( (eachOne, index) => <p key={index}> {eachOne} </p>)
                    return (
                      <Row key={comm.id}>
                        <div className="community_container containerFull">
                          <div className="image">
                            <img src={comm.file_name} alt="" />
                          </div>
                          <div className="title_big">
                            {comm.location}
                          </div>
                          <hr className="hr" />
                          <div className="details">
                            <div className="detail">
                              <div className="published">
                                Date Pubished
                              </div>
                              <div className="date">
                                24, July 2020
                              </div>
                            </div>
                            <div className="detail">
                              <div className="amount"> <span>Fund:</span> ₦ {comm.amount}</div>
                              <Progress color="red" value="25" className="mb-3">25%</Progress>
                            </div>
                          </div>
                          <div className="text">
                            {allDetails}
                          </div>
                          {button(comm.id)}
                        </div>
                      </Row>
                    )
                  })}
                </React.Fragment>
              
        } else {
          u = <Page404/>;
        }
      } else {
        u = <div className="loader_con"><div id="big_loader"></div></div>;
      }
    }
    error === 'true' && errorMessage !== '' ? (u = errorMessage) : (console.log(""))

    return (
      <React.Fragment>

          {u}

      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    communityData: state.communityData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: (data, type) => dispatch(sendCommunityData(data, type))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(View)