import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen18167 = () => {
  const navigation = useNavigation();
  return <View style={_styles.BlankScreen18167}>
      <Pressable onPress={() => {
      navigation.navigate("BlankScreen18169");
    }}><Text style={_styles.upSoxVVp}>Lorem ipsum…</Text></Pressable></View>;
};

export default BlankScreen18167;

const _styles = StyleSheet.create({
  BlankScreen18167: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  upSoxVVp: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});