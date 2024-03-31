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
    url: 'something',
    title: 'Bermuda',
    description: 'what'
},
{
    id: 1,
    url: 'Another one',
    title: 'Laguna Beach',
    description: 'Here we go'
},
{
    id: 2,
    url: 'Another one again',
    title: 'Greece',
    description: 'Baklava'   
},
{
    id: 3,
    url: 'Another nother one',
    title: 'Paris',
    description: 'Eiffel Tower'
}]


function Destinations() {
    const [locs, setLocs] = useState(dests);
  return (
    <div>
      <div className="destinations">
        
            <Typography variant='h2'>Popular Destinations</Typography>
            
            <Grid container spacing={2} sx={{
                               alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                
                    {dests.map((dest) => {
                        return(
                            <Grid item xs={2} sm={3} md={3} lg={3}>
                            <Destcard id={dest.id} title={dest.title} url={dest.url} description={dest.description} />
                            </Grid>
                        )
                    })}
                
            </Grid>
            
        
      </div>
    </div>
  )
}

export default Destinations
