import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'


interface Props {
  id: number,
  url: string,
  title: string,
  description: string
}


function Destcard(props: Props) {


 
  
  return (
    <div>
      
      <Card raised={true}>
        
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
          <Link to={{ pathname: '/listabout'}}><Button variant='contained' color='secondary' sx={{
            width: '95%'
          }}>View More</Button></Link>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default Destcard
