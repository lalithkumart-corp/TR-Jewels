import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import AuthScreen from "../auth/AuthScreen";
import { setDBReference } from '../../actions/database';
import { isAuthenticated } from '../../actions/auth';
import AppRouter from "../app/AppRouter";
class Init extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTimeVisit: true
        }
        this.props.setDBReference();
    }
    componentDidMount() {
        this.setState({firstTimeVisit: false});
        this.props.isAuthenticated();
    }
    render() {
        return (
                this.state.firstTimeVisit ? (<View><Text>Loading...</Text></View>) : (
                    this.props.auth.isAuthenticated ? (
                        <AppRouter />
                    ) : (
                        <AuthScreen />
                    )
                )
                
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    db: state.db
});
  
export default connect(mapStateToProps, {setDBReference, isAuthenticated})(Init)