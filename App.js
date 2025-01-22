import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import store from './src/redux/store';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const AppNavigator = createStackNavigator(
  {
    MovieList: {
      screen: MovieListScreen,
      navigationOptions: { title: 'Movies' },
    },
    MovieDetail: {
      screen: MovieDetailScreen,
      navigationOptions: { title: 'Movie Details' },
    },
  },
  { initialRouteName: 'MovieList' }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
