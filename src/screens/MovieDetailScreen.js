import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ navigation }) => {
  const movie = navigation.getParam('movie');

  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.overview}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 300, resizeMode: 'cover', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  releaseDate: { fontSize: 14, color: 'gray' },
});

export default MovieDetailScreen;
