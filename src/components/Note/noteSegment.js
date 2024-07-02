import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import global from '../../style/global';
import l_note from '../../style/note';

const NoteSegment = ({
    height = 36,
    onFocus,
    style = "",
    isTodoTask = false // If it's true, display a todo task instead of a textinput
}) => {
    const navigation = useNavigation();

    const [numLine, setNumLine] = useState(0);
    const [text, setText] = useState('');
  
    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter' || nativeEvent.key === 'Return') {
            console.log(numLine)
            setNumLine(numLine + 1);
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
            returnKeyType="next" 
            multiline={true} 
            style={[global.setHW(height, '100%'), l_note.txtMain]}
            onFocus={onFocus ? onFocus : undefined}
            value={text}
            onChangeText={setText}
            onKeyPress={handleKeyPress}
        />
    );
};

export default NoteSegment;