import { Card, CardContent, CardHeader, Typography } from '@mui/material'
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
      
      <Card sx={{
        width: '300px'
      }}>
        <CardHeader/>
        <CardContent>
          <Typography variant='body1'>{props.title}</Typography>
          <Typography variant='body2'>{props.description}</Typography>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default Destcard
