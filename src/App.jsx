import React from "react";
// import UnControlledForm from "./forms/uncontrolled";
// import ControlledForm from "./split-form/index";
import SignUpForm from "./signup-form";

class App extends React.Component {
  render() {
    return (
      <div>
        <SignUpForm />
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
