import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, overflow: 'hidden' },
  image: { width: 100, height: 150 },
  info: { padding: 10, flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  releaseDate: { fontSize: 14, color: 'gray' },
});

export default MovieCard;
