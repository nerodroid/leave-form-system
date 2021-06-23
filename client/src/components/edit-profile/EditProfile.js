import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';
import DatePicker from 'react-date-picker';
import { Col, Row } from "react-bootstrap";


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,

      firstName: '',
      lastName: '',
      fullName: '',
      faculty: '',
      gender: '',
      address: '',
      phoneNo:'',
      empId:'',
      dob:  new Date(),
      // handle: '',
      // company: '',
      // website: '',
      // location: '',
      // status: '',
      // skills: '',
      // githubusername: '',
      // bio: '',
      // twitter: '',
      // facebook: '',
      // linkedin: '',
      // youtube: '',
      // instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }



  handleChange(date) {
    console.log(date)
    this.setState({
      startDate: date
    })
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      //const skillsCSV = profile.skills.join(',');
      console.log( !isEmpty(profile.firstName));
      // If profile field doesnt exist, make empty string
      profile.firstName = !isEmpty(profile.firstName) ? profile.firstName : '';
      profile.lastName = !isEmpty(profile.lastName) ? profile.lastName : '';
      profile.fullName = !isEmpty(profile.fullName) ? profile.fullName : '';
      profile.faculty = !isEmpty(profile.faculty)? profile.faculty: '';
      profile.phoneNo = !isEmpty(profile.phoneNo) ? profile.phoneNo : '';
      profile.gender = !isEmpty(profile.gender) ? profile.gender :'';
      profile.address = !isEmpty(profile.address) ? profile.address: '';
      profile.dob = !isEmpty(profile.dob) ? profile.dob :'';  
      profile.empId = !isEmpty(profile.empId) ? profile.empId :'';  


      
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        fullName: profile.fullName,
        faculty: profile.faculty,
        phoneNo: profile.phoneNo,
        gender: profile.gender,
        address: profile.address,
        dob: profile.dob,
        empId:profile.empId,


       
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.fullName,
      faculty: this.state.faculty,
      phoneNo: this.state.phoneNo,
      gender: this.state.gender,
      address: this.state.address,
      dob: this.state.dob,
      empId:this.state.empId,


    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
     
    }

    

    const facultyOptions = [
      { label: 'Science', value: 'science' },
      { label: 'Management', value: 'management' },
     
    ];

    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
     
    ];

    return (
      <div className="container" class="w-75 p-3" style={{  margin:'auto'}}>
      <Link to="/dashboard" className="btn btn-light">
          Go Back
      </Link>
      <br/>  <br/>
      <div className="card bg-light mb-3 text-dark">
      <div className="card-body">
              <h2 className="text-center"><i>Edit Profile</i></h2><hr/>
              <small className="d-block pb-3 text-danger">* = required fields</small>
              <form onSubmit={this.onSubmit}>
              <Row>
              <Col md="6">
                <TextFieldGroup
                    placeholder="* firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    error={errors.firstName}
                    info="First Name"
                  />
            </Col>
            <Col md="6">
                <TextFieldGroup
                  placeholder="* lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                  info="Last Name"
                />
          </Col>
          </Row>

          <Row>
          <Col md="6">
                <TextFieldGroup
                  placeholder="* fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                  error={errors.fullName}
                  info="Full Name"
                />
            </Col>
            <Col md="6">
                <TextFieldGroup
                  placeholder="* Employee ID"
                  name="empId"
                  value={this.state.empId}
                  onChange={this.onChange}
                  error={errors.empId}
                  info="empId"
                />
            </Col>
            </Row>

               
          <Row>
          <Col md="4">

                <SelectListGroup
                  placeholder="Select Faculty"
                  name="faculty"
                  value={this.state.faculty}
                  onChange={this.onChange}
                  options={facultyOptions}
                  error={errors.faculty}
                  info="Choose your faculty"
                />
          </Col>
          <Col md="4">
                <TextFieldGroup
                  placeholder="* phoneNo"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.onChange}
                  error={errors.phoneNo}
                  info="Phone Number"
                />
        
          </Col>
          <Col md="4">
                <SelectListGroup
                  placeholder="Select Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                  error={errors.gender}
                  info="Choose your Gender"
                />
                
          </Col>
          </Row>

          <Row>
          <Col md="8">
                <TextFieldGroup
                  placeholder="* address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                  info="Address"
                />
          </Col>
          </Row>
               


                  <div> 
                     <div className="form-text text-muted">Date of Birth
                     </div>
                      <DatePicker className="form-text text-muted"
                        onChange={this.handleChange}
                        value={this.state.dob}  />
                  </div> 





                <Row>
              <Col md="2"></Col>
                <Col md="8">
              
                  <input
                    type="submit"
                    value="Submit"
                    className="text-center btn btn-info btn-block mt-4"
                  />
                
                </Col>
                <Col md="2"></Col>
                </Row>
              </form>
            </div>
      
        </div>
        
        </div>
    
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
