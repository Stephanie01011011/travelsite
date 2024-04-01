import React from 'react'
import Topnav from '../components/Topnav'
import { Container, Typography } from '@mui/material'

function About() {
  return (
    <div>
       <div className="spacing" style={{height: '200px'}}></div>
      <Container sx={{
        textAlign: 'center'
      }}>
        <Typography variant='h1' color='primary'>Voyage Takes Care Of You</Typography>
        <Typography variant='body1' color='primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla pariatur dicta sunt corporis, illum nesciunt quaerat velit voluptate. Eos, qui. Cumque exercitationem amet quam temporibus similique, saepe beatae optio quas.</Typography>
      </Container>
      <div className="aboutStats">
        <div className="area">
          <img src="https://images.unsplash.com/photo-1707327259268-2741b50ef5e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" className='displayImg'/>
          <div className="aboutTxt">
          <Typography variant='h2' sx={{
            textAlign: 'left',
            
          }}>Mission Driven</Typography>
          <Typography variant='body1' color='info' sx={{
            width:'55%'
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente saepe distinctio facilis repellat expedita ea ipsam itaque nam soluta debitis nesciunt neque adipisci at sunt eligendi, voluptates magni repellendus.</Typography>
          </div>
        </div>
        <div className="area">
        <div className="aboutTxt">
          <Typography variant='h2' sx={{
            textAlign: 'center',
            width: '70%',
            
          }}>Travel <br/>With Purpose</Typography>
          <Typography variant='body1' color='info' sx={{
            width:'55%'
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente saepe distinctio facilis repellat expedita ea ipsam itaque nam soluta debitis nesciunt neque adipisci at sunt eligendi, voluptates magni repellendus.</Typography>
          </div>
          <img src="https://images.unsplash.com/photo-1710170600419-9771180c5dc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" className='displayImg'/>
        </div>
        <div className="area">
        <img src="https://images.unsplash.com/photo-1711619034500-8f562ce7bf4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="" className='displayImg'/>
        <div className="aboutTxt">
          <Typography variant='h2' sx={{
            textAlign: 'center',
            width: '70%',
            
          }}>Leave <br/>Worries Behind</Typography>
          <Typography variant='body1' color='info' sx={{
            width:'55%'
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente saepe distinctio facilis repellat expedita ea ipsam itaque nam soluta debitis nesciunt neque adipisci at sunt eligendi, voluptates magni repellendus.</Typography>
          </div>
        </div>
        <div className="area">
        <div className="aboutTxt">
          <Typography variant='h2' sx={{
            textAlign: 'center',
            width: '70%',
            
          }}>Superior<br/> Customer Service</Typography>
          <Typography variant='body1' color='info' sx={{
            width:'55%'
          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente saepe distinctio facilis repellat expedita ea ipsam itaque nam soluta debitis nesciunt neque adipisci at sunt eligendi, voluptates magni repellendus.</Typography>
          </div>
          <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww" alt="" className='displayImg'/>
        </div>
      </div>
      <div className="contact">
        <Container sx={{
          textAlign: 'center'
        }}>
        <Typography variant='h1' color='primary'>Contact Us</Typography>
        <Typography variant='body1' color='primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla pariatur dicta sunt corporis, illum nesciunt quaerat velit voluptate. Eos, qui. Cumque exercitationem amet quam temporibus similique, saepe beatae optio quas.</Typography>
        </Container>
      </div>
    </div>
  )
}

export default About
