import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ImageCycle(props) {
  return (
    <TouchableOpacity
      style={styles.counterBtn}
      onPress={props.countIncrementHandler}
    >
      <Text style={styles.counterBtnText}>Cycle Image</Text>
    </TouchableOpacity>
  );
}
// test github
const styles = StyleSheet.create({
  counterBtn: {
    marginTop: 10,
    backgroundColor: "#FF47F3",
    padding: 20,
    width: 150,
    borderRadius: 50,
    alignSelf: "center",
  },
  counterBtnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});