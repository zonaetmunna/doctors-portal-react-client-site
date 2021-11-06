import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png'


const appointmentBg = {
     // background: `url{${bg}}`
     background: 'url(https://i.ibb.co/CvL78Pd/appointment-bg.png)',
     backgroundColor: 'rgba(87, 51, 41,0.9)',
     backgroundBlendMode: 'darken,luminosity',
     marginTop: 200,
}

const AppointmentBanner = () => {
     return (

          <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
               <Container>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                         <Grid item xs={12} md={6}>
                              <img src="https://i.ibb.co/72FgVHY/doctor-small.png" style={{ width: "400px", marginTop: -100 }} alt="" />
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <Typography variant="h6" sx={{ color: 'white', my: 2 }}>appointment</Typography>
                              <Typography variant="h6">make an appointment today</Typography>
                              <Typography variant="h6" sx={{ color: 'white', my: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus tempore similique modi laudantium voluptates et dolorum beatae tenetur accusamus?</Typography>
                              <Button variant="contained">learn more</Button>
                         </Grid>

                    </Grid>
               </Container>
          </Box>
     );
};

export default AppointmentBanner;