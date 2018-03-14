import React from 'react';

const JewelryCategoryInput = (props) => (
  <div>
    <label>
      <input
        type="checkbox"
        onChange={props.onChange}
      />
      {props.label}
    </label>
  </div>
)

export default JewelryCategoryInput;