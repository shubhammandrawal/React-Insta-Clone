import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../Components/LandingComponentFolder/Landing';


export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/post' element={<PostView />}>
            <Route path='/new' element={<PostView />} />
            <Route path='/all' element={<PostView />} />
        </Route> */}
    </Routes>
    </BrowserRouter>
    </>
} 
