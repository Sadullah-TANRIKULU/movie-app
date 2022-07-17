import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="moviedetail" element={<MovieDetail />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Router;
