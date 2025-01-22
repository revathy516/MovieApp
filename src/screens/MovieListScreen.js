import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../redux/actions/movieActions';
import MovieCard from '../components/MovieCard';

const MovieListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { popular, upcoming, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const renderMovie = (item) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('MovieDetail', { movie: item })}
    />
  );

  if (loading) return <ActivityIndicator size="large" style={styles.loading} />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Movies</Text>
      <FlatList data={popular} renderItem={({ item }) => renderMovie(item)} keyExtractor={(item) => item.id.toString()} />

      <Text style={styles.header}>Upcoming Movies</Text>
      <FlatList data={upcoming} renderItem={({ item }) => renderMovie(item)} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 18, textAlign: 'center', marginTop: 20 },
});

export default MovieListScreen;
