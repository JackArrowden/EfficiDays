// Library
import { View, TouchableOpacity, Dimensions, FlatList, Keyboard, Animated} from "react-native";
import React, { useEffect, useRef, useState } from "react";

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
import { fileDir, isNewFile } from "../../data/noteDir";
import { getNoteDetailInfor, noteDetailInfor } from "../../data/notes/noteDetails";
import BtmStyle from "../../components/Note/btmStyle";

export default function ViewNote() {
  const { width, height } = Dimensions.get('screen');

  const [isDisplayed, setDisplayed] = useState(false);
  const [noteDetails, setNoteDetails] = useState([]);
  const [isGetData, setIsGetData] = useState(false); // Check whether the system have already read the data file
  const [isSetNote, setIsSetNote] = useState(true); // Check whether the system set the initial part for the note
  const [btmPosition, setBtmPosition] = useState(new Animated.Value(30)); // Khởi tạo vị trí mặc định

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      Animated.timing(btmPosition, {
        toValue: e.endCoordinates.height,
        duration: e.duration,
        useNativeDriver: false,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => {
      Animated.timing(btmPosition, {
        toValue: 30,
        duration: e.duration,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [btmPosition]);

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
    noteDetailInfor.autoFocus = false;
  }

  const handleBlur = () => {
    setDisplayed(false);
  }

  const textInputRef = useRef(null);
  const delSegment = useRef(null);
  const addSegment = useRef(null);

  const handlePress = () => {
    textInputRef.current.focus();
  }

  const isAdded = () => {
    setTimeout(() => {
      if (noteDetailInfor.data.length > 0 && noteDetailInfor.id + 1 == noteDetailInfor.data.length - 1) {
        textInputRef.current.focus();
        textInputRef.current.setSelection(0);
      } else {
        addSegment.current.focus();
        addSegment.current.setSelection(0);
      }
      
    }, 100);
  }

  const isDeleted = () => {
    setNoteDetails(noteDetailInfor.data);

    setTimeout(() => {
      if (noteDetailInfor.data.length > 0 && noteDetailInfor.id == noteDetailInfor.data.length) {
        textInputRef.current.focus();
      } else {
        delSegment.current.focus();
      }
    }, 100);
  } 

  const updatePrev = (id) => {
    setDisplayed((data) =>
      data.map((item) =>
        item.id === id ? { ...item} : item
      )
    );
  };
  console.log("Giờ t log ngay nè: ", noteDetails);
  
  return (
    <View style={[global.f, global.center, global.self, global.setHW(height, width), l_note.pRel]}>
      <HeaderDetail width={width} isDisplayed={isDisplayed} setDisplayed={setDisplayed}/>

      <Animated.View style={[l_note.setW('100%'), l_note.setBottom(btmPosition), global.p20, l_note.noteList]}>
        <TouchableOpacity style={[l_note.hWAuto]} onPress={handlePress} activeOpacity={1}>
          <FlatList 
            style={[l_note.hWAuto]}
            data={noteDetails}
            renderItem={({item, index}) => (
              <NoteSegment 
                index={index}
                content={noteDetailInfor.data[index].content} 
                style={listStyles[item.style]} 
                textInputRef={
                  index === noteDetailInfor.data.length - 1 ? textInputRef : 
                    ((noteDetailInfor.isAddNew && noteDetailInfor.id + 1 === index) ? addSegment : 
                    ((!noteDetailInfor.isAddNew && noteDetailInfor.id > 0 && noteDetailInfor.id - 1 === index) ? delSegment : undefined))
                } 
                onFocus={handleFocus} 
                onBlur={handleBlur}
                noteDetails={noteDetails}
                setNoteDetails={setNoteDetails}
                isDeleted={isDeleted}
                isAdded={isAdded}
              />
            )}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[global.f, global.center, global.setHW(50, width), l_note.global, l_note.setBottom(btmPosition)]}>
        <BtmStyle width={width} bottom={0}/>
      </Animated.View>
    </View>
  );
}
// let array = [
//   {content: "First note", style: "Preview of first note"}, 
//   {content: "Second note", style: "Preview of second note"}, 
//   {content: "Third note", style: "Preview of third note"}
// ];