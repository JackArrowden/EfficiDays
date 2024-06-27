import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import global from '../../style/global';

import CheckBox from './checkBox';
import l_todo from '../../style/todo';

const checking = () => { /*Do something when checkbox is checked*/}

const getCard = (path) => {
    //Read file to get array of cards
    arr = [];
    arr.map((card) => { //mapping array to cards
        return (
            <View style={[global.f_col, l_todo.card, global.self, global.setHW(cardheight, cardwidth)]}>
                <CheckBox color={"#000"} radius = {"10"}></CheckBox>
                <View>
                    <Text>{ card.title }</Text>
                    <Text>{ card.content }</Text>
                </View>
            </View>
        )
    })
}

const CardContainer = ({width, height, path}) => {
    //const navigation = useNavigation();
    let containerwidth = width * 0.9;
    let cardwidth = containerwidth * 0.8;
    let cardheight = height * 0.3;
    return (
        <View style={[global.f_col, global.container, global.self, global.setHW(height, containerwidth)]}>
            { /*Card sample*/}
            <View style={[global.f_col, l_todo.card, l_todo.bg_darkgreen, global.setHW(cardheight, cardwidth)]}>
                <CheckBox color={"#000"} radius = {"10"}></CheckBox>
                <View style={[l_todo.cardContent]}>
                    <Text style={[l_todo.cardTitle]}>Card Title</Text>
                    <Text style={[l_todo.cardDescription]}>Card Description</Text>
                </View>
            </View>
        </View>
    )
}


export default CardContainer;