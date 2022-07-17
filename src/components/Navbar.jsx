import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = UserAuth();

    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }


    return ( 
        <div className="navbar flex items-center justify-between bg-slate-200 cursor-pointer ">
            <div className="navLeft">
                <h4 onClick={() => navigate('/')} >React Movie App</h4>
            </div>
            <div className="navRight flex gap-2 ">
                { user?.displayName ? <button className="bg-rose-300" onClick={handleLogOut} >logout</button> : <button className="btn bg-stone-500 " onClick={() => navigate('login')} >Login</button> }
                
                
                <button className="btn bg-green-500 " onClick={() => navigate('register')} >Register</button>
            </div>
        </div>
     );
}
 
export default Navbar;