import React, { Component } from "react";
import {
    View,
    Text,
    InteractionManager,
    StatusBar
} from "react-native";
import { withNavigationFocus, NavigationActions, StackActions, SwitchActions } from "react-navigation";
import styles from "../styles/index";

class Transition2Screen extends Component {
    /* componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#0000FF');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    } */

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ecf0f1"
                />
                {/* check is screen is in focus or not */}
                {console.log("isFocused:", this.props.isFocused)}

                <Text>{"State Param Name: " + this.props.navigation.getParam('name', 'Hello World')}</Text>
                <Text onPress={() => {
                    this.props.navigation.navigate("SwitchScreen")
                }} style={styles.textStyle}> Go to next stack</Text>

                <Text style={{ marginTop: 20 }}>{"Navigation Actions:"}</Text>
                <Text onPress={() => {
                    const navigateAction = NavigationActions.navigate({
                        routeName: 'Transition1',
                        params: { name: "Hello" },
                        // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
                    });

                    this.props.navigation.dispatch(navigateAction);
                }} style={styles.textStyle}>NavigationActions Navigate</Text>

                <Text onPress={() => {
                    const backAction = NavigationActions.back({
                        key: 'Splash-01',
                    });
                    this.props.navigation.dispatch(backAction);
                }} style={styles.textStyle}>NavigationActions Back</Text>

                <Text onPress={() => {
                    const setParamsAction = NavigationActions.setParams({
                        params: { name: "Hello" },
                        key: this.props.navigation.state.key
                    });
                    this.props.navigation.dispatch(setParamsAction);
                }} style={styles.textStyle}>NavigationActions Set Params</Text>
            </View>
        );
    }
}
export default withNavigationFocus(Transition2Screen);