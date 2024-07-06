import React from 'react';
import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';
import { listNote, saveListNote } from '../../data/notes/listNote';
import { isNewFile } from '../../data/noteDir';

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
                    if (isNewFile.header.trim() === '') {
                        listNote.data.pop();
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