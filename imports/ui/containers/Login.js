import React, { Component } from "react";
// import { Auth } from "aws-amplify";
import { FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit (event) {
    this.setState({isLoading: true});
    event.preventDefault();

    Meteor.loginWithPassword(this.state.username, this.state.password, (err, res) => {
      if (!err) {
        this.setState({isLoading: false});
        // this.props.userHasAuthenticated(true);
        this.props.history.push("/");
      };
    });

  }

  render() {

    return (
      <div className="Login container">
        <form onSubmit={this.handleSubmit.bind(this)}>
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
            <Label>Password</Label>
            <Input
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Link to="/login/reset">Forgot password?</Link>
          <LoaderButton
            block
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
            color="primary"
          />
          <Button 
            block 
            color="success"
            size="lg"
            onClick={() => this.props.history.push("/signup")}
          >Signup</Button>
        </form>
      </div>
    );
  }
}