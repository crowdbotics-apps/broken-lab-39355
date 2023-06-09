import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen18173 = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("BlankScreen18175");
  }}><View style={_styles.BlankScreen18173}>
      </View></Pressable>;
};

export default BlankScreen18173;

const _styles = StyleSheet.create({
  BlankScreen18173: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  }
});