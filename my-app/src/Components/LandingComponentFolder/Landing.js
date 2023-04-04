import React from "react";
import home from "../../images/home.png"
import {Link} from 'react-router-dom';
import './Landing.css';
import AppHeader from "../Header/Header";


export default function LandingPage(){
    return<>
    <AppHeader />
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