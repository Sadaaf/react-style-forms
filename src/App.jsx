import React from "react";
// import UnControlledForm from "./forms/uncontrolled";
// import ControlledForm from "./split-form/index";
import SignUpForm from "./signup-form";

class App extends React.Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    return (
      <div>
        <SignUpForm 
        createUser={this.createUser} />
        <div>
          <h3>All Registered Users</h3>
          <ul>
            {this.state.users.map((user) => (
              <li>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
        {/* <ControlledForm /> */}
        {/* <h1>This is Uncontrolled form</h1>
        <UnControlledForm />
        <br/>
        <br/>
        <br/>
        <h1>This is controlled form</h1>
        <ControlledForm /> */}
      </div>
    );
  }
}

export default App;
