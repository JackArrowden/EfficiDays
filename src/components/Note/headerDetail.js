import React from 'react';
import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';
import { listNote, saveListNote, getIDFile } from '../../data/notes/listNote';
import { fileIndex, noteFile } from '../../data/noteDir';
import { noteDetailInfor, saveNoteDetailInfor } from '../../data/notes/noteDetails';
import { readFileIndex, writeFileIndex } from './readFileIndex';

const HeaderDetail = ({
    width,
    textLeft = "Note",
    textRight = "Done",
    isDisplayed = false,
    setDisplayed
}) => {
    const navigation = useNavigation();

    const handleBlurTextInput = () => {
        Keyboard.dismiss();
        setDisplayed(false);
    };

    return (
        <View style={[global.f_row, global.center, global.spaceBtw, l_note.setW(width - 60), l_note.backArrow]}>
            <TouchableOpacity 
                style={[global.center, global.f_row, global.container]}
                onPress={() => {
                    if (noteDetailInfor.data[0].content.trim() === '') {
                        listNote.data.pop();
                    } else {
                        idFile = getIDFile(noteFile.fileName);
                        listNote.data[idFile].textHeader = noteDetailInfor.data[0].content.length > 20 ? noteDetailInfor.data[0].content.substring(0, 20) : noteDetailInfor.data[0].content;
                        listNote.data[idFile].notePreview = noteDetailInfor.data.length > 1 ? 
                        (noteDetailInfor.data[1].content.length > 40 ? 
                            noteDetailInfor.data[1].content.substring(0, 40) : noteDetailInfor.data[1].content
                        ) : "";
                        writeFileIndex(readFileIndex(fileIndex) + 1, fileIndex);
                        saveNoteDetailInfor();
                    }
                    saveListNote();
                    navigation.goBack()
                }}
            >
                <Image
                    source={require('../../assets/icon/note/arrowLeft2.png')}
                    style={[l_note.img, l_note.wh_28]}
                />
                <Text style={[l_note.txtNote]}>{textLeft}</Text>
            </TouchableOpacity>

            {isDisplayed && (
                <TouchableOpacity onPress={handleBlurTextInput}>
                    <Text style={[l_note.doneBtn]}>{textRight}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default HeaderDetail;