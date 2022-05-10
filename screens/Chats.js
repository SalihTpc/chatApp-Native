import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

import ContactRow from "../components/ContactRow";
import ContactSeparator from "../components/ContactSeparator";

const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);

  return (
    <SafeAreaView>
      <ContactRow
        name="Salih Topcu"
        subtitle="I'm waiting"
        onPress={() => alert("Hi, Salih Topcu")}
      />
      <ContactSeparator />
      <ContactRow
        name="Zehra Topcu"
        subtitle="Dad, I love you"
        onPress={() => alert("Hi, Zehra Topcu")}
      />
      <ContactSeparator />
    </SafeAreaView>
  );
};

export default Chats;
