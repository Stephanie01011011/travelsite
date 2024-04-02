import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function Bookingsuccess() {
  return (
    <div>
      <div className="spacing" style={{height: '200px'}}></div>
      <Container sx={{
        textAlign: 'center',
       
      }}>
        <div className="booked">
        <Typography variant='h1' color='primary'>You're Booked!</Typography>
        <Typography variant='h5' color='primary' sx={{
            width: '60%'
        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, commodi cumque sed laudantium nemo similique optio. Nobis perferendis non mollitia quam deleniti voluptatibus, maxime, reiciendis eius est unde nemo ea.</Typography>
        <div className="successBtns">
        <Link to='/travelsite'><Button variant='contained' color='secondary'>Return Home</Button></Link>
        <Link to='/about'><Button variant='outlined' color='secondary' sx={{
            marginLeft: '30px'
        }}>Contact Us</Button></Link>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Bookingsuccess
