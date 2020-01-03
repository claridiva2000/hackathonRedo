import React, { Component } from 'react';

import Header from '../header/header';
import Cardlist from '../cardlist/cardlist';


export class Landing extends Component {
  state = {
    recipes: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://chefportfoliofinal.herokuapp.com/recipes')
      .then(res => res.json())
      .then(food => this.setState({ recipes: food }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { recipes, searchField } = this.state;
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return ( 
      <div className="App">
        <Header
          placeholder="🔎 Search Recipes"
          handleChange={this.handleChange}
        />
        <Cardlist recipes={filteredRecipes} className="cardlist" />

        <div className="bottomborder" />
      </div>
    );
  }
}
export default Landing;





