import React from 'react';

const Input = ({ value, name, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="username">{label}</label>
      <input
        id="username"
        type="text"
        value={value}
        onChange={onChange(name)}
        className="form-control"
      />
    </div>
  );
};

export default Input;
