import { React } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import l_todo from "../../style/todo";

const AddTask = () => {
    return (
        <TouchableOpacity style={[l_todo.addTask]}>
            <Image
                src="require('../assets/icon/note/addNote2.png')"
                style={{
                    "width": 20,
                    "height": 20,
                    "tintColor": '#388C3B',
                    "zIndex": 1
                }}
            ></Image>
            <Text style={[l_todo.taskBtnText]}>Add Task</Text>
        </TouchableOpacity>
    );
}

export default AddTask;