import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();


    return ( 
        <div className="navbar flex items-center justify-between bg-slate-200 cursor-pointer ">
            <div className="navLeft">
                <h4 onClick={() => navigate('/')} >React Movie App</h4>
            </div>
            <div className="navRight flex gap-2 ">
                <button className="btn bg-stone-500 " onClick={() => navigate('login')} >Login</button>
                <button className="btn bg-green-500 " onClick={() => navigate('register')} >Register</button>
            </div>
        </div>
     );
}
 
export default Navbar;