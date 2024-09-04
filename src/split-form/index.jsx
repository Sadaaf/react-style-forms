import React from "react";
import Form from "./form";

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
          handleForm={this.handleSubmit}
        />
        ;
      </div>
    );
  }
}
export default ControlledForm;
