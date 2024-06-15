import { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }


  return (
    <div className={isScrolled ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://th.bing.com/th/id/R.0e408bac1e6cb90b9abba265fe36a2a2?rik=BcesojM6kJ8o3Q&pid=ImgRaw&r=0"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            srcSet=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
