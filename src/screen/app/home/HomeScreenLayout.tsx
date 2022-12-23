import React, { Component } from "react";
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Shop from '../shop/Shop';
import HelpLine from '../helpline/Helpline';

export default class HomeScreenLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{
                    title: 'Home', 
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" color={color} size={size} />
                    )}
                } 
                />
                <Tab.Screen name="Shop" component={Shop} options={{
                    title: 'Home', 
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcons name="shopping-bag" color={color} size={size} />
                    )}
                } 
                />
                <Tab.Screen name="Favorites" component={Shop} options={{
                    title: 'My Fav', 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
                    )}
                } 
                />
                <Tab.Screen name="HelpLine" component={HelpLine} options={{
                    title: 'Help Line',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="wechat" size={size} color={color}/>
                    )}
                }/>
            </Tab.Navigator>
        )
    }
}