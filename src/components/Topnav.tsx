import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import React from 'react'




function Topnav() {


  return (
    <div>
      <Container>
        <AppBar 
        sx={{
            backgroundColor: '#8d99ae'
          }}
        >
            <Toolbar sx={{
                justifyContent: 'space-between',
                
            }}>
                <div className="logo">
                  <div className="logoimg"></div>
               <Link to='/' style={{textDecoration: 'none'}}><Typography variant='h3' color='primary'>Voyager</Typography></Link>
                </div>

                <div className="menu">
                
                <Link to='/book'><Button variant='outlined' color='primary'>Book A Stay</Button></Link>
                <Link to='/about'><Button variant='outlined' color='primary'>Learn More</Button></Link>
                
                
                </div>
            </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

export default Topnav
