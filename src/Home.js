import React from "react";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import Search from "../component/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92d
p.png
" alt="logo" />
        <div className="home__inputContainer">
          <Search/>
        </div>
        <div id="lang">
          Google offered in:
          <a href="https://www.google.com/">English</a>
          <a href="https://www.google.com/">हिन्दी</a>
          <a href="https://www.google.com/">বাংলা</a>
          <a href="https://www.google.com/">తెలుగు</a>
          <a href="https://www.google.com/">मराठी</a>
          <a href="https://www.google.com/">தமிழ்</a>
          <a href="https://www.google.com/">ગુજરાતી</a>
          <a href="https://www.google.com/">ಕನ್ನಡ</a>
          <a href="https://www.google.com/">മലയാളം</a>
          <a href="https://www.google.com/">ਪੰਜਾਬੀ</a>
        </div>
        
      </div>
    </div>

  );
}

export default Home;