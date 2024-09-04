import React from "react";
import TextInput from "./text-input";
import PropTypes from "prop-types";

const Form = (props) => (
  <form onSubmit={props.handleForm}>
    Name
    <TextInput
      name="name"
      label="Enter Name"
      placeholder="Sadaf Al Arabi"
      value={props.values.name}
      onChange={props.handleChange}
    />
    <br />
    Email
    <TextInput
      type="email"
      name="email"
      label="Enter Email"
      placeholder="sadaf@gmail.com"
      value={props.values.email}
      onChange={props.handleChange}
    />
    <br />
    Password
    <TextInput
      type="password"
      name="password"
      label="Enter Password"
      placeholder="*****"
      value={props.values.password}
      onChange={props.handleChange}
    />
    <br />
    <button>Submit</button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
