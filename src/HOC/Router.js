import React from 'react';
import {Routes, Route} from 'react-router-dom';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Attorneys' element={<Attorneys/>}/>
            <Route path='/PracticeAreas' element={<PracticeAreas/>}/> 
            <Route path='/About' element={<About/>}/>
        </Routes>
    )
}

export default Router;