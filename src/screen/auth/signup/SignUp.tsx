import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface SignUpState {
    formData: {
        mobile: {
            inputVal: string
        },
        firstName: {
            inputVal: string
        },
        lastName: {
            inputVal: string
        },
        email: {
            inputVal: string
        },
        password: {
            inputVal: string
        },
        confirmPassword: {
            inputVal: string
        }
    }
}

class SignUp extends Component {
    state: SignUpState;
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                mobile: {
                    inputVal: ''
                },
                firstName: {
                    inputVal: ''
                },
                lastName: {
                    inputVal: ''
                },
                email: {
                    inputVal: ''
                },
                password: {
                    inputVal: ''
                },
                confirmPassword: {
                    inputVal: ''
                }
            }
        }
    }
    signUpClick() {

    }
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <TextInput 
                        label="Mobile"
                        value={this.state.formData.mobile.inputVal}
                        style={{margin: 10, marginTop: 30,}}
                        accessibilityStates={[]}/>
                    <TextInput 
                        label="First Name"
                        value={this.state.formData.firstName.inputVal}
                        style={{margin: 10}}
                        accessibilityStates={[]}/>
                    <TextInput 
                        label="Last Name"
                        value={this.state.formData.lastName.inputVal}
                        style={{margin: 10}}
                        accessibilityStates={[]}/>
                    <TextInput 
                        label="Email"
                        value={this.state.formData.email.inputVal}
                        style={{margin: 10}}
                        accessibilityStates={[]}/>
                    <TextInput 
                        label="Password"
                        value={this.state.formData.password.inputVal}
                        style={{margin: 10}}
                        accessibilityStates={[]}/>
                    <TextInput 
                        label="Confirm Password"
                        value={this.state.formData.confirmPassword.inputVal}
                        style={{margin: 10}}
                        accessibilityStates={[]}/>    
                    <Button onPress={this.signUpClick} accessibilityStates={[]} > Submit </Button>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(SignUp);