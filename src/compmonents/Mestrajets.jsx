import * as React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      primary: {
  
        main: '#000',
  
      },
      secondary: {
  
        main: '#fff',
        
      },
    },
  });
export default function Mestrajets() {

   
      return (
        <ThemeProvider theme={theme}>
    
            <div className='mestrajets'>

                <h2>Mes trajets</h2>
                <div className='cardTrajet'>
                    <span style={{color:'#fff'}}>id: 000132</span>
                    <div style={{display:'flex' , justifyContent:'space-around',width: '100%', alignItems: 'center' }}>
                        <div style={{display:'flex', flexDirection:'column', height:'fit-content', width:'fit-content'}}>
                            <span style={{color:'#fff'}}>Toyota Hilux</span>
                            <span style={{color:'#fff'}}>AA-7652-G8</span>
                        </div>
                        <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color='secondary'>
                            <strong>Détails</strong>
                        </Button>
                        <div style={{display:'flex', flexDirection:'column', height:'fit-content', width:'fit-content'}}>
                            <span style={{color:'#fff'}}>Destination:</span>
                            <span style={{color:'#fff'}}>Sogara</span>
                        </div>
                    </div>
                </div>
                <div className='cardTrajet'>
                    <span style={{color:'#fff'}}>id: 000132</span>
                    <div style={{display:'flex' , justifyContent:'space-around',width: '100%', alignItems: 'center' }}>
                        <div style={{display:'flex', flexDirection:'column', height:'fit-content', width:'fit-content'}}>
                            <span style={{color:'#fff'}}>Toyota Hilux</span>
                            <span style={{color:'#fff'}}>AA-7652-G8</span>
                        </div>
                        <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color='secondary'>
                            <strong>Détails</strong>
                        </Button>
                        <div style={{display:'flex', flexDirection:'column', height:'fit-content', width:'fit-content'}}>
                            <span style={{color:'#fff'}}>Destination:</span>
                            <span style={{color:'#fff'}}>Sogara</span>
                        </div>
                    </div>
                </div>

            </div>
        </ThemeProvider>

      )
};