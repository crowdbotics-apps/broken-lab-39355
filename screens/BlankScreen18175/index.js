import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen18175 = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("BlankScreen18176");
  }}><View style={_styles.BlankScreen18175}>
      </View></Pressable>;
};

export default BlankScreen18175;

const _styles = StyleSheet.create({
  BlankScreen18175: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  }
});