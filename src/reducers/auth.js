import {
  
  
  RECIPE_ERROR,

  RECIPE_POSTED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  
  CHEF_LOADED,
  GET_RECIPES, 

  AUTH_ERROR,
  
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  chef: null,
  recipes: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
console.log(payload)
  switch (type) {

    case CHEF_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        chef: payload
      };

case  GET_RECIPES:
  return{
    ...state,
    isAuthenticated:true,
    recipes:payload
  }


    case RECIPE_POSTED:  
    localStorage.setItem('token', payload.token)
    return{
      ...state,
      ...payload,
      isAuthenticated:true,
      loading:false

    }

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };


        case  RECIPE_ERROR:
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
          }

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}
