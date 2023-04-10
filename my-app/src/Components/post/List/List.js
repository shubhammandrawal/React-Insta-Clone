import React from "react"
import dots from "../../../images/more_icon.svg";
import './list.css';
import schoolPic from '../../../images/school_girls.jfif';
import like from '../../../images/like.png'
import rocket from '../../../images/rocket.png'
import AppHeader from "../Header/Header";

export default function List(){
    const today= new Date().toLocaleDateString();
    return<>
        <AppHeader />
        <card className="card-container">
            <div className="card-header">
                <div className="card-head-content">
                    <h3>Rahul</h3>
                    <p>Munnar</p>
                </div>
                <div className="card-head-icon">
                    <img src={dots} alt="triple-dots" />
                </div>
            </div>
            <div className="image-container">
                <img src={schoolPic} alt="sclboy" />
            </div>

            <div className="card-footer">
                <div className="card-footer-icon">
                    <img src={like} alt="heart" />
                    <img src={rocket} alt="rocket" />
                </div>
                <div className="card-footer">
                    {today}
                </div>
            </div>
        </card>

    </>
}