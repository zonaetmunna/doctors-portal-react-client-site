import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
     const { name, description, img } = service;
     return (

          <Grid item xs={12} sm={6} md={4}>
               < Card sx={{ maxWidth: 345, p: 2, boxShadow: 0 }
               }>
                    <CardMedia
                         component="img"
                         height="140"
                         image={img}
                         alt="green iguana"
                         sx={{ width: "200px", mx: "auto" }}
                    />
                    <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                              {name}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              {description}
                         </Typography>
                    </CardContent>

               </Card >
          </Grid>

     );
};

export default Service;