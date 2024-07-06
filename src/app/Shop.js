import { View, Text, Dimensions, StyleSheet, FlatList} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import shopStyle from "../style/shop";
import TokenFrame from "../components/Shop/tokenFrame";
import ItemShopFrame from "../components/Shop/itemShopFrame";

const listShopItem = [
  {id: '1', name: 'Produce 1', price: 10},
  {id: '2', name: 'Farm skin', price: 100},
  {id: '4', name: 'white forest', price: 15},
  {id: '7', name: 'hero', price: 115},
  {id: '10', name: 'king', price: 55},
  {id: '11', name: 'Queen', price: 85},
];

export default function Shop() {
  const [numToken, setNumToken] = useState(10);
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('screen');
  const inHeight = height - 48;
  const inWidth = width - 48;


  const renderMethod = ({item}) => (
    <View style = {shopStyle.container}>
      <ItemShopFrame
        name = {item.name}
        height = {200}
        width = {150}
        backgroundColor = '#FFFFFF'
        tokenColor = '#E0FBE2'
        price = {item.price}
      />
    </View>
  );
  return (
    <View style = {shopStyle.shop}>
      <View style = {shopStyle.Header}>
        <Text style = {shopStyle.nameTab}>
          Shop
        </Text>
        <TokenFrame 
          numToken = {numToken} 
         // tokenIcon = 'tomato.png'
          height = {inHeight * 0.05}
          width = {inWidth * 0.4}
        />


      </View>
      <View style = {shopStyle.body}>
        <FlatList 
          data = {listShopItem}
          numColumns = {2}
          renderItem = {renderMethod}
          keyExtractor = {item => item.id}
        />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});