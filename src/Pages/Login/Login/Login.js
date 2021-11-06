import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
     const [loginData, setLoginData] = useState({});
     const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();

     const location = useLocation();
     const history = useHistory();



     // 
     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }
     // 
     const handleLoginSubmit = e => {
          loginUser(loginData.email, loginData.password, location, history);

          e.preventDefault();
     }

     // 
     const handleGoogleSignIn = () => {
          signInWithGoogle(location, history)
     }

     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item sx={{ mt: 2 }} xs={12} md={6}>
                         <Typography variant="body1" gutterBottom>
                              Login
                         </Typography>
                         {!isLoading && <form onSubmit={handleLoginSubmit}>
                              <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   id="standard-basic"
                                   label="Your email"
                                   onChange={handleOnBlur}
                                   name="email" type="email"
                                   variant="standard" />

                              <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   id="standard-basic"
                                   label="Your password"
                                   onChange={handleOnBlur}
                                   name="email" type="password"
                                   variant="standard" />

                              <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                              <NavLink to="/register"><Button variant="text">New User?Please register</Button>
                              </NavLink>

                         </form>}

                         <p>-------------------------------------</p>
                         <Button onClick={handleGoogleSignIn} type="submit" variant="contained">Login</Button>

                         {isLoading && <CircularProgress />
                         }
                         {user.email && <Alert severity="success">user login successfully</Alert>
                         }
                         {error && <Alert severity="error">{error}</Alert>
                         }
                    </Grid>
                    <Grid item xs={12} md={6}>
                         <img src='https://i.ibb.co/wBkMyQv/login.png' style={{ width: '100%' }} alt="" />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Login;