import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {

     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                         <img src="https://i.ibb.co/sQ623jR/chair.png" style={{ width: "100%" }} alt="" />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default AppointmentHeader;