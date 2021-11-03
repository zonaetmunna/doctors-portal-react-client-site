import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';


const services = [
     {
          id: 1,
          name: "fluoride Treatment",
          description: "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illo vitae earum voluptatibus, provident ipsa fugit eum esse nihil magni",
          img: "https://i.ibb.co/nLzz8nk/fluoride.png"
     },
     {
          id: 2,
          name: "Cavity Filling",
          description: "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illo vitae earum voluptatibus, provident ipsa fugit eum esse nihil magni",
          img: "https://i.ibb.co/wh533yd/cavity.png "
     },
     {
          id: 3,
          name: "Teath Whitening",
          description: "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illo vitae earum voluptatibus, provident ipsa fugit eum esse nihil magni",
          img: "https://i.ibb.co/vBxYxrv/whitening.png "
     }
]

const Services = () => {
     return (
          <Box sx={{ flexGrow: 1, mt: 5 }}>

               <Container>
                    <Typography sx={{ textAlign: 'center', fontWeight: 400, color: 'primary.main', mb: 3 }} variant="h2">Our services</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              services.map(service => <Service
                                   key={service.id}
                                   service={service}
                              ></Service>)
                         }
                    </Grid>
               </Container>
          </Box>
     );
};

export default Services;