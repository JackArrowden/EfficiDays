import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Text } from "react-native";

import Todo from "./Todo";
import Learn from "./Learn";
import Shop from "./Shop";
import Profile from "./Profile";
import Note from "./Note";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Todo"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    height: 90,
                }
            }}
        >
            <Tab.Screen 
                name="Learn" 
                component={Learn} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/icon/btmBar/learn2.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Learn</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Note" 
                component={Note} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/icon/btmBar/note2.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Note</Text>
                        </View>
                    )
                }}                
            />
            <Tab.Screen 
                name="Todo" 
                component={Todo} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/icon/btmBar/todo2.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Todo</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Shop" 
                component={Shop} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/icon/btmBar/shop2.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Shop</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/icon/btmBar/profile2.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Profile</Text>
                        </View>
                    )
                }}                
            />
        </Tab.Navigator>
    )
}

export default Tabs;