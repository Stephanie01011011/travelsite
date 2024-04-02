import React, {createContext, useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Topnav from './components/Topnav';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Listings from './pages/Listings';
import ListingAbout from './pages/ListingAbout';
import Bookingsuccess from './pages/Bookingsuccess';


const theme = createTheme({
  palette: {
    primary: {
      main: '#edf2f4'
    },
    secondary: {
      main: '#ef233c'
    },
    info: {
      main: '#2b2d42'
    }
  }
})




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
 
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Topnav/>
  
  <Routes>
 
    <Route path="/" element={<App />}/>
    <Route path='/book' element={<Reserve />} />
    <Route path='/about' element={<About />} />
    <Route path='/listings' element={<Listings />} />
    <Route path='/listabout' element={<ListingAbout/>} />
    <Route path='/booked' element={<Bookingsuccess />} />  
    
  </Routes>
 
  <Footer />
  </BrowserRouter>
  </ThemeProvider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

