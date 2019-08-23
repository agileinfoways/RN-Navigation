import { Animated, Easing, Button } from "react-native";
import React, { Component } from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  BottomTabBar,
  createMaterialTopTabNavigator
} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from "./src/screens/SplashScreen";
import TransitionScreen from "./src/screens/TransitionScreen";
import Transition1Screen from "./src/screens/Transition1Screen";
import Transition2Screen from "./src/screens/Transition2Screen";
import SwitchScreen from "./src/screens/SwitchScreen";
import { useScreens } from 'react-native-screens';

/**
 * Optimize memory usage and performance
 * https://reactnavigation.org/docs/en/react-native-screens.html
 */
useScreens();

/**
 * For screen tracking must check below link, it will do screen tracking in just few lines of code
 * https://reactnavigation.org/docs/en/screen-tracking.html
 */

/**
 * If some want to change status bar background color runtime, then one can use below link:
 * https://reactnavigation.org/docs/en/status-bar.html
 */

/**
 * In auth stack we can get below items:
 * navigate - arguments: routeName, params, action and key
 * goBack - go back to previous screen, specific screen and anywhere
    (Note that the null parameter is useful in the case of nested StackNavigators to go back on a parent 
    navigator when the child navigator already has only one item in the stack.)
 * addListener - Subscribe to updates to navigation lifecycle
    (addListener will only work at first open if that screen is closed then listener want work. 
    If we want focus callbacks on each time when screen focused then use NavigationEvents)
 - NavigationEvents - React component providing a declarative API to subscribe to navigation events. 
    It will subscribe to navigation events on mount, and unsubscribe on unmount.
 * isFocused - Query the focused state of the screen.
    let isFocused = this.props.navigation.isFocused();
 - withNavigationFocus - withNavigationFocus is a higher order component which passes the isFocused prop into a wrapped component.
 * state - The screen's current state/route
 * setParams - Make changes to route params
 * getParam - Get a specific param value with a fallback 
    (get params by different ways: direct from state and other with fallback)
 * dispatch - Send an action to the router
 * dangerouslyGetParent - get parent navigator
 * Stack Actions - Push, Pop, PopToTop, Replace, Reset, Dismiss
 * Navigation Actions - Navigate, Back, Set Params
 */
const AuthStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: () => ({
        title: "Splash Screen",
        headerBackTitle: null,
        headerTruncatedBackTitle: "Back"
      })
    },
    Transition: {
      screen: TransitionScreen,
      navigationOptions: () => ({
        title: "Transition Screen",
      })
    },
    Transition1: {
      screen: Transition1Screen,
      navigationOptions: () => ({
        title: "Transition1 Screen",
      })
    },
    Transition2: {
      screen: Transition2Screen,
      navigationOptions: () => ({
        title: "Transition2 Screen",
      })
    }
  },
  {
    initialRouteName: 'Splash',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    })
  }
)

/**
 * SwitchActions reference
 * JumpTo - Jump to a route in the navigator
 */
const SwitchStack = createStackNavigator(
  {
    SwitchScreen: {
      screen: SwitchScreen,
      navigationOptions: () => ({
        title: "Switch Screen"
      })
    }
  },
  {
    initialRouteName: "SwitchScreen"
  }
)

const App = createSwitchNavigator(
  {
    Auth: AuthStack,
    // App: AppStack,
    SwitchScreen: SwitchStack
  },
  {
    initialRouteName: "Auth"
  }
)

export default createAppContainer(App);
