import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";

function BusinessScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text>BusinessScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BusinessScreen;
