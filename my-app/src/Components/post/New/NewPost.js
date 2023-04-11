import React, { useContext, useState } from "react";
import AppHeader from "../Header/Header";
import './NewPost.css';
import {addNewPost} from "../../../services/httpservices"
import { useNavigate } from "react-router-dom";
import { PostList } from "../../../Context/PostContext"


export default function NewPost() {
    const listNavigation = useNavigate();
    const { addPost } = useContext(PostList);
    const [formData, setFormData] = useState({
        image: null,
        name: "",
        location: "",
        description: ""
    })

    function captureForm(event) {
        debugger
        event.preventDefault();
        const formValues = new FormData(event.target);
        formValues.append("date", new Date().toDateString());
        formValues.append("likes", 0);
        formValues.append("id", (""+ new Date().getTime()));


        addNewPost(formValues).then(res => {
            if(res.status==="Success"){
            addPost(res.result);
            setFormData({
                image: null,
                name: "",
                location: "",
                description: ""
            });
            listNavigation("../../post/all")
        }
        else {
            console.log("FAILDED TO POST DATA:- " );
        }
    });
    }
    return <>
        <AppHeader />
        <form className="form-container"  onSubmit={captureForm}>
            <div className="field-container">
                <input type="file" name="image" required accept="image/*" onChange={e=>{
                    setFormData(prev=>{
                        return {
                            ...prev,
                            image: e.target.files[0]
                        }
                    })
                }} />
            </div>
            <div className="field-container author">
                <input className="author-md-right" type="text" placeholder="Author" name="name" required value={formData.name}
                    onChange={e=>{
                        setFormData(prev=>{
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        })
                    }}                
                />
                <input type="text" placeholder="Location" name="location" required value={formData.location} 
                onChange={e=>{
                    setFormData(prev=>{
                        return {
                            ...prev,
                            location: e.target.value
                        }
                    })
                }}
                
                />
            </div>
            <div className="field-container description">
                <input type="text" placeholder="Description" name="description" required value={formData.description} 
                    onChange={e=>{
                        setFormData(prev=>{
                            return {
                                ...prev,
                                description: e.target.value
                            }
                        })
                    }}
                />
            </div>
            <div className="field-container">
                <button>POST</button>
            </div>
        </form>
    </>
}