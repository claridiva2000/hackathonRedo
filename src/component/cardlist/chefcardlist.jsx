import React, { Component } from 'react';
import Cardlist from '../cardlist/cardlist';

// import AddRecipe from '../addrecipe/AddRecipe'

export class chefcardlist extends Component {
  state = {
    recipes: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://chefportfoliofinal.herokuapp.com/recipes')
      .then(res => res.json())
       .then(food => this.setState({ recipes: food }));
  }

  // handleChange = e => {
  //   this.setState({ searchField: this.props.name });
  // };

  render() {
    const { recipes} = this.state;

    const filteredRecipes = recipes.filter(recipe =>
      recipe.chef.firstname.includes(this.props.name)
    );
    console.log(this.state.recipes);
    return (
      <div >
        {/* <AddRecipe/> */}
        <Cardlist recipes={filteredRecipes} className="cardlist" />

        <div className="bottomborder" />
      </div>
    );
  }
}
export default chefcardlist;

