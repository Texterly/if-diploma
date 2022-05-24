import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AuthPage from "./AuthPage/AuthPage";
import Search from "./Search/Search";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='authorization' element={<AuthPage/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
