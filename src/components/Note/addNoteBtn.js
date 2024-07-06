import React from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

import { isNewFile } from '../../data/noteDir';
import { listNote, getNotePrevs } from '../../data/notes/listNote';

const AddNoteBtn = ({
    height = 36, 
    circleSize = 40,
    fileIndex = "",
    setFileIndex,
    data,
    nav = "",
}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={[global.f_row, global.container, global.setHW(height / 16), global.mb_32]}
            onPress={()=>{
                getNotePrevs(data); // listNote.getNotePrevs
                listNote.data.push({textHeader: "", notePreview: "", fileName: "f" + fileIndex.toString()});
                setFileIndex(fileIndex + 1);
                isNewFile.new = true;
                navigation.navigate(nav)
            }}
        >
            <View style={[global.container, global.setHW(circleSize, circleSize), l_note.circle]}>
                <Image
                    source={require('../../assets/icon/note/addNote2.png')}
                    style={[l_note.img2, l_note.wh_24]}
                />
                <Image
                    source={require('../../assets/icon/note/addSign2.png')}
                    style={[l_note.img2, l_note.wh_20, l_note.noteAbs]}
                />
            </View>
        </TouchableOpacity>
    );
};

export default AddNoteBtn;