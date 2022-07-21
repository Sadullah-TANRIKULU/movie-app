import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`
    console.log(firstName, lastName, email, password);
    createUser(email, password, navigate, displayName);
  };

  return (
    <div className="login m-4 grid lg:grid-cols-2 gap-4 w-full ">
      <div className="loginImg w-full ">
        <img src={"https://picsum.photos/1600/900"} alt="entrance" />
      </div>
      <div className="loginForm w-full ">
        <h1 className="text-6xl text-center">Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <FormGroup className="flex flex-col gap-4">
            <FormControl>
              <InputLabel htmlFor="my-input">First Name</InputLabel>
              <Input
                id="firstName-input"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Last Name</InputLabel>
              <Input
                id="lastName-input"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="email-input"
                aria-describedby="my-helper-text"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input
                id="password-input"
                type="password"
                aria-describedby="my-helper-text"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText id="my-helper-text">
                We'll never share your password.
              </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained">Register</Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Register;
