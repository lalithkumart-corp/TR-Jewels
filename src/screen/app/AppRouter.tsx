import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import HomeScreenLayout from './home/HomeScreenLayout';

export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreenLayout} />
            </Drawer.Navigator>
        )
    }
}