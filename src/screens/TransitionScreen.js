import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import styles from "../styles/index";

class TransitionScreen extends Component {
    constructor(props) {
        super(props);
        //whenever screen will focused
        this.willFocusSubscription = props.navigation.addListener(
            'willFocus',
            payload => {
                console.log('willFocus', payload);
            }
        );

        //whenever screen focused (if there was a transition, the transition completed)
        this.didFocusSubscription = props.navigation.addListener(
            'didFocus',
            payload => {
                console.log('didFocus', payload);
            }
        );

        //whenever screen will be unfocused
        this.willBlurSubscription = props.navigation.addListener(
            'willBlur',
            payload => {
                console.log('willBlur', payload);
            }
        );

        //whenever screen unfocused (if there was a transition, the transition completed)
        this.didBlurSubscription = props.navigation.addListener(
            'didBlur',
            payload => {
                console.log('didBlur', payload);
            }
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        console.log('Unmount')
        // Remove the event listener
        this.willFocusSubscription.remove();
        this.didFocusSubscription.remove();
        this.willBlurSubscription.remove();
        this.didBlurSubscription.remove();
    }

    render() {
        const {
            navigation: { navigate },
        } = this.props;
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    this.props.navigation.navigate("Transition1")
                }} style={styles.textStyle}>Go to next screen</Text>
                <Text onPress={() => {
                    this.props.navigation.navigate({
                        routeName: "Transition1",
                        params: { name: "Akshay", key: this.props.navigation.state.key },
                        key: "Transition"
                    })
                }} style={styles.textStyle}>Go to next screen with param and key.</Text>
            </View>
        );
    }
}
export default TransitionScreen;