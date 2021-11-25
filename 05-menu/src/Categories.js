import React from 'react';

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
