import React from "react";
import { StyleSheet, YellowBox, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated in plain JavaScript React classes."
]);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Signup" component={Signup} title="Signup" />
          <Scene
            key="Home"
            component={Home}
            title="Home"
            renderBackButton={() => <View />}
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({});
