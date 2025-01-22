import AsyncStorage from '@react-native-async-storage/async-storage';

const MOVIE_STORAGE_KEY = 'MOVIES_CACHE';

export const saveMoviesToStorage = async (movies) => {
  try {
    await AsyncStorage.setItem(MOVIE_STORAGE_KEY, JSON.stringify(movies));
  } catch (error) {
    console.error('Error saving movies to storage:', error);
  }
};

export const getMoviesFromStorage = async () => {
  try {
    const movies = await AsyncStorage.getItem(MOVIE_STORAGE_KEY);
    return movies ? JSON.parse(movies) : null;
  } catch (error) {
    console.error('Error retrieving movies from storage:', error);
    return null;
  }
};
