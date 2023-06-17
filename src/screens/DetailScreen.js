import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import LoadingSpinner from "../components/LoadingSpinner";

function DetailScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getBusinessDetail = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusinessDetail(id);
  }, []);

  if (!result) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
    alignSelf: "center",
  },
});

export default DetailScreen;
