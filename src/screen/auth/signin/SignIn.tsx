import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { doLogin } from '../../../actions/auth';
import { TextInput, Button }  from 'react-native-paper';

interface SignInState {
    userName: string,
    password: string
}

class SignIn extends Component {
    state: SignInState;
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.bindMethods();
    }
    bindMethods() {
        this.onChange = this.onChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }
    onLoginClick() {

    }
    onChange(text, identifier) {
        let newState = {...this.state};
        switch(identifier) {
            case 'userName': 
                newState.userName = text;
                break;
            case 'password': 
                newState.password = text;
                break;
        }
        this.setState(newState);
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flex: 0.2}}>
                    <TextInput
                        label='UserName'
                        value={this.state.userName}
                        onChangeText={text => this.onChange(text, 'userName')}
                        accessibilityStates={[]}
                        style={{margin: 10}}
                    />
                    <TextInput
                        label='Password'
                        value={this.state.password}
                        onChangeText={text => this.onChange(text, 'password')}
                        accessibilityStates={[]}
                        style={{margin: 10}}
                    />
                    <Button onPress={this.onLoginClick} accessibilityStates={[]}>SignIn</Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {doLogin})(SignIn)