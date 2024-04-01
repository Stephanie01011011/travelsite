import { Container, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <Container className='footer' sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div className="logo">
          <Typography variant='h5' color='primary'>Voyager</Typography>
        </div>
        <div className="socials">
          <InstagramIcon color='primary'/>
          <FacebookIcon color='primary'/>
          <LinkedInIcon color='primary'/>
        </div>
      </Container>
    </div>
  )
}

export default Footer
