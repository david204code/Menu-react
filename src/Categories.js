import React from 'react';

// manual approach
// const Categories = ({filterItems}) => {
//   return(
//     <>
//       <div className ="btn-container">
//         <button className ="filter-btn" 
//           onClick ={() => filterItems('all')}
//         >
//           All
//         </button>
//         <button className ="filter-btn"
//           onClick ={() => filterItems('breakfast')}
//         >
//           Breakfast
//         </button>
//       </div>
//     </>
//   );
// };

// dynamic approach
const Categories = ({ categories, filterItems}) => {
  return(
    <>
      <div className ="btn-container">
        {categories.map((category, index) => {
          return (
            <button type ="button" 
              className ="filter-btn" 
              key ={index}
              onClick ={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </>
  );
};

export default Categories;
