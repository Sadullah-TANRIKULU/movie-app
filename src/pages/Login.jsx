import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link,
} from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";

const Login = () => {

  const { googleLogIn } = UserAuth();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await googleLogIn(auth, provider)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login m-4 grid lg:grid-cols-2 gap-4 w-full ">
        <div className="loginImg w-full ">
            <img src={'https://picsum.photos/1600/900'} alt="entrance" />
        </div>
      <div className="loginForm w-full ">
        <h1 className="text-6xl text-center">Login</h1>
        <FormGroup className="flex flex-col gap-4">
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="email-input" aria-describedby="my-helper-text" />
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
            />
            <FormHelperText id="my-helper-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <Link href="#" underline="always">
            {"Forgot password?"}
          </Link>
          <Button variant="contained">Login</Button>
          <Button className="bg-red-800" variant="contained" onClick={signInWithGoogle} >
            Continue with Google
          </Button>

          <GoogleButton />
        </FormGroup>
      </div>
    </div>
  );
};

export default Login;
