import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
      errorMessage: ""
    };
  }
  onSubmit = () => {
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(
        this.state.Email,
        this.state.Password
      )
      .then(() => {
        Actions.Home();
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <Container>
        <Text>{this.state.errorMessage}</Text>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={this.state.Email}
                onChangeText={Email => this.setState({ Email })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                value={this.state.Password}
                onChangeText={Password => this.setState({ Password })}
              />
            </Item>
            <Item>
              <Button block style={{ width: 200 }} onPress={this.onSubmit}>
                <Text>Login</Text>
              </Button>
              <Button
                block
                style={{ width: 200 }}
                transparent
                onPress={() => {
                  Actions.Signup();
                }}
              >
                <Text>Signup</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
