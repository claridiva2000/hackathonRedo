import React from 'react';
import './card.styles.css';

const card = (props) => {
  return (
    <div className='card-container'>
  <h3>{props.recipe.name}</h3>
  <h4>{props.recipe.chef.firstname} {props.recipe.chef.lastname}</h4>
  <img src={props.recipe.picture} alt="food pic"/>
  <h5>{props.recipe.description}</h5>
 
    </div>
  )
}

export default card
