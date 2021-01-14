import React, { Component } from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import meat from './images/meat.jpg';
import hawaiian from './images/hawaiian.jpg';
import bbq from './images/bbq.jpg';
import veggie from './images/veggie.jpeg';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>

        <Slice
        img = {plain}
        title= 'Plain'
        description = "It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
        price = "$1.00"></Slice>

        <Slice
        img = {pepperoni}
        title= 'Pepperoni'
        description = "A classic for many but its not halal"
        price = "$1.00"></Slice>

        <Slice
        img = {hawaiian}
        title= 'Hawaiian'
        description = "I doont like this flavor but for you weirdos here "
        price = "$1.00"></Slice>

        <Slice
        img = {meat}
        title= 'Meat'
        description = "It's got cheese, it's got tomato sauce, arbys we got the meats, and it's only  a dollar. Best deal in the world."
        price = "$1.00"></Slice>

        <Slice
        img = {bbq}
        title= 'Bbq'
        description = "Bbq pizza for you bbq lovers"
        price = "$1.00"></Slice>

        <Slice
        img = {veggie}
        title= 'Veggie'
        description = "On a diet heres our veggie slice"
        price = "$1.00"></Slice>
        </div>
    </div>
  );
}

export default Menu;
