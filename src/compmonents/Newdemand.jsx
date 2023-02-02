import * as React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import Map from './Map';


const theme = createTheme({
    palette: {
      primary: {
  
        main: '#fff',
  
      },
      secondary: {
  
        main: '#000',
        
      },
    },
  });
export default function Newdemand() {

    const [value, setValue] = React.useState(null);
    const [coords, setCorrds] = useState({
      latitude: "",
      longitude: ""
    });
    const [display_name, setName] = useState("");
    const [address, setAddress] = useState({});
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        getCurrentCityName,
        error,
        options
      );
    }, []);
  
    function error(err) {
      if (
        err.code === 1 || //if user denied accessing the location
        err.code === 2 || //for any internal errors
        err.code === 3 //error due to timeout
      ) {     
        alert(err.message);
      } else {
        alert(err);
      }
    }
  
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };
  
    //get current location when the app loads for the first time
    function getCurrentCityName(position) {
      setCorrds({
        // latitude: position.coords.latitude,
        latitude: "-0.71632",
        longitude: "8.77262"
        // longitude: position.coords.longitude
      });

      

      let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
        "&lat=" + coords.latitude + "&lon=" + coords.longitude;
        
      fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
        }
      })
        .then((response) => response.json())
        .then((data) => setName(data.display_name));
    }
  
    //get input from text fields and append it to address object
    function update(field) {
      return (e) => {
        const value = e.currentTarget.value;
        setAddress((address) => ({ ...address, [field]: value }));
      };
    }
  
    //send the data on the state to the API
    function getData(url) {
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setName(data[0].display_name);
          setCorrds({
            latitude: data[0].lat,
            longitude: data[0].lon
          });
        })
        .catch(() => error("Please Check your input"));
    }
  
    //set form input( data entered ) to state on form submit
    function submitHandler(e) {
      e.preventDefault();
      console.log(address);
  
      let url = `https://nominatim.openstreetmap.org/search?
      q=${address.street}&countrycodes=ga&format=json`;
  
      getData(url);
    }
  function toDeparture() {
    document.getElementById('mapdeparture').style.display='block'
    document.getElementById('destination').style.display='none'
  }
      return (
        <ThemeProvider theme={theme}>
    
            <div className='newdemand'>

                <h2>Nouvelle demande</h2>
                <section id='mapdeparture' className="form-container departure" style={{width:'100%'}}>
                  
                  <form>
                    <Grid item xs={12} sm={12}  sx={{display: 'flex', textAlign: 'left'}}>

                      <TextField
                      value={address.street}
                      placeholder="1234 abc street"
                      onChange={update("street")}
                      id="street"
                      type="text"
                      fullWidth
                      />
                                          <button onClick={(e) => submitHandler(e)}>Search</button>

                    </Grid>

                    




                  </form>
                  <br />
                  <Map coords={coords} dispaly_name={display_name} />
                  <Link to="/success">

                  <Button
          fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color='secondary'
            onClick={toDeparture}
            >
            <strong>Soummettre</strong>
          </Button>
          </Link>
                </section>
        
                <section id='destination' className="destination" style={{width:'100%', height:'fit-content'}}>
                <Grid container spacing={3}>
            <Grid item xs={12} sm={12} sx={{display: 'flex', textAlign: 'left'}}>
            <FormControl  sx={{ width:'100%'}}>
              <InputLabel id="demo-simple-select-label">Destination</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                label="Destination"
                id="Destination"
                // onChange={categorie}
                // value={CategorieObjet}

              >

                <MenuItem value="Nouveau port">Nouveau port</MenuItem>
                <MenuItem value="Carrefour Leon MBA">Carrefour Leon MBA</MenuItem>
                <MenuItem value="Tobia">Tobia</MenuItem>
                <MenuItem value="Feu Total">Feu Total</MenuItem>
               
                <MenuItem value="Machine">Printemps</MenuItem>
                <MenuItem value="Outil">Corawood</MenuItem>
              </Select>
            </FormControl>
         
          </Grid>

          <Grid item xs={12} sm={12} sx={{display: 'flex', textAlign: 'left'}}>
            <FormControl  sx={{ width:'100%'}}>
              <InputLabel id="demo-simple-select-label">Nombre de places</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                label="Nombre de places"
                id="Nombre de places"
                // onChange={etat}
                // value={EtatObjet}

              >
                
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DateTimePicker
                variant='standard'
                label="Date de naissance"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                sx={{width:"100%"}}
                renderInput={(params) => <TextField sx={{width:"100%"}} {...params} />}
              />
            </LocalizationProvider>
       </Grid>



         


        
       <Grid item xs={12}>
          <Button
          fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color='secondary'
            onClick={toDeparture}
            >
            <strong>Suivant</strong>
          </Button>
        </Grid>
        </Grid>

                </section>

            </div>
          
        </ThemeProvider>

      )
};