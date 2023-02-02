import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import IronIcon from '@mui/icons-material/Iron';
import CableIcon from '@mui/icons-material/Cable';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import axios from 'axios';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import CelebrationIcon from '@mui/icons-material/Celebration';
import InboxIcon from '@mui/icons-material/Inbox';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import Mestrajets from '../../compmonents/Mestrajets';
import Home from "../Home/Home";
import Success from '../Success/Success';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  // return Array.from(new Array(50)).map(
  //   () => messageExamples[getRandomInt(messageExamples.length)],
  // );
}



export default function Content() {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);


    const theme = useTheme();
    
   
      return (
        
        <Box sx={{ pb: 7 }} ref={ref}>
          <BrowserRouter>
      <CssBaseline />
      <List>
        {/* {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))} */}
        <div style={{fontSize:'20px', textAlign: 'center', position:'fixed', width:'100%', margin: '0 0 50px 0', background:'#000'}}>
        <h1 style={{fontSize:'20px', textAlign: 'center', color:'#fff'}}>Carpooling App</h1>
        </div>
  <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/success" element={<Success />} /> 
    </Routes>
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Accueil" icon={<HomeIcon />} />
          <BottomNavigationAction label="Parametres" icon={<SettingsIcon />} />
          <BottomNavigationAction label="Deconnexion" icon={<LogoutIcon />} />
        </BottomNavigation>
      </Paper>
      </BrowserRouter>
    </Box>

  




      )
};