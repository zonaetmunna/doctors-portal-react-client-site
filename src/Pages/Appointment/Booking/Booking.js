
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
     const { name, time, space } = booking;
     const [openBooking, setBookingOpen] = React.useState(false);
     const handleBookingOpen = () => setBookingOpen(true);
     const handleBookingClose = () => setBookingOpen(false);
     return (
          <>
               <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ textAlign: 'center', p: 2 }}>
                         <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom="div">
                              {name}
                         </Typography>
                         <Typography variant="h6" gutterBottom="div">
                              {time}
                         </Typography>
                         <Typography variant="caption" gutterBottom="div">
                              {space} space available
                         </Typography>
                         <br />
                         <Button variant="contained" onClick={handleBookingOpen}>Book appointment</Button>

                    </Paper>
               </Grid>
               <BookingModal
                    booking={booking}
                    openBooking={openBooking}
                    handleBookingOpen={handleBookingOpen}
                    handleBookingClose={handleBookingClose}
                    date={date}
               ></BookingModal>
          </>
     );
};

export default Booking;