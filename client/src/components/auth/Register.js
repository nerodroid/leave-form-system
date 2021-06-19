


import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    width: "150px",
    float: "right",
  },
  label: {
    margin: theme.spacing(2, 2, 2),
    width: "30%",
  },
  textField: {
    width: "95%",
    margin: theme.spacing(3, 1.5, 3),
  },
}));

const Register = (props) => {
  const [values, setValues] = useState({
    name: "",
    emil:"",
    password: "",
    password2: "",
    userType: "Vice Chancellor",

  });
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const { errors } = props;
  const classes = useStyles();

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/login");
    }
    // if (nextProps.errors) {
    //   this.setState({ errors: nextProps.errors });
    // }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.registerUser(values, props.history);
  };

  const options = [
     
          { label: 'Dean', value: 'dean' },
          { label: 'A R', value: 'a-r' },
          { label: 'Academic', value: 'academic' },
          { label: 'Non-Academic', value: 'non-academic' },
          
        ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} method="POST" noValidate onSubmit={onSubmit} >
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
            </Grid>

            <Select onChange={handleChange} name="userType" value={values.userType}>
              <MenuItem value="Vice Chancellor">Vice Chancellor</MenuItem>
              <MenuItem value="Assistant Registrat">
                Assistant Registrat
              </MenuItem>
              <MenuItem value="Dean">Dean</MenuItem>
              <MenuItem value="Bursar">Bursar</MenuItem>
              <MenuItem value="Academic Staff">Academic Staff</MenuItem>
              <MenuItem value="Non-Academic Staff">Non-Academic Staff</MenuItem>
              <MenuItem value="Academic Support">Academic Support</MenuItem>
              <MenuItem value="On-Contract Staff">On-Contract Staff</MenuItem>
            </Select>


            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
            </Grid>
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={values.password2}
                  onChange={handleChange}
                  error={errors.password2}
                />
            </Grid>
          </Grid>
          

          
              <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    size="small">
                      Sign Up
              </Button>
          
          <Grid container justify="flex-end">
            <Grid item>
                Already have an account? Log in
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
