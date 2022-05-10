import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";
import { colors } from "../config/constants";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create New Account</Text>
        <TextInput style={styles.myInput} placeholder="Enter Your Name" />
        <TextInput style={styles.myInput} placeholder="Enter Your Email" />
        <TextInput style={styles.myInput} placeholder="Enter Your Password" />
        <View style={styles.buttonContainer}>
          <Button text="Sign In" varient="secandary" />
          <Button text="Sign Up" varient="primary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  contentContainer: { padding: 32 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  myInput: {
    backgroundColor: "white",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
export default SignUp;
