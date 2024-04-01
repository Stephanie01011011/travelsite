import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

interface Props {
  id: number,
  url: string,
  title: string,
  description: string
}


function Destcard(props: Props) {
  return (
    <div>
      
      <Card raised={true} sx={{
        
      }}>
        
        <CardMedia
        component="img"
        height="194"
        image={props.url}
        alt="Bermuda image"
      />
        <CardContent>
          <Typography variant='h4'>{props.title}</Typography>
          <Typography variant='body1' sx={{
            marginBottom: '40px'
          }}>{props.description}</Typography>
          <Button variant='contained' color='secondary' sx={{
            width: '95%'
          }}>View More</Button>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default Destcard
