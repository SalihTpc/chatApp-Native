import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constants";
import Cell from "../components/Cell";
import ContactSeparator from "../components/ContactSeparator";

const Settings = ({ navigation }) => {
  return (
    <View>
      <ContactRow
        name="Mustafa Topcu"
        subtitle="mustafa@mustafa.com"
        onPress={() => alert("Hi, Mustafa Topcu")}
        style={styles.contactRow}
      />
      <ContactSeparator />
      <Cell
        title="Logout"
        icon="log-out-outline"
        tintColor={colors.red}
        onPress={() => alert("Clicked ME")}
      />
      <Cell
        title="Help"
        icon="information-outline"
        tintColor={colors.green}
        onPress={() => alert("Clicked ME")}
      />
      <Cell
        title="Tell a Friend"
        icon="share-social-outline"
        tintColor={colors.pink}
        onPress={() => alert("Clicked ME")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
  },
});
export default Settings;
