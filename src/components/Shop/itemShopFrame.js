import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import shopStyle from '../../style/shop';
import TokenFrame from './tokenFrame';

const ItemShopFrame = (props) => {
    return (
    <View >
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {shopStyle.itemShopStyle(props.height, props.width, props.backgroundColor)}>
                <Image 
                    source = {require("../../assets/images/icon.png")}
                    style = {shopStyle.imageStyle(props.height * 0.55, props.width * 0.85, 12)}
                /> 

                <TokenFrame 
                    numToken = {props.price} 
                    // tokenIcon = {props.tokenIcon}
                    backgroundColor = {props.tokenColor}
                    height = {props.height * 0.15}
                    width = {props.width * 0.9}
                />

                <Text style = {shopStyle.itemNameStyle(17)}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
    );
};

export default ItemShopFrame;