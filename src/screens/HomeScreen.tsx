import { View } from "react-native";
import React from "react";
import Header from "../components/Header";
import UIFlatList from "../components/UIFlatList";
const HomeScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Body */}
      <UIFlatList />
    </View>
  );
};
export default HomeScreen;
