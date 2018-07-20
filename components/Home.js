import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input
} from "native-base";
import firebase from "react-native-firebase";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "",
      fullName: "",
      success: "",
      errorMessage: ""
    };
  }
  onSubmit = data => {
    firebase
      .firestore()
      .collection("Message")
      .add({
        Message: this.state.Message,
        fullName: this.state.fullName
      })
      .then(success => this.setState({ success: "has succesful stored" }))
      .then(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <Container>
        <Text>{this.state.errorMessage}</Text>
        <Text>{this.state.success}</Text>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Message"
                value={this.state.Message}
                onChangeText={Message => this.setState({ Message })}
              />
            </Item>
            <Item>
              <Input
                placeholder="fullName"
                value={this.state.fullName}
                onChangeText={fullName => this.setState({ fullName })}
              />
            </Item>
            <Item>
              <Button block style={{ width: 400 }} onPress={this.onSubmit}>
                <Text>Save</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
