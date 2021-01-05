import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// the function to get(filter) the unique category from data
// new Set() get first of each so no repeats!
// change object to array with the spread operator
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {

  // state value
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // fuunction to display filter categories and working with origin data (items)
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    // filter the original list (items) for the property (category) that matches
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return(
    <>
      <main>
        <section className ="menue">

          <div className ="title">
            <h2>Our Menu</h2>
            <div className ="underline"></div>
          </div>
          
          {/* pass the filterItems from its function */}
          <Categories 
            categories ={categories}
            filterItems ={filterItems}
          />
          {/* pass in the props and pass in the menuItems state value */}
          <Menu items ={menuItems}/>

        </section>
      </main>
    </>
  );
}

export default App;
