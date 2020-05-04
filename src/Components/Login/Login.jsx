import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import LoginService from "../../Services/LoginService";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var loginService  = new LoginService();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userObj = {
      email : email,
      password : password
    }
    loginService.requestToLoginUser(userObj)
    .then(loggedIn => {window.location.href = "/"})
    .catch(msg =>  alert(msg));

  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
        Email
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        Password
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}