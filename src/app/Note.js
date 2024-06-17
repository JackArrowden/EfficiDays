import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Note() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Note</Text>
    </View>
  )
}