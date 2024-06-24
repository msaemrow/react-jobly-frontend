import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from "./UserContext";
import '../css/NavBar.css'

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
    function loggedInNavBar(){
        return(
            <ul className="NavBar-ul">
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/">Home</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/jobs">Jobs</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/companies">Companies</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/profile">Update Profile</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/login" onClick={logout}>Logout ({currentUser.username})</Link>
            </li>
        </ul>
        )
    }

    function loggedOutNavBar(){
        return(
            <ul className="NavBar-ul">
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/">Home</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/signup">Sign Up</Link>
            </li>
            <li className="NavBar-li">
                <Link className="NavLinkItem" to="/login">Login</Link>
            </li>
        </ul>
        )
    }

    return  (
        <nav className="NavBar">
            {currentUser ? loggedInNavBar() : loggedOutNavBar()}
        </nav>
    )
}

export default NavBar;