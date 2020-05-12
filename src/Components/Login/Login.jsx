import React,{useState} from "react";
import {Button,FormGroup,FormControl} from "react-bootstrap";
import "./Login.css";
import LoginService from "../../Services/LoginService";


export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState(null);
  var loginService = new LoginService();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userObj = {
      email: email,
      password: password
    }
    loginService.requestToLoginUser(userObj)
      .catch(error => {
        if(error.response) {
          const statusCode = error.response.status;
          if(statusCode == 400) {
            setError("Enter valid caredentials");
          } else {
            setError("Somthing went wrong please try leter");
          }
        }
      })

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
            onChange={e => 
              
              { setError(null)
                setEmail(e.target.value)
            }}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          Password
          <FormControl
            value={password}
            onChange={e => {
              setError(null)
              setPassword(e.target.value)}
            }
            type="password"
          />
        </FormGroup>
        <p style={{fontSize: '15px'}} className="text-danger">{error}</p>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}