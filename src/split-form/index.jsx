import React from "react";
import propTypes from "prop-types";

const TextInput = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className="form-control"
      type={props.type}
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

TextInput.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.string.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

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
  values: propTypes.object.isRequired,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

class ControlledForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    event.target.reset();
    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "" });
    event.target.reset();
  };

  render() {
    return (
      <div>
        <Form
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        ;
      </div>
    );
  }
}
export default ControlledForm;
