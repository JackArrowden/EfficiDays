import { View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import global from "../style/global";

import SearchBar from "../components/Note/searchBar";
import AddNoteBtn from "../components/Note/addNoteBtn";
import NoteFrame from "../components/Note/noteFrame";

export default function Note() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48;

  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width)]}>
      <SearchBar height={inHeight}/>
      <AddNoteBtn height={inHeight} nav="ViewNote"/>

      <ScrollView style={[global.f_col, global.setHW(inHeight / 2)]}>
        <NoteFrame height={inHeight} textHeader="Your first note" notePreview="Details of your first note..." nav="ViewNote"/>
        <NoteFrame height={inHeight} textHeader="Your second note" notePreview="Details of your second note..."/>
        <NoteFrame height={inHeight} textHeader="Your third note" notePreview="Details of your third note..."/>
        <NoteFrame height={inHeight} textHeader="Your fourth note" notePreview="Details of your fourth note..."/>
        <NoteFrame height={inHeight} textHeader="Your fifth note" notePreview="Details of your fifth note..."/>
        <NoteFrame height={inHeight} textHeader="Your sixth note" notePreview="Details of your sixth note..."/>
      </ScrollView>
    </View>
  )
}