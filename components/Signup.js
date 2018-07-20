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
import firebase from "react-native-firebase";
import { Actions } from "react-native-router-flux";
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Username: "",
      Password: "",
      errorMessage: ""
    };
  }
  onSubmit = () => {
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(
        this.state.Email,
        this.state.Password
      )
      .then(() => {
        Actions.Login();
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
                placeholder="Username"
                value={this.state.Username}
                onChangeText={Username => this.setState({ Username })}
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
              <Button block style={{ width: 400 }} onPress={this.onSubmit}>
                <Text>Signup</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
