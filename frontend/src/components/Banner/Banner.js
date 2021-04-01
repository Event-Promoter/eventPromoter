import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import bg from "./bg1.jpg";

import InputBase from '@material-ui/core/InputBase';
import "./Banner.css";

function Banner() {
  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:`url(${bg})`,
          

        backgroundPosition: " center",
      }}
    >
      <div className="banner__content">
        <div className="banner__form">
          <div >
            <SearchIcon style={{color:'white'}}/>
          </div>
            <InputBase
              style={{color:'white',fontWeight:'500',marginLeft:'1.5%'}}
              placeholder="Search here hackathons...."
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
      </div>
    </header>
  );
}

export default Banner;
