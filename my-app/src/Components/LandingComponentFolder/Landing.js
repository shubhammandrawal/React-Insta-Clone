import React from "react";
import home from "../../images/home.png"
import {Link} from 'react-router-dom';
import './Landing.css';


export default function LandingPage(){
    return<>
        <div className="home-content">
            <div className="landing-img">
                <img src={home} alt="imga" />
            </div>
            <div className="landing-content">
                <h2>10 Team 04</h2>
                <Link to={"post/all"}>
                    <button>Enter</button>    
                </Link>  
            </div>
        </div>
    </>
}