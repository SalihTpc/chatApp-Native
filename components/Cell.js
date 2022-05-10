import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";
import { Ionicons } from "@expo/vector-icons";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Cell = ({ title, icon, tintColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons name={icon} size={24} color="white" />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" style={{ fontSize: 24 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 16, marginStart: 16, flex: 1 },
});

export default Cell;
