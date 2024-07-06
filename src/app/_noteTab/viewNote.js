// Library
import { View, TouchableOpacity, Dimensions, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import HeaderDetail from "../../components/Note/headerDetail";
import NoteSegment from "../../components/Note/noteSegment";
import VerticalLine from "../../components/Note/verticalLine";

// Styles
import global from "../../style/global";
import l_note from "../../style/note";
import listStyles from "../../constants/listSegmentStyles";

// Data functions and variables
import readNoteDetails from "../../components/Note/readNoteDetails";
import writeNoteDetails from "../../components/Note/writeNoteDetail";
import { fileDir, isNewFile } from "../../data/noteDir";
import { getNoteDetailInfor, noteDetailInfor } from "../../data/notes/noteDetails";

export default function ViewNote() {
  const { width, height } = Dimensions.get('screen');

  const [isDisplayed, setDisplayed] = useState(false);
  const [noteDetails, setNoteDetails] = useState([]);
  const [isGetData, setIsGetData] = useState(false); // Check whether the system have already read the data file
  const [isSetNote, setIsSetNote] = useState(true); // Check whether the system set the initial part for the note

  if (!isNewFile.new) {
    useEffect(() => {
      if (!isGetData) {
        getNoteDetails();
      }
    }, [isGetData]);
  
    const getNoteDetails = () => {
      console.log(fileDir.fileDir);
      readNoteDetails(fileDir.fileDir)
      .then(data => {
          setIsGetData(true);
          getNoteDetailInfor(data);
          console.log(data);
          setNoteDetails(data);
        })
    }
  } else {
    useEffect(() => {
      if (isSetNote) {
        arr = [{content : "", style: 0}];
        setNoteDetails(arr);
        getNoteDetailInfor(arr);
        setIsSetNote(false);
      }
    }, [isSetNote]);
  }

  const handleFocus = () => {
    setDisplayed(true);
  }

  const handleBlur = () => {
    setDisplayed(false);
  }

  const textInputRef = useRef(null);

  const handlePress = () => {
    textInputRef.current.focus();
  }

  if (noteDetailInfor.isRefresh) {
    setTimeout(() => {
      // refs.current[components.length].focus();
      textInputRef.current.focus();
      noteDetailInfor.isRefresh = false;
    }, 100);
  }

  return (
    <View style={[global.f, global.center, global.self, global.setHW(height, width), l_note.pRel]}>
      <HeaderDetail width={width} isDisplayed={isDisplayed} setDisplayed={setDisplayed}/>

      <TouchableOpacity style={[l_note.setW('100%'), l_note.setBottom(100), global.p20, l_note.noteList]} onPress={handlePress} activeOpacity={1}>
        <FlatList 
          style={[l_note.hWAuto]}
          data={noteDetails}
          renderItem={({item, index}) => (
            <NoteSegment 
              index={index}
              content={item.content} 
              style={listStyles[item.style]} 
              textInputRef={textInputRef} 
              onFocus={handleFocus} 
              onBlur={handleBlur}
              noteDetails={noteDetails}
              setNoteDetails={setNoteDetails}
            />
          )}
        />
      </TouchableOpacity>

      <VerticalLine width={width} bottom={80}/>
      <VerticalLine width={width} bottom={30}/>
    </View>
  );
}
// let array = [
//   {content: "First note", style: "Preview of first note"}, 
//   {content: "Second note", style: "Preview of second note"}, 
//   {content: "Third note", style: "Preview of third note"}
// ];