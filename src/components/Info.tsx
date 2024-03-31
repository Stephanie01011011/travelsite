import { Container, Typography } from '@mui/material'
import React from 'react'
import BedroomParentIcon from '@mui/icons-material/BedroomParent';

function Info() {
  return (
    <div>
      <Container sx={{
        width: '90%',
        height: '160px',
        backgroundImage: 'linear-gradient(to bottom right, #8d99ae, #edf2f4)',
        borderRadius: '20px',
        marginTop: '60px',
        marginBottom: '60px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div className="stat">
            <BedroomParentIcon/>
            <Typography variant='h5'>Over 300 Locations</Typography>
            <Typography variant='body1'>We have hotels, hostels, and lodgings in over 36 different countries.</Typography>
        </div>
        <div className="stat">
        <Typography variant='h5'>Over 300 Locations</Typography>
            <Typography variant='body1'>We have hotels, hostels, and lodgings in over 36 different countries.</Typography>
            </div>
            <div className="stat">
            <Typography variant='h5'>Over 300 Locations</Typography>
            <Typography variant='body1'>We have hotels, hostels, and lodgings in over 36 different countries.</Typography>
            </div>
            <div className="stat">
            <Typography variant='h5'>Over 300 Locations</Typography>
            <Typography variant='body1'>We have hotels, hostels, and lodgings in over 36 different countries.</Typography>
            </div>

      </Container>
    </div>
  )
}

export default Info
