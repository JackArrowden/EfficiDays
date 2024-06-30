import { View, Dimensions, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

// Style
import global from "../style/global";

// Component
import SearchBar from "../components/Note/searchBar";
import AddNoteBtn from "../components/Note/addNoteBtn";
import NoteFrame from "../components/Note/noteFrame";
import readNotePreview from "../components/Note/readNotePreview";
import writeNotePreview from "../components/Note/writeNotePreview";
import { curDir } from "../data/noteDir";

export default function Note() {
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const [notePrev, setNotePrev] = useState([]);
  
  useEffect(() => {
    getNotePrev();
  }, []);

  const getNotePrev = () => {
    readNotePreview(curDir)
      .then(data => {
        console.log(data);
        setNotePrev(data);
      })
  }

  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width)]}>
      <SearchBar height={inHeight}/>
      <AddNoteBtn height={inHeight} nav="ViewNote"/>

      <FlatList
        data={notePrev}
        renderItem={({item}) => (
          <NoteFrame 
            height={inHeight} 
            textHeader={item.textHeader} 
            notePreview={item.notePreview} 
            nav="ViewNote"
          />
        )}
      />
    </View>
  )
}

let array = [
    {textHeader: "First note", notePreview: "Preview of first note", fileName: "f1"}, 
    {textHeader: "Second note", notePreview: "Preview of second note", fileName: "f2"}, 
    {textHeader: "Third note", notePreview: "Preview of third note", fileName: "f3"}
];

// writeNotePreview(array, curDir);