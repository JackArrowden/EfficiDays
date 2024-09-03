import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import global from '../../style/global';
import l_note from '../../style/note';
import VerticalLine from './verticalLine';
import { noteDetailInfor } from '../../data/notes/noteDetails';
import listStyles from '../../constants/listSegmentStyles';

const BtmStyle = ({
    width,
    bottom
}) => {
    return (
        <View style={[global.f, global.center, global.setHW(50, width), l_note.global, l_note.setBottom(bottom)]}>
            <VerticalLine width={width} bottom={50}/>
            
            <View style={[global.f_row]}>
                <TouchableOpacity
                    style={[global.center, global.f_row, global.container]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 1;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Image source={require('../../assets/icon/note/noteDetails/bold.png')} style={[l_note.img, l_note.wh_36]} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[global.center, global.f_row, global.container]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 3;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Image source={require('../../assets/icon/note/noteDetails/italic.png')} style={[l_note.img, l_note.wh_36]} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[global.center, global.f_row, global.container]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 4;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Image source={require('../../assets/icon/note/noteDetails/underline.png')} style={[l_note.img, l_note.wh_36]} />
                </TouchableOpacity>

                <View style={[global.f0_3, global.center]}>
                    <View style={[l_note.line2]} />
                </View>

                <TouchableOpacity 
                    style={[global.center, global.f_row, global.container, global.mlr_5]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 2;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Text style={[l_note.btmText1]}>Content</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[global.center, global.f_row, global.container, global.mlr_5]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 0;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Text style={[l_note.btmText2]}>Title</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[global.center, global.f_row, global.container, global.mlr_5]}
                    onPress={() => {
                        noteDetailInfor.data[noteDetailInfor.curSegment].style = 5;
                        noteDetailInfor.reset = 0;
                    }}
                >
                    <Text style={[l_note.btmText3]}>Header</Text>
                </TouchableOpacity>
            </View>

            <VerticalLine width={width} bottom={0}/>
        </View>
    );
};

export default BtmStyle;