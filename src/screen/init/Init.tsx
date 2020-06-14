import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import AuthScreen from "../auth/AuthScreen";

class Init extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTimeVisit: true
        }
    }
    componentDidMount() {
        this.setState({firstTimeVisit: false});
    }
    render() {
        return (
                this.state.firstTimeVisit ? (<View><Text>Loading...</Text></View>) : (
                    this.props.auth.isAuthenticated ? (
                        <View><Text>HOME...</Text></View>
                    ) : (
                        <AuthScreen />
                    )
                )
                
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
  
export default connect(mapStateToProps, {})(Init)