import { View, Dimensions} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global"
import In4Frame from "../components/Profile/infoFrame";
import AvtFrame from "../components/Profile/avtFrame";

export default function Profile() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48;
  
  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width)]}>
      <AvtFrame height={inHeight} width={inWidth} namePic="pic1"/>

      <In4Frame height={inHeight} type="Information" preView="Fellows Of Four" namePic="name2"/>
      <In4Frame height={inHeight} type="Password" preView="********" namePic="password2" />
      <In4Frame height={inHeight} type="Update data to cloud" preView="Sync your data" namePic="cloud2"/>
      <In4Frame height={inHeight} type="Delete account" preView="Permanently delete your account" namePic="delete2"/>
      <In4Frame height={inHeight} type="Log out" preView="Log out of your account" namePic="logout2" nav="Login"/>
    </View>
  )
}