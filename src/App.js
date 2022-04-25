import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/Signup";
import Tests from "./pages/Tests/Tests";
import TestsTeacher from "./pages/TestsTeacher/TestsTeacher";


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/tests" element={<Tests />} />
                    <Route path="/tests/teacher" element= {<TestsTeacher />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;