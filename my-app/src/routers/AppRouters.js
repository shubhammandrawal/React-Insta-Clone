import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Components/LandingComponentFolder/Landing';
import NewPost from '../Components/post/New/NewPost';
import List from '../Components/post/List/List';


export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/new' element={<NewPost />} />  
        <Route path='/all' element={<List />} />          
        {/* <Route path='/post' element={<PostView />}>
            
        </Route> */}
    </Routes>
    </BrowserRouter>
    </>
} 
