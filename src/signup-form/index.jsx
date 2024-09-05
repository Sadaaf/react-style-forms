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
    console.log(this.state.values);
    event.target.reset();
    this.setState({ agreement: false, values: initialValues });
  };

  render() {
    return (
      <div>
        <h1>SignUpForm</h1>
        <Form
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
