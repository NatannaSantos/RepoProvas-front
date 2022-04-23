import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/Signup";
import Tests from "./pages/Tests/Tests";


function App(){
    return (
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<SignIn/>}/>
         <Route path="/signUp" element={<SignUp/>}/>
         <Route path="/tests" element={<Tests />}/>
     </Routes>     
     </BrowserRouter>
    );
}

export default App;