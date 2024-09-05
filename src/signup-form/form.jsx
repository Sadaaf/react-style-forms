import React from "react";
import TextInput from "./text-input";
import RadioInput from "./radio";
import PropTypes from "prop-types";

const Form = ({
  values,
  handleChange,
  handleSubmit,
  agreement,
  handleAgreement,
}) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      name="name"
      label="name"
      placeholder="Enter Your Name"
      value={values.name}
      onChange={handleChange}
    />
    <TextInput
      name="email"
      type="email"
      label="email"
      placeholder="Enter Your Email"
      value={values.email}
      onChange={handleChange}
    />
    <TextInput
      name="password"
      type="password"
      label="password"
      placeholder="Enter Your Password"
      value={values.password}
      onChange={handleChange}
    />
    <TextInput
      name="birthday"
      type="date"
      label="birthday"
      placeholder="Please enter your Birthday"
      value={values.birthday}
      onChange={handleChange}
    />
    <RadioInput value="male" onChange={handleChange} />
    <RadioInput value="female" onChange={handleChange} />
    <RadioInput value="other" onChange={handleChange} />
    <label>
      <input
        type="checkbox"
        name="agreement"
        checked={agreement}
        onChange={handleAgreement}
      />
      I agree
    </label>
    <button className="btn btn-primary" type="submit" disabled={!agreement}>
      Submit
    </button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
};

export default Form;
