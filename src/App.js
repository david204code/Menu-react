import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  // state value
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  // fuunction to display filter categories and working with origin data (items)
  const filterItems = (category) => {
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
          <Categories filterItems ={filterItems}/>
          {/* pass in the props and pass in the menuItems state value */}
          <Menu items ={menuItems}/>

        </section>
      </main>
    </>
  );
}

export default App;
