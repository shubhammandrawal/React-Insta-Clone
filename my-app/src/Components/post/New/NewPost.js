import React, { useState } from "react";
import AppHeader from "../Header/Header";
import './NewPost.css';


export default function NewPost(){

    const [formData, setFormData]=useState({
        image: null,
        author:'',
        location:'',
        description: ''    
    })

    function captureForm(e){
            e.preventdefult()
            const formValues= new formData(e.target)
            console.log(formValues)
    }


    return <>
        <AppHeader />
        <form className="form-container" method="post" onSubmit={captureForm}>
            <div className="field-container">
                <input 
                    type="file" 
                    name="image" 
                    
                />
            </div>
            <div className="field-container author">
                <input className="author-md-right" type="text" placeholder="Author" name="author" />
                <input type="text" placeholder="Location" name="location" />
            </div>
            <div className="field-container description">
                <input type="text" placeholder="Description" name="description" />
            </div>
            <div className="field-container">
                <button>POST</button>
            </div>
        </form>
    </>
}