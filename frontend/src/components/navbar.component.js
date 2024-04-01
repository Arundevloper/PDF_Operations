import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [username, setUsername] = useState(""); // State to manage username
  const [isRegisterPage, setIsRegisterPage] = useState(false); // State to track register page
  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation(); // Initialize useLocation hook


  //Check if the user credentials
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/checkLoginStatus', { withCredentials: true });
        const data = response.data;
        if (data.loggedIn) {
          setIsLoggedIn(true);
          setUsername(data.username);
        } else {
          setIsLoggedIn(false);
          setUsername("");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, [isLoggedIn]); // Listen for changes in isLoggedIn state

  useEffect(() => {
    setIsRegisterPage(location.pathname === '/register');
  }, [location.pathname]);


  //Logout the user by removing the cookies
  const handleLogout = () => {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setUsername("");
    navigate('/');
  };

  //Toggle between login and Rgister
  const handleRegister = () => {
    if (isRegisterPage) {
      navigate('/');
    } else {
      navigate('/register');
    }
  };

  return (
    <div>
      <nav className="navbar1 navbar-expand-lg  navbar-light">
        <div className="outerBox">
          <div className="box1">
            <a className="navbar-brand" >PdfEditor</a>
          </div>
          <div className="box2" >
            <ul className="navbar-nav ul-list ">
              {isLoggedIn ? (
                <>
                  <li className="nav-item usernav1">
                    <a className="nav-link usernav" ><span className="username">Welcome-</span><span className='usernames'>{username}</span></a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link logout" onClick={handleLogout}>Logout</a>
                  </li>
                </>
              ) : (
                <li className="nav-item" >
                  <a className="nav-link logout" onClick={handleRegister}>
                    {isRegisterPage ? "Login" : "Register"}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
