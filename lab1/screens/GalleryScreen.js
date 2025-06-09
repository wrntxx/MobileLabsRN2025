import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Footer from "../components/Footer"

const data = Array(8).fill({});

export default function GalleryScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <View style={styles.box} />}
        contentContainerStyle={styles.container}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    width: 150,
    height: 100,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});