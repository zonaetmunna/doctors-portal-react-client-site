import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

/* const bannerBg={
     background:'url()'
} */

const Banner = () => {
     return (

          <Box sx={{ flexGrow: 1 }}>
               <Container>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                         <Grid item xs={12} md={6}>
                              <Typography variant="h3">Your new smile <br />start here</Typography>
                              <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste eaque, nobis tempora placeat magnam enim repudiandae recusandae id consequatur dolorem.</Typography>
                              <Button variant="contained">explore more</Button>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <img src="https://i.ibb.co/sQ623jR/chair.png" style={{ width: 400 }} alt="" />
                         </Grid>
                    </Grid>
               </Container>
          </Box>

     );
};

export default Banner;