import { Container, Typography } from '@mui/material'
import React from 'react'
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function Info() {
  return (
    <div>
      <Container sx={{
        width: '90%',
        height: '220px',
        backgroundImage: 'linear-gradient(to bottom right, #8d99ae, #edf2f4)',
        borderRadius: '20px',
        marginTop: '60px',
        marginBottom: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="stat">
            <BedroomParentIcon fontSize='large' color='secondary' sx={{
              marginTop: '10px'
            }}/>
            <Typography variant='h5'>Over 300 Locations</Typography>
            <Typography variant='body1'>We have hotels, hostels, and lodgings in over 36 different countries.</Typography>
        </div>
        <div className="stat">
          <FitnessCenterIcon fontSize='large' color='secondary' sx={{
              marginTop: '10px'
            }}/>
        <Typography variant='h5'>Luxury Amenities</Typography>
            <Typography variant='body1'>Most of our locations come with state of the art, luxurious amenities.</Typography>
            </div>
            <div className="stat">
              <LocalOfferIcon fontSize='large' color='secondary' sx={{
              marginTop: '10px'
            }}/>
            <Typography variant='h5'>Package Deals</Typography>
            <Typography variant='body1'>Enjoy a vacations with friends or family and recieve special discounts.</Typography>
            </div>
            <div className="stat">
              <FlightTakeoffIcon fontSize='large' color='secondary' sx={{
              marginTop: '10px'
            }}/>
            <Typography variant='h5'>Private Flights</Typography>
            <Typography variant='body1'>Platinum memebers can upgrade to private flights.</Typography>
            </div>

      </Container>
    </div>
  )
}

export default Info
