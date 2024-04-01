import React from 'react'
import Destcard from '../components/Destcard'
import { Container, Grid, Typography } from '@mui/material'
import ListingObj from '../ListingObj'

function Listings() {
  let dests = ListingObj();
  return (
    <div>
      <div className="spacing" style={{height: '200px'}}></div>
      <Container sx={{textAlign:'center'}}>
        <Typography variant='h1' color='primary'>Our Listings</Typography>
        <Typography variant='body1' color='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam veritatis eos saepe assumenda voluptatem reiciendis odio hic perspiciatis dolores accusantium nesciunt amet minus blanditiis eum dignissimos, molestiae officiis? Laborum.</Typography>
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
  )
}

export default Listings
