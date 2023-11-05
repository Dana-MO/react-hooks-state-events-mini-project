import React from "react";

function CategoryFilter({ categories, onClick, selectedCategory }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button
         id={category}
         key={category}
         className={category === selectedCategory ? "selected" : null}
         onClick={onClick}>
          {category}
          </button>
      })}
    </div>
  );
}

export default CategoryFilter;
