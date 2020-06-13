import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
export class Address extends Component {
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
      <Row>
      <Col xs="12" sm="6">
        <Card>
        <Button color="primary" onClick={this.toggle} className="mr-1">Primary modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                  <FormGroup>
              <Label htmlFor="company">Company</Label>
              <Input type="text" id="company" placeholder="Enter your company name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="vat">VAT</Label>
              <Input type="text" id="vat" placeholder="DE1234567890" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="street">Street</Label>
              <Input type="text" id="street" placeholder="Enter street name" />
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="8">
                <FormGroup>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" placeholder="Enter your city" />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="postal-code">Postal Code</Label>
                  <Input type="text" id="postal-code" placeholder="Postal Code" />
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="country">Country</Label>
              <Input type="text" id="country" placeholder="Country name" />
            </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
        </Card>
      </Col>
      <Col xs="12" sm="6">
        <Card>
          <CardHeader>
            <strong>Company</strong>
            <small> Form</small>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label htmlFor="company">Company</Label>
              <Input type="text" id="company" placeholder="Enter your company name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="vat">VAT</Label>
              <Input type="text" id="vat" placeholder="DE1234567890" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="street">Street</Label>
              <Input type="text" id="street" placeholder="Enter street name" />
            </FormGroup>
            <FormGroup row className="my-0">
              <Col xs="8">
                <FormGroup>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" placeholder="Enter your city" />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="postal-code">Postal Code</Label>
                  <Input type="text" id="postal-code" placeholder="Postal Code" />
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="country">Country</Label>
              <Input type="text" id="country" placeholder="Country name" />
            </FormGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
    )
  }
}

export default Address
