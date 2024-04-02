import React, { useEffect, useState } from 'react'
import Topnav from '../components/Topnav'
import { Container, TextField, Select, MenuItem, InputLabel, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';


function Reserve() {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  const [location, setLocation] = useState(1);
  const handleChange = (e:any) => {
      setLocation(e.target.value);
  }
  return (
    <div>
      
     <div className="spacing" style={{height: '200px'}}></div>
     <Container>
      <div className="bookInfo">
    <Typography variant='h1' color='primary'>Book Now and Relax</Typography>
    <Typography variant='body1' color='primary' sx={{
      width: '60%'
    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos delectus corporis reiciendis molestiae! Consequatur nihil facere officia eos quia maxime debitis molestiae eligendi inventore accusantium. Modi libero deleniti iure.</Typography>
    </div>

     <form noValidate autoComplete='off' className='bookForm'>
      <div className="formFields">
      <TextField label='Full Name' variant='outlined' sx={{
        marginBottom: '30px',
        width: '300px'
        
      }} required></TextField><br/>
      <TextField label='Email' variant='outlined' sx={{
       marginBottom: '30px',
       width: '300px'
      }} required></TextField><br/>
      <TextField label='Phone Number' variant='outlined' sx={{
       marginBottom: '30px',
       width: '300px'
      }} required></TextField>
      
      <InputLabel id="demo-simple-select-label">Location?</InputLabel>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={location}
    label="Age"
    sx={{
      width: '160px',
      marginBottom: '30px'

    }}
    onChange={handleChange}
  >
    <MenuItem value={1}>London</MenuItem>
    <MenuItem value={2}>Paris</MenuItem>
    <MenuItem value={3}>Amsterdam</MenuItem>
    <MenuItem value={4}>Beijing</MenuItem>
    <MenuItem value={5}>Tokyo</MenuItem>
    <MenuItem value={6}>Greece</MenuItem>
    <MenuItem value={7}>Laguna Beach</MenuItem>
    <MenuItem value={8}>New York City</MenuItem>
    <MenuItem value={9}>Brazil</MenuItem>
  </Select>

  <InputLabel id="visitors">How many visitors?</InputLabel>
  <input style={{height: '40px', width: '60px', fontSize: '24px', marginBottom: '30px'}} type="number" id="quantity" name="quantity" min="1" max="8"></input>
  
  <div className="date" style={{display: 'flex'}}>
  <InputLabel id="startdate">Start Date</InputLabel>
  <input type="date" name="Start Date" id="start" style={{marginBottom: '30px'}} />
  <InputLabel id="enddate">End Date</InputLabel>
  <input type="date" name="End Date" id="end" style={{marginBottom: '30px'}}/>
  </div>
  <Link to='/booked'><Button variant='contained' color='secondary' sx={{
    marginRight: '20px'
  }}>Reserve</Button></Link>
  <Link to='/travelsite'><Button variant='outlined' color='secondary'>Cancel</Button></Link>
  </div>
  <div className="formimg"></div>
     </form>
     </Container>
    </div>
  )
}

export default Reserve
