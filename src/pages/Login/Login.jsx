import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useRef, useState, useContext } from 'react';





const theme = createTheme({
  palette: {
    primary: {

      main: '#000',

    },
    secondary: {

      main: '#000',
      
    },
  },
});
export default function SignIn({setSuccess}) {

function connexion() {
    setSuccess(true)
}
  return (

    
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', color:'#262D44' }}> 
            Connexion
          </Typography>
          <Box component="form" onSubmit="{handleSubmit}" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
            //   variant="standard"

              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            //   onChange={(e)=> setUser(e.target.value)}
            //   value="{user}"

            />
            <TextField
              margin="normal"
            //   variant="standard"

              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            //   onChange={(e)=> setPwd(e.target.value)}
            //   value="{pwd}"
            />
            <div id="errMessage"></div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={connexion}
            >
              <strong>
              Se connecter</strong>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {/* Mot de passe oublié? */}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Ajouter-un-article/Inscription" variant="body2">
                  {"Pas de compte? Inscrivez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  
  );
}