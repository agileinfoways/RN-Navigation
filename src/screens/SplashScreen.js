import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "../styles/index";

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    this.props.navigation.navigate({ routeName: "Transition", key: "Splash-01" })
                }} style={styles.textStyle}>Go to next screen</Text>
            </View>
        );
    }
}
export default SplashScreen;