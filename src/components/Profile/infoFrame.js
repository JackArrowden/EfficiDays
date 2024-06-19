import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import global from '../../style/global';
import l_profile from '../../style/profile';

const images = {
    birthday1: require('../../assets/icon/profile/birthday.svg'),
    birthday2: require('../../assets/icon/profile/birthday2.png'),

    cloud1: require('../../assets/icon/profile/cloud.svg'),
    cloud2: require('../../assets/icon/profile/cloud2.png'),

    delete1: require('../../assets/icon/profile/delete.svg'),
    delete2: require('../../assets/icon/profile/delete2.png'),

    img1: require('../../assets/icon/profile/img.svg'),
    img2: require('../../assets/icon/profile/img2.png'),

    logout1: require('../../assets/icon/profile/logout.svg'),
    logout2: require('../../assets/icon/profile/logout2.png'),

    mail1: require('../../assets/icon/profile/mail.svg'),
    mail2: require('../../assets/icon/profile/mail2.png'),

    name1: require('../../assets/icon/profile/name.svg'),
    name2: require('../../assets/icon/profile/name2.png'),

    password1: require('../../assets/icon/profile/password.svg'),
    password2: require('../../assets/icon/profile/password2.png'),
};

const In4Frame = ({
  height = 36, 
  type = "Information", 
  preView = "Information",
  namePic = "",
  nav = "",
  color1 = '#388C3B',
  color2 = '#236F26'
}) => {
    const navigation = useNavigation();
    const picPath = images[namePic];

  return (
    <View style={[global.f, global.container, global.f_row, global.setHW(height / 10 + 4), l_profile.global, l_profile.in4Frame]}>
        <View style={[global.f0_75, global.container]}>
            <Image
                source={picPath}
                style={{
                    width: 32,
                    height: 32,
                    tintColor: color1
                }}
            />
        </View>

        <View style={[global.f4, global.container, global.f_col]}>
            <Text style={[l_profile.in4Txt, l_profile.txtFrame]}>{type}</Text>
            <Text style={[l_profile.in4Txt2, l_profile.txtFrame]}>{preView}</Text>
        </View>

        <View style={[global.f0_6, global.container]}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate(nav)}
            >
                <Image
                source={require('../../assets/icon/profile/rightArrow2.png')}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: color2
                }}
                />
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default In4Frame;