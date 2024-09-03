import React from "react"

class UnControlledForm extends React.Component {
  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    event.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          Name
          <input type="text" name="name" />
          <br />
          Email
          <input type="email" name="email" />
          <br />
          Password
          <input type="password" name="password" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UnControlledForm