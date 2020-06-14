import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Signup page</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(SignUp);