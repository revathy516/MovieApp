import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { movieReducer } from './reducers/movieReducer';
import { movieEpics } from './epics/movieEpics';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(movieEpics);

export default store;
