import React from "react";
import Form from "./form";

const initialValues = {
  name: "",
  email: "",
  password: "",
  birthday: "",
  gender: "",
};

class SignUpForm extends React.Component {
  state = {
    values: initialValues,
    agreement: false,
    errors: {},
  };

  validate = () => {
    const errors = {};
    const {
      values: { name, email, password, gender, birthday },
    } = this.state;
    if (!name) {
      errors.name = "Please provide your name";
    }
    if (!email) {
      errors.email = "Please provide your email";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }
    if (!birthday) {
      errors.birthday = "Please provide your birthday";
    }
    if (!gender) {
      errors.gender = "Please select your gender";
    }
    return { errors, isValid: Object.keys(errors).length === 0 };
  };

  handleChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAgreement = (event) => {
    this.setState({ agreement: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = this.validate();
    if (isValid) {
      console.log(this.state.values);
      event.target.reset();
      this.setState({ agreement: false, values: initialValues, errors: {} });
    } else {
      console.log(errors);
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div>
        <h1>SignUpForm</h1>
        <Form
          errors={this.state.errors}
          values={this.state.values}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          agreement={this.state.agreement}
          handleAgreement={this.handleAgreement}
        />
      </div>
    );
  }
}

export default SignUpForm;
