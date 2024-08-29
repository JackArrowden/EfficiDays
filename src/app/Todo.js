import { View, Dimensions, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global";

import CardContainer from "../components/Todo/cardContainer";
import l_todo from "../style/todo";

export default function Todo() {
  //const navigation = useNavigation();

  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48; 
  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width), global.alignItems_center]}>
      <Text style={[l_todo.DateTime]}>May 25th, 2024</Text>
      <View style={[l_todo.streak]}> 
        <Text style={[l_todo.StreakNum]}>20</Text>
      </View>
      <View>
        <CardContainer width={inWidth} height={inHeight} path={""} />
      </View>
    </View>
  )
}