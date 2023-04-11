import React, { useContext } from "react"
import dots from "../../../images/more_icon.svg";
import './list.css';
import schoolPic from '../../../images/school_girls.jfif';
import like from '../../../images/like.png'
import rocket from '../../../images/rocket.png'
import AppHeader from "../Header/Header";
import { PostList } from "../../../Context/PostContext";

export default function List(){

    const {posts}=useContext(PostList)

    const today= new Date().toLocaleDateString();
    return<>
        <AppHeader />
        <card className="card-container">
            { posts.length==0 ? <h3>No Post available...</h3> :
            posts.map(post=>{
                    return<>
                       <div className="card-header" key={post.id}>
                <div className="card-head-content">
                    <h3>{post.name}</h3>
                    <p>{post.location}</p>
                </div>
                <div className="card-head-icon">
                    <img src={dots} alt="triple-dots" />
                </div>
            </div>
            <div className="image-container">
                <img src={post.image} alt="sclboy" />
            </div>
            <div className="card-footer">
                <div className="card-footer-icon">
                    <img src={post.like} alt="heart" />
                    <img src={rocket} alt="rocket" />
                </div>
                <div className="card-footer">
                    {today}
                </div>
            </div>
            </>
            })}
        </card>

    </>
}