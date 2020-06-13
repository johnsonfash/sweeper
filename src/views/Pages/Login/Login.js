import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Offline, Online } from "react-detect-offline";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchUserData } from '../../../store/actions/user'
import { isAuthEmail, authenticateUser, isAuthUserType } from '../../../services/Auth'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';






class Login extends Component {
  constructor(props) {
		super(props)
		this.state = {
			email_signIn: '',
			password_signIn: '',
			keep_signIn: false,
			username_signUp: '',
			password_signUp: '',
			password_repeat: '',
			email_signUp: '',
			loading: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleChange(e) {
		this.setState(
			{
				[e.target.id]: e.target.value
			}
		)
	}


	handleSubmit(e) {
		e.preventDefault()
    let { fetchData } = this.props
		fetchData(this.state.email_signIn)
		this.setState({
			email_signIn: '',
			password_signIn: '',
			keep_signIn: false,
			username_signUp: '',
			password_signUp: '',
			password_repeat: '',
			email_signUp: '',
			loading: true
		})
	}

	componentDidUpdate(prevProps) {
    let { userData } = this.props.userData
		if (this.props !== prevProps) {
			if (isAuthEmail() && isAuthUserType()) {
				this.props.history.push('/order')
			} else {
				if (userData.email !== '' && userData.errorMessage === '') {
					authenticateUser(userData.email, userData.email)
					this.props.history.push('/order')
				}
			}
		}
  }
  

  render() {
    let u = '';
		let f = '';
    let { email_signIn, password_signIn } = this.state
    let { loading, error, errorMessage, userData } = this.props.userData
    error === 'true' && errorMessage !== ''  ? (f = errorMessage) :
    ( userData.errorMessage !== '' ? (f = userData.errorMessage) : (f = '')    )
		loading === 'done' ? (u = 'Login') :
      (loading === 'true' ? (u = <div id="loader"></div>) : (u = 'Login'))
      
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>

                      <span className="error">{f}</span>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="email_signIn" value={email_signIn} onChange={this.handleChange} placeholder="Username" autoComplete="username" required/>
                      </InputGroup>

                      <span className="error">{f}</span>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="password_signIn" value={password_signIn} onChange={this.handleChange} placeholder="Password" autoComplete="current-password" required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" style={{width:'8em'}}>{u}</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		userData: state.userData
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (name) => dispatch(fetchUserData(name))
	}
}

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(Login)