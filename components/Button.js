import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";

const Button = ({ text, varient }) => {
  return (
    <TouchableOpacity
      style={[
        styles.myButton,
        { backgroundColor: varient === "primary" ? colors.green : "white" },
      ]}
    >
      <Text
        style={[
          styles.buttonLabel,
          { color: varient === "primary" ? "white" : colors.red },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  myButton: { padding: 16, borderRadius: 8 },
  buttonLabel: { fontSize: 18, fontWeight: "500" },
});
export default Button;
