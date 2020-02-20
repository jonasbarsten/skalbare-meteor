import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';
// import { SingleDatePicker } from 'react-dates';
// import { Auth } from "aws-amplify";
import LoaderButton from '../components/LoaderButton';

import './SignUp.css';

export default class Signup extends Component {
  state = {
    isLoading: false,
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    newUser: null
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit (event) {

    this.setState({isLoading: true});

    event.preventDefault();

    const { username, password, confirmPassword, email } = this.state;

    check(username, String);
    check(password, String);
    check(confirmPassword, String);
    check(email, String);

    Accounts.createUser({ username, email, password }, (res) => {
      this.setState({ isLoading: false });
      this.props.history.push("/");
    });
  }

  render () {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit.bind(this)} className="content">
          <FormGroup>
            <Label>Username</Label>
            <Input
              id="username"
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              id="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            type="submit"
            isLoading={this.state.isLoading}
            text="Signup"
            loadingText="Signing up…"
            color="primary"
          />
          <Button 
            block 
            color="success"
            size="lg"
            onClick={() => this.props.history.push("/login")}
          >Login</Button>
        </form>
      </div>
    );
  }
}
