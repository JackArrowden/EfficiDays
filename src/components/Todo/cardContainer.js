import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

import global from '../../style/global';

import CheckBox from './checkBox';
import l_todo from '../../style/todo';

const checking = () => { /*Do something when checkbox is checked*/}

const getCard = (path) => {
    //Read file to get array of cards
    arr = [
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        },
        {
            title: "Card Title",
            description: "Card Description",
            checked: false
        }
    ];
    return arr;
}

const CardContainer = ({width, height, path}) => {
    //const navigation = useNavigation();
    let containerwidth = width * 1.05;
    let containerheight = height * 0.7;
    let cardwidth = containerwidth * 0.9;
    let cardheight = height * 0.1;
    return (
        <View style={ [l_todo.CardContainer, l_todo.bg_darkgreen,global.f_col, global.setHW(containerheight, containerwidth)]}>
            <Text style={ [l_todo.todo_title]}>To-Do List</Text>
            <FlatList
                data={getCard(path)}
                renderItem={({item}) => (
                    <View style={[global.f_col, l_todo.card, l_todo.bg_white, global.setHW(cardheight, cardwidth)]}>
                        <CheckBox color={"#BFF6C3"} radius = {10}></CheckBox>
                        <View style={[l_todo.cardContent]}>
                            <Text style={[l_todo.cardTitle]}>{item.title}</Text>
                            <Text style={[l_todo.cardDescription]}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}


export default CardContainer;