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
import { readFileIndex, writeFileIndex } from "../components/Note/readFileIndex";
import { curDir, fileIndex } from "../data/noteDir";
import deleteFile from "../components/Note/deleteFile";

export default function Note() {
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const [notePrev, setNotePrev] = useState([]);
  const [fileId, setFileId] = useState(0);
  const [isGetData, setIsGetData] = useState(false);
  
  useEffect(() => {
    if (!isGetData) {
      getNotePrev();
      getFileId();
    }
  }, [isGetData]);

  const getNotePrev = () => {
    readNotePreview(curDir)
    .then(data => {
      setIsGetData(true);
      setNotePrev(data);
    })
  }

  const getFileId = () => {
    console.log(fileIndex);
    readFileIndex(fileIndex)
    .then(data => {
      setFileId(data);
    })
  }

  return (
    <View style={[global.f_col, global.container, global.self, global.setHW(inHeight, width)]}>
      <SearchBar height={inHeight}/>
      <AddNoteBtn height={inHeight} nav="ViewNote" fileIndex={fileId} setFileIndex={setFileId} data={notePrev}/>

      <FlatList
        data={notePrev}
        renderItem={({item}) => (
          <NoteFrame 
            height={inHeight} 
            textHeader={item.textHeader} 
            notePreview={item.notePreview} 
            fileName={item.fileName}
            nav="ViewNote"
          />
        )}
      />
    </View>
  )
}