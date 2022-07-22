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
import { signIn, signUpProvider } from "../auth/firebase";


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password, navigate);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  }

  return (
    <div className="login pt-2 grid lg:grid-cols-3 gap-4 w-full">
      <div className="loginImg w-full lg:col-start-1 lg:col-span-2 ">
        <img src={"https://picsum.photos/1600/900"} alt="entrance" />
      </div>
      <div className="loginForm w-full ">
        <h1 className="text-6xl text-center">Login</h1>
        <form action="" onSubmit={handleLogin}>
          <FormGroup className="flex flex-col gap-12">
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="email-input"
                type="text"
                aria-describedby="my-helper-text"
                onChange={(e) => setEmail(e.target.value)}
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
            <Link href="#" underline="always">
              {"Forgot password?"}
            </Link>
            <Button variant="contained" type="submit">
              Login
            </Button>
            <Button
              sx={{
                // how to customize prop for material ui
                backgroundColor: "red",
              }}
              className="googleBtn"
              variant="contained"
              onClick={handleProviderLogin}
            >
              Continue with Google
            </Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Login;
