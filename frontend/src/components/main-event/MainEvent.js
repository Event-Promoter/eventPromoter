import React from 'react';
import './MainEvent.css'
import bg from "./bg1.jpg";
import img from "./1.png"


const MainEvent = () => {
    return (
        <div>
            <header
                style={{
                    width: "100%",
                    height: "550px",
                    display: "block",
                    position: "relative",
                    backgroundSize: "100%",
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: " center",
                    backgroundRepeat: "no-repeat",

                }}
            >
            </header>
            <div className="side">
                <div className="company">
                    <img className="border-image" src={img}></img>
                </div>
                <div className="desc">

                </div>
                <div className="desc2">

                </div>
                <div className="desc2">

                </div>
                <div className="button">
                    <button className="styling"><h4>REGISTER NOW</h4></button>
                </div>
            </div>

        </div>
    );
}

export default MainEvent;
