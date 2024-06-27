import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import l_todo from "../../style/todo";

const CheckBox = ({color = "#000", radius = 10}) => {
    return (
        <TouchableOpacity style={l_todo.checkBox(color, radius)} />
    )
}

export default CheckBox;