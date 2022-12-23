import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { doLogin } from '../../../actions/auth';
import { TextInput, Button }  from 'react-native-paper';

interface SignInState {
    mobile: string,
    password: string
}

class SignIn extends Component {
    state: SignInState;
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: ''
        }
        this.bindMethods();
    }
    bindMethods() {
        this.onChange = this.onChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }
    async onLoginClick() {
        let newState = {...this.state};
        let sql = `SELECT * FROM user WHERE mobile="${this.state.mobile}" AND password="${this.state.password}"`;
        let res = await this.props.db.dbReference.executeSql(sql);
        console.log('SINGIN.TSX SQL + Rows Length = ', sql, res.rows.length);
        debugger;
        if(res.rows.length > 0)
            this.props.doLogin(res.rows.item(0));
    }

    onChange(text, identifier) {
        let newState = {...this.state};
        switch(identifier) {
            case 'mobile': 
                newState.mobile = text;
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
                        label='Mobile Number'
                        value={this.state.mobile}
                        onChangeText={text => this.onChange(text, 'mobile')}
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
    db: state.db
});
export default connect(mapStateToProps, {doLogin})(SignIn)