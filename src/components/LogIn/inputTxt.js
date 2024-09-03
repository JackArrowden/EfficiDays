import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import global from '../../style/global';
import l_login from '../../style/loginRegister';

const InputTxt = ({
  height = 36, 
  type = "Username", 
  isSecure = false,
  text,
  setText = Function
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[global.f, l_login.setHW(height), l_login.global]}>
      {isSecure ? (
        <TextInput placeholder={type} style={[l_login.input]} value={text} onChangeText={setText} secureTextEntry/>
      ) : (
        <TextInput placeholder={type} style={[l_login.input]} value={text} onChangeText={setText}/>
      )}
    </View>
  );
};

export default InputTxt;