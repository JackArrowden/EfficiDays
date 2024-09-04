import { View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import global from "../style/global"
import l_login from "../style/loginRegister";
import InputTxt from "../components/LogIn/inputTxt";

import { readListAccs } from "../components/LogIn/accountsFileHandlers";
import { accFile, fileAccDir, listAccReset, listAccsDirs, updateFileAccDir } from "../data/accDir";
import { readAccInfor } from "../components/Profile/accInforHandlers";
import { noteFile, updateFileDir } from "../data/noteDir";
import { accInfor } from "../data/profile/account";
import { listNote } from "../data/notes/listNote";

export default function LogIn() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');
    const inputHeight = height / 8 * 0.8;
    const [listAccs, setListAccs] = useState([]);
    const [isGetData, setIsGetData] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        if (!isGetData) {
            getListAccs();
        }
    }, [isGetData]);

    useFocusEffect(() => {
        if (listAccReset.isReset1) {
            getListAccs();
            listAccReset.isReset1 = false;
        }
    })

    const getListAccs = () => {
        readListAccs(listAccsDirs)
        .then(data => {
            setIsGetData(true);
            setListAccs(data);
        })
    }

    const loginSystem = ({name, pass}) => {
        for (let index = 0; index < listAccs.length; index++) {
            if (listAccs[index].username == name && listAccs[index].password == pass) {
                accFile.fileName = listAccs[index].fileName;
                listNote.isReset = true;
                updateFileAccDir();
                return "Success";
            }
        }
        return "Wrong username or password";
    }

    return (
        <View style={[global.f, global.container, global.self, global.setHW(height, width)]}>
            <View style={[global.f, global.container, global.f_col, global.setHW(height / 4 * 3, width)]}>
                <InputTxt height={inputHeight} type="Username" text={username} setText={setUsername}/>
                <InputTxt height={inputHeight} type="Password" text={password} setText={setPassword} isSecure={true}/>

                <View style={[global.f, l_login.global, global.mt_48]}>
                    <TouchableOpacity 
                        style={[global.container, l_login.self, l_login.setHW(height / 16, width / 3), l_login.btn1]}
                        onPress={()=>{
                            if (!username || !password) Alert.alert("Warning", "All form must be entered");
                            else {
                                let result = loginSystem({name: username, pass: password});
                                if (result != "Success") Alert.alert("Error", result);
                                else {
                                    readAccInfor(fileAccDir.fileAccDir)
                                    .then (data => {
                                        accInfor.id = data[0].id;
                                        accInfor.numTomatoes = data[0].numTomatoes;
                                        accInfor.accountName = data[0].accountName;
                                        accInfor.username = data[0].username;
                                        accInfor.password = data[0].password;
                                        accInfor.birthday = data[0].birthday;
                                        accInfor.learningTime = data[0].learningTime;
                                        accInfor.listNoteFile = Array.from(data[0].listNoteFile);
                                        accInfor.listTodoFile = Array.from(data[0].listTodoFile);
                                        accInfor.listBoughtItems = Array.from(data[0].listBoughtItems); 
                                        
                                        noteFile.curDir = "acc" + accInfor.id + "NotePreview";
                                        noteFile.fileIndex = "acc" + accInfor.id + "FileIndex";
                                        updateFileDir();
                                        navigation.push('Tabs');
                                    });
                                }
                            }
                        }}
                    >
                        <Text style={[l_login.self, l_login.txt1]}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={[global.f, global.container, global.f_row, l_login.global, global.mt_96]}>
                    <Text style={[l_login.self, l_login.txt]}>Don't have any account?</Text>
                    <TouchableOpacity 
                        style={[global.container, l_login.self, l_login.setHW(height / 32, width / 6), l_login.btn2]} 
                        onPress={()=> {
                            listAccReset.isReset2 = true;
                            navigation.navigate('Register');
                        }}
                    >
                        <Text style={[l_login.txt2]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}