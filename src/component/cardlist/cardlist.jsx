import React from 'react';
import Card from '../card/card';
import './cardlist.styles.css';
import Spinner from '../messages/spinner'

const cardlist = props => {
 
  return props.recipes.length === 0 ?  (
    <Spinner />
  ) : (
    <div className="cardlist">
      {props.recipes.map(recipe => (
        <Card key={recipe._id} recipe={recipe}/>
      ))}
    </div>
  );
};

export default cardlist;
