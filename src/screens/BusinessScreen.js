import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

function BusinessScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        value={term}
        onTextChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      <Text>You have found - {results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BusinessScreen;
