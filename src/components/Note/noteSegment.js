import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

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
    isAdded = Function,
    style,
    isTodoTask = false // If it's true, display a todo task instead of a textinput
}) => {
    const [changed, setChanged] = useState(true);
    const navigation = useNavigation();
    const curSegment = useRef(null);
    
    const [numLine, setNumLine] = useState(0);
    const [text, setText] = useState("");
    const [sHeight, setSHeight] = useState(height);
    const [cursorPosition, setCursorPosition] = useState({ start: 0, end: 0 });
    
    useEffect(() => {
        if (changed && index == 0) {
            isNewFile.header = "";
            setChanged(false);
        }

        if (noteDetailInfor.reset == index) {
            setText(noteDetailInfor.data[index].content);
            noteDetailInfor.reset += 1;
        }
    }, [changed, noteDetailInfor.reset, index]);

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key == 'Enter' || nativeEvent.key == 'Return') {
            if (noteDetailInfor.data[index].content.trim() !== '') {
                let len = noteDetailInfor.data[index].content.length;
                // Delete the focused substring
                noteDetailInfor.data[index].content = noteDetailInfor.data[index].content.substring(0, cursorPosition.start) + noteDetailInfor.data[index].content.substring(cursorPosition.end, len);

                noteDetailInfor.stopOverride = true;
                len = noteDetailInfor.data[index].content.length;

                if (cursorPosition.start == text.length) {
                    noteDetailInfor.data[index].content = noteDetailInfor.data[index].content.substring(0, len);
                    setText(noteDetailInfor.data[index].content);
                    
                    noteDetailInfor.data.splice(index + 1, 0, {content: "", style: 2});
                } else {
                    const nextText = noteDetailInfor.data[index].content.substring(cursorPosition.start, len);
                    noteDetailInfor.data[index].content = noteDetailInfor.data[index].content.substring(0, cursorPosition.start);
                    setText(noteDetailInfor.data[index].content);

                    noteDetailInfor.data.splice(index + 1, 0, {content: nextText, style: 2});
                }

                setCursorPosition({start: 0, end: 0})
                // setCursorPosition({start: noteDetailInfor.data[index].content.length, end: noteDetailInfor.data[index].content.length})
                noteDetailInfor.id = index;
                noteDetailInfor.isAddNew = true;

                setNoteDetails(noteDetailInfor.data);

                if (textInputRef) textInputRef.current.blur();
                else curSegment.current.blur();


                isAdded();
                noteDetailInfor.reset = 0;

                return;
            } else {
                setNumLine(numLine + 1);
            }
        }

        if (nativeEvent.key === 'Backspace') {
            if (index != 0 && cursorPosition.start === 0) {
                console.log("Xóa nè");
                // let len = noteDetailInfor.data[index - 1].content.length;
                // noteDetailInfor.data[index - 1].content = noteDetailInfor.data[index - 1].content;
                
                noteDetailInfor.data[index - 1].content += noteDetailInfor.data[index].content;
                noteDetailInfor.data.splice(index, 1);

                noteDetailInfor.id = index;
                if (textInputRef) textInputRef.current.blur();
                else curSegment.current.blur();

                isDeleted();
                noteDetailInfor.reset = 0;
                noteDetailInfor.update = false;
                noteDetailInfor.isAddNew = false;
                return;
            }

            if (numLine === 1) {
            } else {
            }
        }
    };

    const handleSelectionChange = ({ nativeEvent: { selection } }) => {
        setCursorPosition(selection);
    };
    console.log("Vị trí của t nè, ", cursorPosition);

    return (
        <TextInput 
            autoFocus={index == 0 && noteDetailInfor.autoFocus ? true : false}
            ref={textInputRef !== undefined ? textInputRef : curSegment}
            returnKeyType="next"
            placeholder={index == 0 ? 'Enter your note' : undefined}
            multiline={true} 
            style={[global.setHW(sHeight, '100%'), l_note.txtMain, style]}
            onFocus={onFocus ? onFocus : undefined}
            onBlur={onBlur ? onBlur : undefined}
            value={noteDetailInfor.data[index].content}
            onChangeText={(newText => {
                if (noteDetailInfor.stopOverride) {
                    noteDetailInfor.stopOverride = false;
                } else {
                    if (index == 0) {
                        isNewFile.header = newText;
                        setText(newText);
                        noteDetailInfor.data[index].content = newText;
                    // } else if (text.length > 0 && newText.length < text.length && newText[0] != text[0]) {
                        // let len = noteDetailInfor.data[index - 1].content.length;
                        // noteDetailInfor.data[index - 1].content = noteDetailInfor.data[index - 1].content.substring(0, len);
                        
                        // len = noteDetailInfor.data[index].content.length;
                        // noteDetailInfor.data[index - 1].content += noteDetailInfor.data[index].content.substring(1, len);

                        // noteDetailInfor.data.splice(index, 1);

                        // noteDetailInfor.id = index;
                        // if (textInputRef !== undefined) textInputRef.current.blur();
                        // else curSegment.current.blur();
                        // isDeleted();
                        // noteDetailInfor.reset = 0;
                        // noteDetailInfor.update = false;
                        // noteDetailInfor.isAddNew = false;
                        // return;
                    } else {
                        if (noteDetailInfor.update) {
                            setText(newText);
                            noteDetailInfor.data[index].content = newText;
                        } else {
                            noteDetailInfor.update = true;
                        }
                    }
                }
            })}
            onKeyPress={handleKeyPress}
            onContentSizeChange={(e) => {
                // console.log("Height", e.nativeEvent.contentSize.height);
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
                setSHeight(height * (e.nativeEvent.contentSize.height / 65 * 3));
                // setSHeight(height * (numLine + 1));
            }}
            scrollEnabled={false}
            onSelectionChange={handleSelectionChange}
        />
    );
};

export default NoteSegment;