import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

import { Col, Row } from "react-bootstrap";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

   
    return (
      <div >
            

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">First Name  :</h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.firstName}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Last Name  :</h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.lastName}</h6>
            </Col>
            </Row>



            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Full Name  :</h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.fullName}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Email  : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.email}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Employee Type  : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.userType}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Faculty  :</h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.faculty}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Employee Id  : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.empID}</h6>
            </Col>
            </Row>

            
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Phone Number   : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.phoneNo}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Gender   : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.gender}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Address  : </h6>
            </Col>
            <Col sm={6} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6>{profile.address}</h6>
            </Col>
            </Row>
        
            
            
           
          </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
