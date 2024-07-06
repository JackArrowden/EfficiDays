import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';
import { isNewFile } from '../../data/noteDir';

import { noteDetailInfor } from '../../data/notes/noteDetails';

const NoteSegment = ({
    index,
    content = "",
    height = 26,
    onFocus,
    onBlur,
    textInputRef,
    noteDetails,
    setNoteDetails,
    style,
    isTodoTask = false // If it's true, display a todo task instead of a textinput
}) => {
    const [changed, setChanged] = useState(true);
    useEffect(() => {
        if (changed && style == l_note.segmentTitle) {
            isNewFile.header = "";
            setChanged(false);
        }
    }, [changed]);

    const navigation = useNavigation();
    const curSegment = useRef(null);
    console.log("Index", index);

    const [numLine, setNumLine] = useState(0);
    const [text, setText] = useState(content);
    const [sHeight, setSHeight] = useState(height);
  
    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter' || nativeEvent.key === 'Return') {
            if (text.trim() !== '') {
                noteDetailInfor.stopOverride = true;

                const len = noteDetailInfor.data[index].content.length;
                noteDetailInfor.data[index].content = noteDetailInfor.data[index].content.substring(0, len);
                setText(noteDetailInfor.data[index].content);

                noteDetailInfor.data.splice(index + 1, 0, {content: "", style: 2});

                setNoteDetails(noteDetailInfor.data);
                textInputRef.current.blur();
                return;
            } else {
                setNumLine(numLine + 1);
            }
            console.log(numLine)
        }
        if (nativeEvent.key === 'Backspace' && text.endsWith('\n')) {
            if (numLine === 1) {
                console.log("Hello")
                setNumLine(numLine - 1);
            } else {
                console.log(numLine)
                setNumLine(numLine - 1);
            }
        }
    };
    
    return (
        <TextInput 
            autoFocus={true}
            ref={textInputRef !== undefined ? textInputRef : curSegment}
            returnKeyType="next"
            placeholder={index == 0 ? 'Enter your note' : undefined}
            multiline={true} 
            style={[global.setHW(sHeight, '100%'), l_note.txtMain, style]}
            onFocus={onFocus ? onFocus : undefined}
            onBlur={onBlur ? onBlur : undefined}
            value={text}
            onChangeText={(newText => {
                if (noteDetailInfor.stopOverride) {
                    noteDetailInfor.stopOverride = false;
                } else {
                    if (index == 0) {
                        isNewFile.header = newText;
                        console.log("Haha override!", newText);
                        setText(newText);
                        noteDetailInfor.data[index].content = newText;
                    } else if (text.length > 0 && newText.length < text.length && newText[0] != text[0]) {
                        const len = noteDetailInfor.data[index - 1].content.length;
                        noteDetailInfor.data[index - 1].content = noteDetailInfor.data[index - 1].content.substring(0, len);
                        noteDetailInfor.data[index - 1].content += noteDetailInfor.data[index].content.substring(1, len);
                        noteDetailInfor.data.splice(index, 1);
                        console.log(noteDetailInfor.data);
                        setNoteDetails(noteDetailInfor.data);

                        textInputRef.current.blur();
                        return;
                    } else {
                        setText(newText);
                        noteDetailInfor.data[index].content = newText;
                    }
                }
            })}
            onKeyPress={handleKeyPress}
            onContentSizeChange={() => {
                setSHeight(height * (numLine + 1));
            }}
            scrollEnabled={false}
        />
    );
};

export default NoteSegment;