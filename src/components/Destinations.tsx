import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Destcard from './Destcard'
import { useState } from 'react'

interface Locations {
    id: number,
    url: string,
    title: string,
    description: string,

}
const dests: Locations[] = [{
    id: 0,
    url: 'https://images.unsplash.com/photo-1584558701762-387e5d31e441?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bermuda',
    description: 'Under $150/night'
},
{
    id: 1,
    url: 'https://images.unsplash.com/photo-1495171081156-cc1209ddf6a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFndW5hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D',
    title: 'Laguna Beach',
    description: 'Under $80/night'
},
{
    id: 2,
    url: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZWNlfGVufDB8fDB8fHww',
    title: 'Greece',
    description: 'Under $300/night'   
},
{
    id: 3,
    url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyaXN8ZW58MHx8MHx8fDA%3D',
    title: 'Paris',
    description: 'Under $180/night'
}]


function Destinations() {
    const [locs, setLocs] = useState(dests);
  return (
    <div>
      <div className="destinations">
        
            <Typography variant='h2' sx={{
                marginBottom: '100px',
                paddingTop: '40px'
            }}>Popular Destinations</Typography>
            
            <Container>
            <Grid container spacing={2} justifyContent='center' sx={{
                               alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                
                    {dests.map((dest) => {
                        return(
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Destcard id={dest.id} title={dest.title} url={dest.url} description={dest.description} />
                            </Grid>
                        )
                    })}
                
            </Grid>
            </Container>
        
      </div>
    </div>
  )
}

export default Destinations
