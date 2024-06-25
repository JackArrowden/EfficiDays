import React from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

const SearchBar = ({
    height = 36, 
    text = "Enter a keyword...",
    nav = "",
}) => {
    const navigation = useNavigation();

  return (
    <View style={[global.f_row, global.container, global.setHW(height / 16), l_note.global, l_note.searchBar, global.mt_80, global.mb_48]}>
        <TouchableOpacity style={[global.f0_6, global.container]}>
            <Image
                source={require('../../assets/icon/note/search2.png')}
                style={[l_note.img, l_note.wh_28]}
            />
        </TouchableOpacity>

        <View style={[global.f0_3, global.container]}>
            <View style={[l_note.line]} />
        </View>

        <View style={[global.f4, global.container]}>
            <TextInput placeholder={text}></TextInput>
        </View>
    </View>
  );
};

export default SearchBar;