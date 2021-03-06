import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map(item=>item.category))]

function App() {
  const [menu,setMenu] =useState(items)
  const [category] = useState(allCategories);
  const filterItem = (category)=>{
    if(category ==="all"){
      setMenu(items);
      return;
    }
    const newItem = items.filter(item=>item.category === category);
    setMenu(newItem)
  }
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories category={category} filterItem={filterItem} />
      <Menu items={menu} />
    </section>
  </main>;
}

export default App;
