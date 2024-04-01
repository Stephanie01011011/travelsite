import { Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListingObj from '../ListingObj';



function ListingAbout() {
    const dests = ListingObj();
    const [location, setLocation] = useState(dests[0]);
  return (
    <div>
      <div className="spacing" style={{height: '200px'}}></div>
      <Container sx={{
        textAlign: 'center'
      }}>
        <Typography variant='h1' color='primary' sx={{
            letterSpacing: '15px'
        }}>Visit {location.title}</Typography>
        <div className="aboutHead">
        <div className="abouttxt">
        <Typography variant='h4' color='info'>{location.about}</Typography>
        <Typography variant='body1' color='info'>{location.description}</Typography>
        <Button variant='contained' color='secondary'>Book Now</Button>
        </div>
        <img src={location.url} alt="" className='aboutImg'/>
        </div>
      </Container>
    </div>
  )
}

export default ListingAbout
