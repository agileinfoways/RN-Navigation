import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "../styles/index";
import { SwitchActions } from "react-navigation";

class SwitchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 20 }}>{"Switch Actions:"}</Text>

                <Text onPress={() => {
                    this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: "Auth" }));
                }} style={styles.textStyle}>Jump to</Text>
            </View>
        );
    }
}
export default SwitchScreen;