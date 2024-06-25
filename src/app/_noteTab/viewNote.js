import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import global from "../../style/global"
import l_login from "../../style/loginRegister";
import InputTxt from "../../components/LogIn/inputTxt";

export default function ViewNote() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inputHeight = height / 8 * 0.8;
  
  return (
    <View style={[global.f, global.container, global.self, global.setHW(height, width)]}>
      <View style={[global.f, global.container, global.f_col, global.setHW(height / 4 * 3, width)]}>

        <View style={[global.f, l_login.global, global.mt_48]}>
          <TouchableOpacity 
            style={[global.container, l_login.self, l_login.setHW(height / 16, width / 3), l_login.btn1]}
            onPress={()=>navigation.goBack()}
          >
            <Text style={[l_login.self, l_login.txt1]}>New note</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}