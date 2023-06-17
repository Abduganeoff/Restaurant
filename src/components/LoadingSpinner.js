import { StyleSheet, ActivityIndicator } from "react-native";

const LoadingSpinner = () => (
  <ActivityIndicator style={styles.loadingSpinner} size="large" />
);

const styles = StyleSheet.create({
  loadingSpinner: {
    marginTop: 40,
  },
});

export default LoadingSpinner;
