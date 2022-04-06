import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  Home  from './Pages/Home';
import Places from './Pages/Places';
import Comments from './Pages/Comments';
import Header from './Components/Header';
import Auth from './Pages/Auth';
import Signup from './Pages/Signup';
import Tours from "./Pages/Tours";




function App(){
const [user, setUser] = useState(null);
useEffect(() =>{
    const u = sessionStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
}, [])
useEffect(() =>{
    sessionStorage.setItem("user", user);
}, [user])
    return (
        <>
            <header>
                <Header />
            </header> 
            <Routes>  
                <Route path='/' element={<Home />}/>
                <Route path='/places' element={<Places />}/>
                <Route path='/signup' element={<Signup />} />
                <Route path='/tours' element={<Tours />} />
                {!user && (
                    <Route path='/auth' element={<Auth authenticate={()=> setUser(true)} />} />   
                )}
                {user && (
                    <Route path='/comments' element={<Comments logout={()=> setUser(false)} />}/>
                )}
                <Route path='*' element={<Navigate to={user ? "/comments" : "/auth"} />}/>
            </Routes>
        </>
    )
}





export default App;