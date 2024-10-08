import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

import { noteFile, updateFileDir, isNewFile } from '../../data/noteDir';
import { getNotePrevs } from '../../data/notes/listNote';

const NoteFrame = ({
    height = 688, 
    textHeader = "Your first note",
    notePreview = "Details of your first note...",
    fileName = "",
    nav = "",
    data
}) => {
    const navigation = useNavigation();

    return (
        <View style={[global.f_col, global.setHW(height / 8), l_note.global]}>
            <View style={[global.f_row, global.f0_3, l_note.noteHeader]}>
                <Text style={[l_note.noteText1]}>{textHeader}</Text>
            </View>

            <TouchableOpacity 
                style={[global.f_row, global.f0_6, l_note.notePreview]}
                onPress={()=>{
                    noteFile.fileName = fileName;
                    isNewFile.new = false;
                    updateFileDir();
                    getNotePrevs(data);
                    navigation.navigate(nav)
                    console.log(fileName)
                }}
            >
                <Text style={[l_note.noteText2]}>{notePreview}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoteFrame;