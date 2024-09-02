import { View, Dimensions, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global";

import CardContainer from "../components/Todo/cardContainer";
import l_todo from "../style/todo";
import GetDate from "../components/Todo/getDate";



export default function Todo() {
  //const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48; 
  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width), global.alignItems_center]}>
      <GetDate />
      <TouchableOpacity style={[l_todo.Notification]}>
        <Image
            source={require('../assets/icon/todo/notifications.png')}
            style={{
                width: 20,
                height: 20,
                tintColor: '#388C3B'
            }}
        />
      </TouchableOpacity>
      <View style={[l_todo.streak]}> 
        <Text style={[l_todo.StreakNum]}>20</Text>
      </View>
      <View>
        <CardContainer width={inWidth} height={inHeight} path={""} />
      </View>
    </View>
  )
}