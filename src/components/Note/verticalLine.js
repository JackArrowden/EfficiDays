import React from 'react';
import { View } from 'react-native';

import global from '../../style/global';
import l_note from '../../style/note';

const VerticalLine = ({
    width,
    bottom
}) => {
    return (
        <View style={[global.f, l_note.setBottom(bottom)]}>
            <View style={[global.setHW(1, width / 6 * 5), l_note.verticalLine]} />
        </View>
    );
};

export default VerticalLine;