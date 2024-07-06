import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import shopStyle from '../../style/shop';

const TokenFrame = (props) => {
    const icon_path = "../../assets/icon/shop/tomato.png";
    return (
        <View style = {shopStyle.tokenFrameStyle(props.height, props.width, props.backgroundColor)}>
            <Image 
                source = {require(icon_path)}
                style = {shopStyle.imageStyle(props.height - 2, props.height - 2, 17)}
            />
            <Text style = {shopStyle.currencyStyle(props.height * 0.5)} >
                {props.numToken}
            </Text>
        </View>
    );
};

export default TokenFrame;