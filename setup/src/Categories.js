import React from 'react';

const Categories = ({category,filterItem}) => {
  return (
    <div className="btn-container">
      {category.map((item,index)=><button onClick={()=>filterItem(item)} key={index} className="filter-btn">{item}</button>)}
    </div>
  )
};

export default Categories;
