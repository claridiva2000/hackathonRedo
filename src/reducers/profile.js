import { GET_PROFILE, PROFILE_ERROR, LOAD_RECIPES,RECIPES_ERROR } from '../actions/types';

const initialState = {
  chef: {},
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
 console.log(payload)

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        chef: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case LOAD_RECIPES:
      return{
        ...state,
        recipes:payload,
        loading:false
      }

    case RECIPES_ERROR:
      return {
        ...state,
        error:payload,
        loading:false
      }

    default:
      return state;
  }
}
