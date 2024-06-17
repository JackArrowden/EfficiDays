import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Load() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Load</Text>
    </View>
  )
}