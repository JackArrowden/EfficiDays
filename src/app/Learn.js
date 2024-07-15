import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import global from "../style/global";
import CountdownTimer from "../components/Learn/CountdownTimer";
import Stopwatch  from "../components/Learn/Stopwatch";
import StopwatchButton from "../components/Learn/stopwatchButton";

export default function Learn() {
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const navigation = useNavigation();
  return (
    <View style={[global.f_col, global.center, global.self, global.setHW(inHeight, width)]}>
      <Text>
          Promodo
      </Text>

      <View>
        <StopwatchButton />
      </View>

    </View>
  )
}