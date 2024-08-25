import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global"
import l_login from "../style/loginRegister";
import InputTxt from "../components/LogIn/inputTxt";
import deleteFile from "../components/Note/deleteFile";
import { fileIndex, curDir } from "../data/noteDir";

export default function LogIn() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inputHeight = height / 8 * 0.8;
  
  return (
    <View style={[global.f, global.container, global.self, global.setHW(height, width)]}>
      <View style={[global.f, global.container, global.f_col, global.setHW(height / 4 * 3, width)]}>
        <InputTxt height={inputHeight} type="Username"/>
        <InputTxt height={inputHeight} type="Password" isSecure={true}/>

        <View style={[global.f, l_login.global, global.mt_48]}>
          <TouchableOpacity 
            style={[global.container, l_login.self, l_login.setHW(height / 16, width / 3), l_login.btn1]}
            onPress={()=>navigation.push('Tabs')}
          >
            <Text style={[l_login.self, l_login.txt1]}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={[global.f, global.container, global.f_row, l_login.global, global.mt_96]}>
          <Text style={[l_login.self, l_login.txt]}>Don't have any account?</Text>
          <TouchableOpacity 
            style={[global.container, l_login.self, l_login.setHW(height / 32, width / 6), l_login.btn2]} 
            onPress={()=>navigation.navigate('Register')}
          >
            <Text style={[l_login.txt2]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}