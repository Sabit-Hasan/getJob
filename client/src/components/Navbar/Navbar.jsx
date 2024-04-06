import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <>
            <div>
                <div className="navContent">
                    <div className="logo">
                        <h1>getJOB</h1>
                    </div>
                    <div className="menu">
                        <NavLink className="link-items" to="/">Home</NavLink>
                        <NavLink className="link-items" to="/about">About</NavLink>
                        <NavLink className="link-items" to="/contact">Contact</NavLink>
                    </div>
                    <div className="authentication">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}