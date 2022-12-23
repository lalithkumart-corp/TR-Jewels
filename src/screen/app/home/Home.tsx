import React, { Component } from "react";
import { View, Text, ScrollView } from 'react-native';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1/12, height: 40, padding: 10}}>
                    <Text> Header </Text>
                </View>
                <ScrollView>
                    
                </ScrollView>
            </View>
        )
    }
}