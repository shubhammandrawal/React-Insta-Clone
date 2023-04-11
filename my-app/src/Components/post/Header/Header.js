import React from "react";
import circle from "../../../images/icon.svg";
import camera from "../../../images/camera.png";
import './header.css'
import { Link } from "react-router-dom";


export default function AppHeader(){
    return<>
        <navbar className="top-header">
            <div className="circle">
                <img src={circle} alt="circle-icon" />
                <p>INSTACLONE</p>
            </div>
            <div className="camera">
                <Link to="/post/new">
                    <img src={camera} alt="camera-icon" />
                </Link>
            </div>
        </navbar>
    </>
}