import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global"
import l_profile from "../style/profile";

export default function Profile() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  
  return (
    <View style={[global.f, global.container, global.self, global.f_col, global.setHW(inHeight, width)]}>
      <View style={[global.f, global.container, global.f_col, global.setHW(inHeight / 10 + 4), l_profile.global, l_profile.in4Frame]}>
        <Text style={[l_profile.in4Txt, l_profile.txtFrame]}>Name</Text>
        <Text style={[l_profile.in4Txt2, l_profile.txtFrame]}>Fellows Of Four</Text>
      </View>
      
      <View style={[global.f, global.container, global.f_col, global.setHW(inHeight / 4, width)]}>
        <View style={[global.f, l_profile.global, global.mt_48]}>
          <TouchableOpacity 
            style={[global.container, l_profile.self, l_profile.setHW(inHeight / 16, width / 3), l_profile.btn1]}
            onPress={()=>navigation.navigate('Login')}
          >
            <Text style={[l_profile.self, l_profile.txt1]}>Log out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}