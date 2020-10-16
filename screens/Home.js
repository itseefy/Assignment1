import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Welcome!</Text>
      <Text style={styles.text}>Please use the side menu to navigate to the main content.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  textTitle: {
    color: "#00B29E",
    fontSize: 40,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});