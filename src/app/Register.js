import { View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import global from "../style/global"
import l_login from "../style/loginRegister";

import InputTxt from "../components/LogIn/inputTxt";
import { readListAccs, writeListAccs } from "../components/LogIn/accountsFileHandlers";
import { accFile, accId, fileAccDir, listAccReset, listAccsDirs, updateFileAccDir } from "../data/accDir";
import { readAccID, writeAccId } from "../components/LogIn/accIdHandlers";
import { writeAccInfor } from "../components/Profile/accInforHandlers";
import { accInfor } from "../data/profile/account";

export default function Register() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');
    const inputHeight = height / 8 * 0.8;

    const [listAccs, setListAccs] = useState([]);
    const [fileId, setFileId] = useState(0);
    const [isGetData, setIsGetData] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    useEffect(() => {
        if (!isGetData) {
            getListAccs();
            getFileId();
        }
    }, [isGetData]);

    useFocusEffect(() => {
        if (listAccReset.isReset2) {
            getListAccs();
            getFileId
            listAccReset.isReset2 = false;
        }
    })

    const getListAccs = () => {
        readListAccs(listAccsDirs)
        .then(data => {
            setIsGetData(true);
            setListAccs(data);
        })
    }

    const getFileId = () => {
        readAccID(accId)
        .then(data => {
            setFileId(data);
        })
    }

    const createAcc = ({name, pass}) => {
        for (let index = 0; index < listAccs.length; index++) {
            if (listAccs[index].username == username) return "This username is existing in the system!";
        }
        listAccs.push({username : name, password : pass, fileName : "acc" + fileId.toString()});
        writeListAccs(listAccs, listAccsDirs);
        
        // Create user's file
        accFile.fileName = "acc" + fileId.toString();
        updateFileAccDir();
        accInfor.username = name;
        accInfor.password = pass;
        writeAccInfor(fileAccDir.fileAccDir);

        // Update file ID
        fileId += 1;
        writeAccId(fileId, accId);

        return "Success";
    }
  
    return (
        <View style={[global.f, global.container, global.self, global.setHW(height, width)]}>
            <View style={[global.f, global.container, global.f_col, global.setHW(height / 4 * 3, width)]}>
                <InputTxt height={inputHeight} type="Username" text={username} setText={setUsername}/>
                <InputTxt height={inputHeight} type="Password" text={password} setText={setPassword} isSecure={true}/>
                <InputTxt height={inputHeight} type="Confirm password" text={confirmPassword} setText={setConfirmPassword} isSecure={true}/>

                <View style={[global.f, l_login.global, global.mt_48]}>
                    <TouchableOpacity 
                        style={[global.container, l_login.self, l_login.setHW(height / 16, width / 3), l_login.btn1]}
                        onPress={()=> {
                        if (!username || !password || !confirmPassword) Alert.alert("Warning", "All form must be entered");
                        else if (password != confirmPassword) Alert.alert("Password error", "You have confirmed the wrong password!");
                        else {
                            let result = createAcc({name: username, pass: password});
                            if (result != "Success") Alert.alert("Error", result);
                            else {
                                Alert.alert("Success", "Your account has been created");
                                listAccReset.isReset1 = true;
                                navigation.navigate('Login')
                            }
                        }
                        }}
                    >
                        <Text style={[l_login.self, l_login.txt1]}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={[global.f, global.container, global.f_row, l_login.global, global.mt_96]}>
                    <Text style={[l_login.self, l_login.txt]}>Already have account?</Text>
                    <TouchableOpacity 
                        style={[global.container, l_login.self, l_login.setHW(height / 32, width / 6), l_login.btn2]} 
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={[l_login.txt2]}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}