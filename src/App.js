import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Content from "./pages/Content/Content";


export default function App() {
  
  const [success, setSuccess] = useState(false);


  return (
   
    <>
    {success ? (
      <Content/>
    ) : (
      <Login setSuccess={setSuccess}/>
    )}
    </>
   
  );
}