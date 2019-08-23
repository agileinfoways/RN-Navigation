import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    BackHandler
} from "react-native";
import { NavigationEvents, NavigationActions } from "react-navigation";
import styles from "../styles/index";

class Transition1Screen extends Component {
    constructor(props) {
        super(props)
        console.log(JSON.stringify(this.props))
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        // console.log('this.props', this.props)
        console.log('this.props', this.props.navigation.state.key)

        if (this.props.navigation.state.params != undefined) {
            this.props.navigation.goBack(this.props.navigation.state.params.key)
        } else {
            this.props.navigation.goBack()
        }
        return true;
    }

    customBackPress = () => {
        // console.log('this.props', this.props)
        // console.log('this.props', this.props.navigation.state.key)

        if (this.props.navigation.state.key != undefined) {
            this.props.navigation.goBack("Splash-01")
        } else {
            this.props.navigation.goBack()
        }
        return true;
    }

    render() {
        const {
            navigate, state, goBack, setParams, getParam, dispatch, dangerouslyGetParent,
            push, pop, popToTop, replace, reset, dismiss
        } = this.props.navigation;

        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={payload => {
                        console.log('will focus', payload)
                    }}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                />
                {/* <Text>{"State Param Name: " + state.params.name}</Text> */}
                <Text>{"State Param Name: " + getParam('name', 'Dipak')}</Text>
                <Text onPress={() => setParams({ name: 'Sahil' })} style={styles.textStyle}>
                    Click here to change param name
                </Text>
                <Text onPress={() => {
                    navigate({
                        routeName: "Transition2",
                        key: "Transition1"
                    })
                }} style={styles.textStyle}>
                    Go to next screen
                </Text>

                <Text onPress={this.handleBackPress} style={styles.textStyle}>
                    Back Press of Android by navigation key
                </Text>

                <Text onPress={this.customBackPress} style={styles.textStyle}>
                    Back Press by custom navigation key
                </Text>

                <Text onPress={() => goBack(null)} style={styles.textStyle}>
                    Go back anywhere by passing null
                </Text>

                <Text onPress={() => {
                    const navigateAction = NavigationActions.navigate({
                        routeName: 'Transition2',
                        params: {},
                        // navigate can have a nested navigate action that will be run inside the child router
                        // action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
                    });
                    dispatch(navigateAction);
                }} style={styles.textStyle}>
                    Dispatch
                </Text>

                <Text onPress={() => {
                    console.log(dangerouslyGetParent())
                }} style={styles.textStyle}>
                    Dangerously get parent
                </Text>

                <Text style={{ marginTop: 20 }}>StackActions</Text>
                <Text onPress={() => navigate("Splash")} style={styles.textStyle}>
                    Navigate to Splash
                </Text>
                <Text onPress={() => push("Splash")} style={styles.textStyle}>
                    Push Splash
                </Text>
                {/* In pop we can pass "n" as pop(n), number of screens we want to go back */}
                <Text onPress={() => pop()} style={styles.textStyle}>
                    Pop
                </Text>
                <Text onPress={() => popToTop()} style={styles.textStyle}>
                    Pop to top
                </Text>
                <Text onPress={() => replace("Transition2")} style={styles.textStyle}>
                    Replace
                </Text>
                <Text onPress={() => reset(
                    [
                        NavigationActions.navigate({ routeName: 'Transition' }),
                        // NavigationActions.navigate({ routeName: 'Splash' })
                    ],
                    0
                )}
                    style={styles.textStyle}>
                    Reset
                </Text>

                {/* (Call this if you're in a nested (child) stack and want to dismiss the entire stack, returning to the parent stack.) */}
                <Text onPress={() => dismiss()} style={styles.textStyle}>
                    Dismiss
                </Text>
            </View>
        );
    }
}
export default Transition1Screen;