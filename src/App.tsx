import './App.css';
import { Button, Container, Typography } from '@mui/material';
import Info from './components/Info';
import { Link } from 'react-router-dom';
import Destinations from './components/Destinations';

function App() {
  return (
    <div className="App">
      <div className="spacing" style={{height: '100px'}}></div>
      
        <Container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <div className="heroText">
          <Typography variant='h2' color='primary'>Dive Into Your Next Adventure.</Typography>
          <Typography variant='body1' color='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi quam autem ea. Assumenda, eligendi amet. Ipsam commodi, ullam quibusdam quos perferendis, voluptatem fugit error dolor magni nulla ex odio?</Typography>
          <Link to='/listings'><Button variant='contained' color='secondary' sx={{
            marginTop: '30px'
          }}>View Listings</Button></Link>
        </div>
        <div className="heroImg"></div>
        </Container>
          <Info />
          <Destinations />
    </div>
  );
}

export default App;
