import { React } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import l_todo from "../../style/todo";

const DeleteTask = () => {
    return (
        <TouchableOpacity style={[l_todo.addTask]}>
            <Image
                source={require('../../assets/icon/todo/trash.png')}
                style={{
                    "width": 20,
                    "height": 20,
                    "tintColor": '#388C3B',
                    "zIndex": 1,
                    "marginRight": 5,
                }}
            ></Image>
            <Text style={[l_todo.taskBtnText]}>Delete All</Text>
        </TouchableOpacity>
    );
}

export default DeleteTask;