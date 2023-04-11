import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const BlankScreen18170 = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("BlankScreen18172");
  }}><View style={_styles.BlankScreen18170}>
      </View></Pressable>;
};

export default BlankScreen18170;

const _styles = StyleSheet.create({
  BlankScreen18170: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  }
});