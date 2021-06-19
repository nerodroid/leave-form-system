import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';
import DatePicker from 'react-date-picker';



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
      
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
      empId: this.state.empId,
      



      // handle: this.state.handle,
      // company: this.state.company,
      // website: this.state.website,
      // location: this.state.location,
      // status: this.state.status,
      // skills: this.state.skills,
      // githubusername: this.state.githubusername,
      // bio: this.state.bio,
      // twitter: this.state.twitter,
      // facebook: this.state.facebook,
      // linkedin: this.state.linkedin,
      // youtube: this.state.youtube,
      // instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }


  handleChange(date) {
    console.log(date)
    this.setState({
      startDate: date
    })
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      // socialInputs = (
      //   <div>
      //     <InputGroup
      //       placeholder="Twitter Profile URL"
      //       name="twitter"
      //       icon="fab fa-twitter"
      //       value={this.state.twitter}
      //       onChange={this.onChange}
      //       error={errors.twitter}
      //     />

      //     <InputGroup
      //       placeholder="Facebook Page URL"
      //       name="facebook"
      //       icon="fab fa-facebook"
      //       value={this.state.facebook}
      //       onChange={this.onChange}
      //       error={errors.facebook}
      //     />

      //     <InputGroup
      //       placeholder="Linkedin Profile URL"
      //       name="linkedin"
      //       icon="fab fa-linkedin"
      //       value={this.state.linkedin}
      //       onChange={this.onChange}
      //       error={errors.linkedin}
      //     />

      //     <InputGroup
      //       placeholder="YouTube Channel URL"
      //       name="youtube"
      //       icon="fab fa-youtube"
      //       value={this.state.youtube}
      //       onChange={this.onChange}
      //       error={errors.youtube}
      //     />

      //     <InputGroup
      //       placeholder="Instagram Page URL"
      //       name="instagram"
      //       icon="fab fa-instagram"
      //       value={this.state.instagram}
      //       onChange={this.onChange}
      //       error={errors.instagram}
      //     />
      //   </div>
      // );
    }

    // Select options for status
    const facultyOptions = [
      { label: 'Science', value: 'science' },
      { label: 'Management', value: 'management' },
     
    ];

    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
     
    ];

    return (
        <div class="card bg-light text-dark">
      <div class="card-body">
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Complete Your Profile</h1>
              <p className="lead text-center">
                Fill these fields 
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  placeholder="* firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                  info="First Name"
                />

                <TextFieldGroup
                  placeholder="* lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                  info="Last Name"
                />

                <TextFieldGroup
                  placeholder="* fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                  error={errors.fullName}
                  info="Full Name"
                />


                 <TextFieldGroup
                  placeholder="* Employee ID"
                  name="empId"
                  value={this.state.empId}
                  onChange={this.onChange}
                  error={errors.empId}
                  info="empId"
                />

                {/* <TextFieldGroup
                  placeholder="* faculty"
                  name="faculty"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.faculty}
                  info="Choose your faculty"
                /> */}

                <SelectListGroup
                  placeholder="Select Faculty"
                  name="faculty"
                  value={this.state.faculty}
                  onChange={this.onChange}
                  options={facultyOptions}
                  error={errors.faculty}
                  info="Choose your faculty"
                />


                

                <TextFieldGroup
                  placeholder="* phoneNo"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.onChange}
                  error={errors.phoneNo}
                  info="Phone Number"
                />

                {/* <TextFieldGroup
                  placeholder="* gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  error={errors.gender}
                  info="gender"
                /> */}


                <SelectListGroup
                  placeholder="Select Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                  error={errors.gender}
                  info="Choose your Gender"
                />

                <TextFieldGroup
                  placeholder="* address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                  info="Address"
                />

                {/* <TextFieldGroup
                  placeholder="* dob"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.onChange}
                  error={errors.dob}
                  info="Date of Birth"
                /> */}

                  <div> 
                     <div 
                        className="form-text text-muted">Date of Birth
                     </div>
                      <DatePicker className="form-text text-muted"
                        onChange={this.handleChange}
                        value={this.state.dob}  />
                  </div>
    

                {/* <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Give us an idea of where you are at in your career"
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Could be your own company or one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                /> */}

                {/* <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs} */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
