import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  //* with custom hook
  // const { currentUser } = useAuthContext();
  // const currentUser = { displayName: 'felix franko' };
  // const currentUser = false;

  return (
    <div className="navbar flex items-center justify-between bg-blue-800 cursor-pointer p-4">
      <div className="navLeft">
        <h4 className="text-3xl text-white" onClick={() => navigate("/")}>
          React Movie App
        </h4>
      </div>
      <div className="navRight flex gap-2 ">
        {currentUser ? (
          <>
            <h5 className="text-2xl text-white font-semibold " >{currentUser.displayName}</h5>
            <button
              className="bg-rose-300 p-2 text-white font-bold rounded-sm"
              onClick={() => logOut()}
            >
              logout
            </button>
          </>
        ) : (
          <>
            <button
              className="btn bg-stone-500 p-2 rounded-sm font-bold "
              onClick={() => navigate("login")}
            >
              Login
            </button>
            <button
              className="btn bg-green-500 rounded-sm font-semibold p-2 "
              onClick={() => navigate("register")}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
