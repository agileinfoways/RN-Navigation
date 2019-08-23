# Project Setup

```markdown
yarn add react-navigation
yarn add react-native-gesture-handler react-native-reanimated
```

On iOS, to complete the linking, make sure you have Cocoapods installed. Then run:

```markdown
cd ios
pod install
cd ..
```

To finalize installation of react-native-gesture-handler for Android, be sure to make the necessary modifications to MainActivity.java:

```markdown
package com.reactnavigation;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNavigation";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

}
```

ref link: <https://reactnavigation.org/docs/en/getting-started.html>

## Documentation

In auth stack you can get below items:

- navigate - arguments: _routeName, params, action and key_
- goBack - go back to previous screen, specific screen and anywhere _(Note that the null parameter is useful in the case of nested StackNavigators to go back on a parent navigator when the child navigator already has only one item in the stack.)_
- addListener - Subscribe to updates to navigation lifecycle _(addListener will only work at first open if that screen is closed then listener want work. If we want focus callbacks on each time when screen focused then use NavigationEvents)_
- NavigationEvents - React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount.
- isFocused - Query the focused state of the screen.

  > let isFocused = this.props.navigation.isFocused();

- withNavigationFocus - withNavigationFocus is a higher order component which passes the isFocused prop into a wrapped component.
- state - The screen's current state/route
- setParams - Make changes to route params
- getParam - Get a specific param value with a fallback _(get params by different ways: direct from state and other with fallback)_
- dispatch - Send an action to the router
- dangerouslyGetParent - get parent navigator
- Stack Actions - Push, Pop, PopToTop, Replace, Reset, Dismiss
- Navigation Actions - Navigate, Back, Set Params

In switch stack you can get below items:

### SwitchActions reference

- JumpTo - Jump to a route in the navigator

## Some Useful Links

- Optimize memory usage and performance
  <https://reactnavigation.org/docs/en/react-native-screens.html>
- For screen tracking must check below link, it will do screen tracking in just few lines of code
  <https://reactnavigation.org/docs/en/screen-tracking.html>
- If some want to change status bar background color runtime, then one can use below link:
  <https://reactnavigation.org/docs/en/status-bar.html>
