import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Payments1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <Pressable onPress={() => {
      navigation.navigate("BlankScreen18170");
    }}><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}></ScrollView></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Payments1;