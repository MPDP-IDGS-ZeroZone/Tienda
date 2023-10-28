import React from 'react';
import list from './Dataa';
import './Styles/tienda.css';
import Cards from './Cards';


function tienda({handleClick}) {
  return (
    <section>
      {
        list.map((item)=>(
          <Cards item={item} key={item.id} handleClick={handleClick}/>
        ))
      }
    </section>
  )
}

export default tienda