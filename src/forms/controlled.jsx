import React from "react";

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

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleForm}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ControlledForm;
