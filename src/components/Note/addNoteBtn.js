import React from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

import { fileDir, isNewFile, noteFile, updateFileDir } from '../../data/noteDir';
import { listNote, getNotePrevs, getIDFile } from '../../data/notes/listNote';
import { accInfor, saveAccInfor } from '../../data/profile/account';
import { readAccInfor, writeAccInfor } from '../Profile/accInforHandlers';
import { fileAccDir } from '../../data/accDir';
import { readFileIndex, writeFileIndex } from './readFileIndex';

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
                readFileIndex(fileDir.fileIndex)
                .then(data => {
                    fileIndex = data
                })

                getNotePrevs(data);
                listNote.data.push({textHeader: "", notePreview: "", fileName: "acc" + accInfor.id.toString() + "f" + listNote.fileID.toString()});
                noteFile.fileName = "acc" + accInfor.id.toString() + "f" + listNote.fileID.toString();
                updateFileDir();

                accInfor.listNoteFile.push(noteFile.fileName);
                writeAccInfor(fileAccDir.fileAccDir);

                listNote.fileID++;

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