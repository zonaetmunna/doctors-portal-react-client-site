import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
     const { name, description, img } = service;
     return (
          <div>
               {/* <Grid item xs={2} sm={4} md={4}> */}
               <Card sx={{ maxWidth: 345, p: 2 }}>
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

               </Card>
               {/* </Grid> */}
          </div>
     );
};

export default Service;