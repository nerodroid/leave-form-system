import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends Component {
  render() {
    return (
     
        <div>
        <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Applicant Name:</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.applicantName}</h6> */}
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Applicant Type :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.applicantUserType}</h6> */}
            </Col>
            </Row>



            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Reason :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.reason}</h6> */}
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Name of Actor :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.nameOfActor}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">actor email : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.actorEmail}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">leave type : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.leaveType}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">HOD Approval : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.isHODApproved.toString()}</h6> */}
            </Col>
            </Row>
        
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Dean Approval : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.isDeanApproved.toString()}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">AR Approval : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.isARApproved.toString()}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Location to : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.location}</h6> */}
            </Col>
            </Row>
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Duration : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.duration}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Institute : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.institute}</h6> */}
            </Col>
            </Row>
        </div>
   
    );
  }
}

export default class example extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <button style={{"backgroundColor": "#546e7a", "padding":"5px", "borderRadius":"3px","width":"100px",  "margin":"10px" }}>Print</button>;
          }}
          content={() => this.componentRef}
          copyStyles
          pageStyle={false}
        />
        <ComponentToPrint ref={(e1) => (this.componentRef = e1)} />
      </div>
    );
  }
}