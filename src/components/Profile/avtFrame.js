import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import global from '../../style/global';
import l_profile from '../../style/profile';

const images = {
    pic1: require('../../assets/images/avt.jpg'),
    // pic2: require('../../assets/icon/profile/pic2.png'),
};

const AvtFrame = ({
  height = 36,
  width = 36,
  namePic = "",
  nav = ""
}) => {
    const navigation = useNavigation();
    const picPath = images[namePic];

  return (
    <View style={[global.f, global.container, global.f_row, global.setHW(height / 4, width + 48)]}>
        <View style={[global.container]}>
            <View style={[global.setHW(1, width / 4), l_profile.line]} />
        </View>

        <View style={[global.container, global.p16]}>
            <View style={[global.container, global.setHW(width / 4 - 8, width / 4 - 8), l_profile.circle1]}>
                <View style={[global.imgFrame, global.ml_2, global.setHW(width / 4 - 12, width / 4 - 12), l_profile.circle2]}>
                    <Image 
                        source={picPath}
                        style={[global.img, global.setHW(width / 4 - 12, width / 4 - 12), l_profile.circle2]}
                    >
                    </Image>
                </View>
            </View>
        </View>
        
        {/* <Image source={require('../assets/icon/profile/img2.png')} style={[]}/> */}
        <View style={[global.container]}>
            <View style={[global.setHW(1, width / 4), l_profile.line]} />
        </View>
      </View>
  );
};

export default AvtFrame;