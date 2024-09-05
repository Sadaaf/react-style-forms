import React from "react";
import PropTypes from "prop-types";

const RadioInput = (props) => (
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value={props.value}
        onChange={props.onChange}
      />
      {props.value}
    </label>
  </div>
);

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioInput;
