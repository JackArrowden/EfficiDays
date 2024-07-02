import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import HeaderDetail from "../../components/Note/headerDetail";
import NoteSegment from "../../components/Note/noteSegment";
import VerticalLine from "../../components/Note/verticalLine";

import global from "../../style/global";
import l_note from "../../style/note";

export default function ViewNote() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');

  const [isDisplayed, setDisplayed] = useState(false);

  const handleFocus = () => {
    setDisplayed(true);
  }

  const textInputRef = useRef(null);

  return (
    <View style={[global.f, global.center, global.self, global.setHW(height, width), l_note.pRel]}>
      <HeaderDetail width={width} isDisplayed={isDisplayed} setDisplayed={setDisplayed} textInputRef={textInputRef}/>

      <ScrollView style={[l_note.setW('100%'), l_note.setBottom(100), global.p20, l_note.noteList]}>
        <NoteSegment onFocus={handleFocus}/>
      </ScrollView>

      <VerticalLine width={width} bottom={80}/>
      <VerticalLine width={width} bottom={30}/>
    </View>
  );
}