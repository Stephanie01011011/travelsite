import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Destcard from './Destcard'
import { useState } from 'react'
import ListingObj from '../ListingObj'
import { popdests } from '../ListingObj';

function Destinations() {
    let dests = popdests;
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
