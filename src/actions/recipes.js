import axios from 'axios';
import { setAlert } from './alert';
import { GET_RECIPES, RECIPE_POSTED, RECIPES_ERROR } from './types';
// import setAuthToken from '../utils/setAuthToken';

//LOAD RECIPES
export const loadRecipes = () => async dispatch => {

  try {
    const res = await axios.get('https://chefportfoliofinal.herokuapp.com/recipes')

    dispatch({
      type: GET_RECIPES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECIPES_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
};

//Post Recipe
export const postRecipe = ({
  picture,
  name,
  ingredients,
  description,
  mealtype,
  breakfast,
  lunch,
  dinner,
  dessert,
  snack
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    picture,
    name,
    ingredients,
    description,
    mealtype,
    breakfast,
    lunch,
    dinner,
    dessert,
    snack
  });

  try {
    const res = await axios.post(
      'https://chefportfoliofinal.herokuapp.com/recipes',
      body,
      config
    );

    dispatch({
      type: RECIPE_POSTED,
      payload: res.data //token is in here
    });
    dispatch(loadRecipes());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: RECIPES_ERROR
    });
  }
};

// //LOAD CHEF
// export const loadChef = () => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get(
//       'https://chefportfoliofinal.herokuapp.com/chefs'
//     );

//     dispatch({
//       type: CHEF_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

// //Register Chef
// export const register = ({
//   firstname,
//   lastname,
//   location,
//   profilepic,
//   email,
//   password
// }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify({
//     firstname,
//     lastname,
//     location,
//     profilepic,
//     email,
//     password
//   });

//   try {
//     const res = await axios.post(
//       'https://chefportfoliofinal.herokuapp.com/chefs/register',
//       body,
//       config
//     );

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data //token is in here
//     });
//     dispatch(loadChef());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

// //Login Chef
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post(
//       'https://chefportfoliofinal.herokuapp.com/chefs/login',
//       body,
//       config
//     );

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data //token is in here
//     });

//     dispatch(loadChef());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };
