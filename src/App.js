import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  // state value
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);;

  return(
    <>
      <main>
        <section className ="menue">

          <div className ="title">
            <h2>Our Menu</h2>
            <div className ="underline"></div>
          </div>

          <Categories />
          <Menu />
          
        </section>
      </main>
    </>
  );
}

export default App;
