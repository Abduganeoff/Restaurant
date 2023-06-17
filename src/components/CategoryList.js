import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

function CategoryList({ title, data }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listContainer}>
              <Image style={styles.image} source={{ uri: item.image_url }} />
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.reviewMessage}>
                {item.rating} Stars, {item.review_count} Reviews
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  listContainer: {
    marginLeft: 15,
    marginBottom: 15,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  reviewMessage: {
    color: "gray",
  },
});

export default CategoryList;