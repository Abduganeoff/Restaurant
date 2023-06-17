import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather style={styles.searchIcon} name="search" />
      <TextInput style={styles.textInput} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    margin: 15,
    backgroundColor: "#D3D3D3",
  },
  searchIcon: {
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 24,
    marginLeft: 10,
  },
});

export default SearchBar;
