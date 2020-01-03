import React from 'react';
import './searchbox.styles.css';

const searchbox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="searchbox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default searchbox;
