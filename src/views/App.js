import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AuthPage from "./AuthPage/AuthPage";
import Search from "./Search/Search";
import ProductCard from "./ProductCard/ProductCard";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='authorization' element={<AuthPage/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='product/:id' element={<ProductCard/>}/>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
