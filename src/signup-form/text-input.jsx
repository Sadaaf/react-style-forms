import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => (
  <div>
    <label htmlFor={props.name} className="form-group">
      {props.label}
    </label>
    <input
      className={props.error ? "form-control is-invalid" : "form-control"}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      id={props.name}
      placeholder={props.placeholder}
    />
    {props.error && <div className="invalid-feedback">{props.error}</div>}
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  placeholder: "",
  label: "",
  type: "text",
};

export default TextInput;
