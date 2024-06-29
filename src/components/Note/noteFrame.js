import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

const NoteFrame = ({
    height = 688, 
    textHeader = "Your first note",
    notePreview = "Details of your first note...",
    nav = "",
}) => {
    const navigation = useNavigation();

    return (
        <View style={[global.f_col, global.setHW(height / 8), l_note.global]}>
            <View style={[global.f_row, global.f0_3, l_note.noteHeader]}>
                <Text style={[l_note.noteText1]}>{textHeader}</Text>
            </View>

            <TouchableOpacity 
                style={[global.f_row, global.f0_6, l_note.notePreview]}
                onPress={()=>navigation.navigate(nav)}
            >
                <Text style={[l_note.noteText2]}>{notePreview}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoteFrame;