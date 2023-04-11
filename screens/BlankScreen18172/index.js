import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen18172 = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("Chat");
  }}><View style={_styles.BlankScreen18172}>
      </View></Pressable>;
};

export default BlankScreen18172;

const _styles = StyleSheet.create({
  BlankScreen18172: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  }
});