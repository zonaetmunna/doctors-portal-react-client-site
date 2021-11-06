import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';


const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
     const { time, name } = booking;
     const { user } = useAuth();

     const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
     const [bookingInfo, setBookingInfo] = useState({});

     // handleOnBlur
     const handleOnBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newInfo = { ...bookingInfo };
          newInfo[field] = value;
          setBookingInfo(newInfo);

     }
     // handleBooking submit
     const handleBookingSubmit = (e) => {
          e.preventDefault();
          const appointment = {
               ...bookingInfo,
               time,
               serviceName: name,
               date: date.toLocaleDateString()
          }
          // send to the database
          fetch('http://localhost:5000/appointments', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(appointment)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         setBookingSuccess(true);
                         handleBookingClose();
                    }
                    console.log(data);
               })
          // for ignore auto submit

     }

     return (
          <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               open={openBooking}
               onClose={handleBookingClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                    timeout: 500,
               }}
          >
               <Fade in={openBooking}>
                    <Box sx={style}>
                         <Typography id="transition-modal-title" variant="h6" component="h2">
                              {name}
                         </Typography>
                         <form onSubmit={handleBookingSubmit}>
                              <TextField
                                   disabled
                                   sx={{ width: '90%', m: 2 }}
                                   id="filled-size-small"
                                   variant="filled"
                                   size="small"

                                   defaultValue={time}
                              />
                              <TextField
                                   sx={{ width: '90%', m: 2 }}
                                   id="filled-size-small"
                                   variant="filled"
                                   size="small"

                                   name="patientName"
                                   onBlur={handleOnBlur}
                                   defaultValue={user.displayName}
                              />
                              <TextField
                                   sx={{ width: '90%', m: 2 }}
                                   id="filled-size-small"
                                   variant="filled"
                                   size="small"

                                   name="email"
                                   onBlur={handleOnBlur}
                                   defaultValue={user.email}
                              />
                              <TextField
                                   sx={{ width: '90%', m: 2 }}
                                   id="filled-size-small"
                                   variant="filled"
                                   size="small"

                                   name="phone"
                                   onBlur={handleOnBlur}
                                   defaultValue="your phone"
                              />
                              <TextField
                                   disabled
                                   sx={{ width: '90%', m: 2 }}
                                   id="filled-size-small"
                                   variant="filled"
                                   size="small"

                                   defaultValue={date.toDateString()}
                              />

                              <Button type="submit" variant="contained">submit</Button>
                         </form>
                    </Box>
               </Fade>
          </Modal>
     );
};

export default BookingModal;