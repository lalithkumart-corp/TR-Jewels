import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignIn from '../auth/signin/SignIn';
import Signup from '../auth/signup/SignUp';

export default class AuthScreen extends Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Signin" component={SignIn} />
                <Tab.Screen name="Signup" component={Signup} />
            </Tab.Navigator>
        )
    }
}