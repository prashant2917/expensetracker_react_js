import { Component } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  LoginComponent  from './LoginComponent.jsx';
import HeaderComponent from "./HeaderComponent.jsx";
import './expensetracker.css';
import RegisterUserComponent from "./RegisterUserComponent.jsx";
class ExpenseTracker extends Component {
    render() {
        return (
      <div className="expenseTracker">     
    <BrowserRouter>
           <>
           <HeaderComponent/>
                <Routes>
                <Route path="/" element={<LoginComponent/>}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/register" element={<RegisterUserComponent/>}/>
                </Routes>
                </>
        </BrowserRouter>
        </div>)
        
    }
}

export default ExpenseTracker;