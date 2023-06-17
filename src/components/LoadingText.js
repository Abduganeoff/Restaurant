import { Text, StyleSheet } from "react-native";

const LoadingText = () => <Text style={styles.loadingText}>Loading...</Text>;

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoadingText;
