import { View, Dimensions, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global";

import CardContainer from "../components/Todo/cardContainer";

export default function Todo() {
  //const navigation = useNavigation();

  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48; 
  console.log(inHeight, inWidth)
  return (
    <View style={[global.f_col, global.container, global.alignItems_center, global.self, global.setHW(inHeight, width)]}>
      <CardContainer width={inWidth} height={inHeight} path={""} />
    </View>
  )
}