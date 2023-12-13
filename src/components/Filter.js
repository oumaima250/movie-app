import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter">
      <label>Title:</label>
      <input
        type="text"
        value={filter.title}
        onChange={(e) => handleFilterChange('title', e.target.value)}
      />
      <label>Rating:</label>
      <input
        type="number"
        value={filter.rating}
        onChange={(e) => handleFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;
