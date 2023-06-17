import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusiness from "../hooks/useBusiness";
import CategoryList from "../components/CategoryList";
import LoadingText from "../components/LoadingText";

function BusinessScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusiness();

  const getBusinessByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <View style={styles.container}>
      <SearchBar
        value={term}
        onTextChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {results.length === 0 ? (
        <LoadingText />
      ) : (
        <ScrollView>
          <CategoryList title="Cost Effective" data={getBusinessByPrice("$")} />
          <CategoryList title="Bit Pricer" data={getBusinessByPrice("$$")} />
          <CategoryList title="Big Spender!" data={getBusinessByPrice("$$$")} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorMessage: {
    marginTop: -15,
    marginLeft: 15,
    color: "red",
  },
});

export default BusinessScreen;
