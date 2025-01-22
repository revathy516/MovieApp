import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE } from '../actionTypes';

export const loadMovies = () => ({ type: LOAD_MOVIES });
export const loadMoviesSuccess = (movies) => ({ type: LOAD_MOVIES_SUCCESS, payload: movies });
export const loadMoviesFailure = (error) => ({ type: LOAD_MOVIES_FAILURE, payload: error });
