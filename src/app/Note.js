import { View, Dimensions, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

// Style
import global from "../style/global";

// Component
import SearchBar from "../components/Note/searchBar";
import AddNoteBtn from "../components/Note/addNoteBtn";
import NoteFrame from "../components/Note/noteFrame";
import readNotePreview from "../components/Note/readNotePreview";
import { readFileIndex } from "../components/Note/readFileIndex";
import { fileDir } from "../data/noteDir";
import { listNote, saveListNote } from "../data/notes/listNote";

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
      listNote.fileID = fileId;
    }
  }, [isGetData]);

  useFocusEffect(() => {
    if (listNote.isReset) {
      listNote.isReset = false;
      getNotePrev();
    }
  })

  const getNotePrev = () => {
    readNotePreview(fileDir.curDir)
    .then(data => {
      setIsGetData(true);
      setNotePrev(data);
    })
  }

  const getFileId = () => {
    readFileIndex(fileDir.fileIndex)
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
            data={notePrev}
          />
        )}
      />
    </View>
  )
}