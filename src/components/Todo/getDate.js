import React from "react";
import { View, Text } from "react-native";

import l_todo from "../../style/todo";

const GetDate = () => {
    const date = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    var suffix = "th";
    switch (date.getDate()) {
        case 1:
        case 21:
        case 31:
            suffix = "st";
            break;
        case 2:
        case 22:
            suffix = "nd";
            break;
        case 3:
        case 23:
            suffix = "rd";
            break;
        default:
            suffix = "th";
    }
    const day = weekDays[date.getDay()] + ", ";
    const dateString = months[date.getMonth()] + " " + date.getDate() + suffix;
    return (
        <View style={[l_todo.DateTime]}>
            <Text style={[l_todo.WeekDay]}>{day}</Text>
            <Text style={[l_todo.MonthDay]}>{dateString}</Text>
        </View>
    );
}

export default GetDate;