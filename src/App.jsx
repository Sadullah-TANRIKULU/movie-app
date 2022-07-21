import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import Router from "./router/Router";

function App() {
  return (
    <div className="App p-2 ">
      <AuthContextProvider>
        <Router />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
