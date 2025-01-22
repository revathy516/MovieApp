import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE } from '../actionTypes';

const initialState = {
  popular: [],
  upcoming: [],
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, loading: true, error: null };
    case LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case LOAD_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
