import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
     const { user, registerUser, isLoading, error } = useAuth();
     const [loginData, setLoginData] = useState({});
     const history = useHistory();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }
     const handleLoginSubmit = e => {
          e.preventDefault();
          if (loginData.password !== loginData.password2) {
               alert('your password dint match')
          }
          registerUser(loginData.email, loginData.password, loginData.name, history);

     }
     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item sx={{ mt: 2 }} xs={12} md={6}>
                         <Typography variant="body1" gutterBottom>
                              Register
                         </Typography>
                         {!isLoading && <form onSubmit={handleLoginSubmit}>
                              <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   id="standard-basic"
                                   label="Your email"
                                   onBlur={handleOnBlur}
                                   name="name"
                                   type="text"
                                   variant="standard" />
                              <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   id="standard-basic"
                                   label="Your email"
                                   onBlur={handleOnBlur}
                                   name="email"
                                   type="email"
                                   variant="standard" />
                              <TextField
                                   sx={{ width: '75%', m: 1 }}
                                   id="standard-basic"
                                   label="Your password"
                                   onBlur={handleOnBlur}
                                   name="password"
                                   type="password"
                                   variant="standard" />
                              <TextField
                                   id="standard-basic"
                                   sx={{ width: '75%', m: 1 }}
                                   label="confirm password"
                                   onBlur={handleOnBlur}
                                   name="password2"
                                   type="password"
                                   variant="standard" />

                              <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                              <NavLink to="/login"><Button variant="text">Already have account ?Please login</Button>
                              </NavLink>

                         </form>}
                         {isLoading && <CircularProgress />
                         }

                         {user.email && <Alert severity="success">user created successfully</Alert>
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

export default Register;