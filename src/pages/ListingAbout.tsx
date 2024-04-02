import { Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import ListingObj from '../ListingObj';
import { Link } from 'react-router-dom';




function ListingAbout() {
  useEffect(() => {
    window.scrollTo(0,0)
  })
   
  
    
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
        <Link to='/book'><Button variant='contained' color='secondary' sx={{
          marginTop: '30px'
        }}>Book Now</Button></Link>
        </div>
        <img src={location.url} alt="" className='aboutImg'/>
        </div>
      </Container>
    </div>
  )
}

export default ListingAbout
