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
    isDeleted = Function,
    updatePrev = Function,
    style,
    isTodoTask = false // If it's true, display a todo task instead of a textinput
}) => {
    const [changed, setChanged] = useState(true);
    const navigation = useNavigation();
    const curSegment = useRef(null);
    
    const [numLine, setNumLine] = useState(0);
    const [text, setText] = useState(noteDetailInfor.data[index].content);
    const [sHeight, setSHeight] = useState(height);
console.log(text, noteDetailInfor.data, index);
    if (noteDetailInfor.reset == index) {
        console.log(noteDetailInfor.data[index].content, noteDetailInfor.reset);
        setText(noteDetailInfor.data[index].content);
        noteDetailInfor.reset += 1;
    }

    useEffect(() => {
        if (changed && index == 0) {
            isNewFile.header = "";
            setChanged(false);
        }
    }, [changed]);
    

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter' || nativeEvent.key === 'Return') {
            if (text.trim() !== '') {
                noteDetailInfor.stopOverride = true;

                const len = noteDetailInfor.data[index].content.length;
                noteDetailInfor.data[index].content = noteDetailInfor.data[index].content.substring(0, len);
                setText(noteDetailInfor.data[index].content);

                noteDetailInfor.data.splice(index + 1, 0, {content: "", style: 2});

                setNoteDetails(noteDetailInfor.data);
                if (textInputRef !== undefined) textInputRef.current.blur();
                else curSegment.current.blur();

                return;
            } else {
                setNumLine(numLine + 1);
            }
        }
        if (nativeEvent.key === 'Backspace' && text.endsWith('\n')) {
            // noteDetailInfor.stopOverride = true;
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
                        setText(newText);
                        noteDetailInfor.data[index].content = newText;
                    } else if (text.length > 0 && newText.length < text.length && newText[0] != text[0]) {
                        let len = noteDetailInfor.data[index - 1].content.length;
                        noteDetailInfor.data[index - 1].content = noteDetailInfor.data[index - 1].content.substring(0, len);
                        
                        len = noteDetailInfor.data[index].content.length;
                        noteDetailInfor.data[index - 1].content += noteDetailInfor.data[index].content.substring(1, len);

                        noteDetailInfor.data.splice(index, 1);

                        noteDetailInfor.id = index;
                        if (textInputRef !== undefined) textInputRef.current.blur();
                        else curSegment.current.blur();
                        isDeleted();
                        noteDetailInfor.reset = 0;
                        return;
                    } else {
                        setText(newText);
                        noteDetailInfor.data[index].content = newText;
                    }
                }
            })}
            onKeyPress={handleKeyPress}
            onContentSizeChange={(e) => {
                console.log("Ủa không change nữa hả?");
                console.log("Height", e.nativeEvent.contentSize.height);
                // if (textInputRef !== undefined) {
                //     textInputRef.current.measure((x, y, width, h, pageX, pageY) => {
                //         setSHeight(height * (h + 1));
                //         console.log("Height", h);
                //     });
                // }
                // else {
                //     curSegment.current.measure((x, y, width, h, pageX, pageY) => {
                //         setSHeight(height * (h + 1));
                //         console.log("Height", h);
                //     });
                // }
                
                // setSHeight(e.nativeEvent.contentSize.height);
                console.log("Ủa là sao mắ");
                setSHeight(height * (e.nativeEvent.contentSize.height / 65 * 3));
                // setSHeight(height * (numLine + 1));
            }}
            scrollEnabled={false}
        />
    );
};

export default NoteSegment;