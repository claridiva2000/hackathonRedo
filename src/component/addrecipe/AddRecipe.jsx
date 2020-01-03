import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
// import { loadRecipes } from '../../actions/recipes';
// import PropTypes from 'prop-types';

const AddRecipe = () => {
  const [formData, setFormDate] = useState({
    picture: '',
    name: '',
    ingredients: '',
    description: '',
    instructions: '',
    mealtype: ''
  });



  const [displayRecipeMenu, toggleDisplayRecipeMenu] = useState(false);

  const {
    picture,
    name,
    ingredients,
    description,
    instructions,
    mealtype
  } = formData;

  // useEffect(async()=>{
  //   const body = this.formData
  //   const result = await axios.post(`https://chefportfoliofinal.herokuapp.com/recipes`, body
  // })

  const onChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    toggleDisplayRecipeMenu(!displayRecipeMenu);
    // postRecipe();
  };

  return (
    <div
      style={{
        border: '1px black solid',
        width: '80%',
        padding: '15px',
        margin: 'auto',
        borderRadius: '10px'
      }}
    >
      <h3>Add New Recipe</h3>
      <i
        class="fas fa-plus-circle"
        onClick={() => toggleDisplayRecipeMenu(!displayRecipeMenu)}
        style={{ fontSize: '3rem', color: '#0C0034' }}
      />

      {displayRecipeMenu && (
        <Fragment>
          <form
            onSubmit={e => onSubmit(e)}
            className="addform"
            style={{ margin: 'auto' }}
          >
            <input
              type="name"
              placeholder="Recipe Name"
              name="name"
              onChange={e => onChange(e)}
              value={name}
              style={{ width: '83%', maxWidth: '950px' }}
            />

            <input
              type="description"
              placeholder="description"
              name="description"
              onChange={e => onChange(e)}
              value={description}
              style={{ width: '83%', maxWidth: '950px' }}
            />

            <div>
              <select
                onChange={e=> onChange(e)}
                name="mealtype"
                value={mealtype}
                style={{
                  width: '91%',
                  padding: '15px',
                  marginTop: '15px',
                  maxWidth: '950px',
                  borderRadius: '5px',
                  fontFamily: 'Quicksand, sans-serif',
                  height: '60px',
                  fontSize: '1.3rem'
                }}
              >
                <option value="0">-Select Meal Type-</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </div>

            {/* <input
              type="mealtype"
              placeholder="mealtype"
              name="mealtype"
              onChange={e => onChange(e)}
              value={mealtype}
              
            /> */}

            <input
              type="picture"
              placeholder="picture url"
              name="picture"
              onChange={e => onChange(e)}
              value={picture}
              style={{ width: '83%', maxWidth: '950px' }}
            />

            <textarea
              type="ingredients"
              placeholder="ingredients"
              name="ingredients"
              onChange={e => onChange(e)}
              value={ingredients}
              style={{
                width: '85%',
                maxWidth: '950px',
                height: '100px',
                margin: 'auto',
                marginTop: '12px',
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '1.5rem',
                padding: '18px',
                borderRadius: '10px'
              }}
            />

            <textarea
              type="instructions"
              placeholder="instructions"
              name="instructions"
              onChange={e => onChange(e)}
              value={instructions}
              style={{
                width: '85%',
                maxWidth: '950px',
                height: '100px',
                margin: 'auto',
                marginTop: '12px',
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '1.5rem',
                padding: '18px',
                borderRadius: '10px'
              }}
            />

            <button
              type="submit"
              style={{ minWidth: '400px', margin: 'auto', marginTop: '15px' }}
            >
              Add Recipe
            </button>
          </form>
        </Fragment>
      )}
    </div>
  );
};

AddRecipe.propTypes = {};

const mapStateToProps = state => ({
  recipes: state.recipes,
  recipelist: state.recipes.recipes
});
export default connect(null)(AddRecipe);

// import React, { Fragment, useState } from 'react';
// //Router
// import { Link } from 'react-router-dom';
// //connect redux
// import { connect } from 'react-redux';
// //from actions
// import {postRecipe} from '../../actions/auth'
// //style
// import './addrecipe.styles.css';
// //proptypes- shortcut 'impt'
// // import PropTypes from 'prop-types';

// const AddRecipe = () => {
//   const [formData, setFormDate] = useState({
//     picture: '',
//     name: '',
//     ingredients: '',
//     description: '',
//     mealtype: '',
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//     dessert: true,
//     snack: false
//   });

//   const {
//     picture,
//     name,
//     ingredients,
//     description,
//     mealtype,
//     breakfast,
//     lunch,
//     dinner,
//     dessert,
//     snack
//   } = formData;

//   const onChange = e =>
//     setFormDate({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     postRecipe();
//   };

//   const onToggle = e => {
//     e.preventDefault();
//   };

//   return (
//     <div className="addrecipe">
//       <form onSubmit={e => onSubmit(e)} className="addform">
//         <input
//           type="picture"
//           placeholder="picture url"
//           name="picture"
//           onChange={e => onChange(e)}
//           value={picture}
//           style={{ width: '400px' }}
//         />
//         <input
//           type="name"
//           placeholder="Recipe Name"
//           name="name"
//           onChange={e => onChange(e)}
//           value={name}
//           style={{ width: '400px' }}
//         />
//         <input
//           type="ingredients"
//           placeholder="ingredients"
//           name="ingredients"
//           onChange={e => onChange(e)}
//           value={ingredients}
//           style={{ width: '400px' }}
//         />
//         <input
//           type="description"
//           placeholder="description"
//           name="description"
//           onChange={e => onChange(e)}
//           value={description}
//           style={{ width: '400px' }}
//         />
//         <input
//           type="mealtype"
//           placeholder="mealtype"
//           name="mealtype"
//           onChange={e => onChange(e)}
//           value={mealtype}
//           style={{ width: '400px' }}
//         />

//         <button type="submit" style={{ minWidth: '400px' }}>
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// AddRecipe.propTypes = {};

// const mapStateToProps = state => ({});

// export default connect(
//   mapStateToProps,
//   { postRecipe }
// )(AddRecipe);
