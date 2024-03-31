import React from 'react';
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
import { Book } from '@mui/icons-material';
import About from './pages/About';
import Listings from './pages/Listings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#edf2f4'
    },
    secondary: {
      main: '#ef233c'
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
    <Route path="/" element={<App/>}/>
    <Route path='/book' element={<Book />} />
    <Route path='/about' element={<About />} />
    <Route path='/listings' element={<Listings />} />     
  </Routes>
  <Footer />
  </BrowserRouter>
  </ThemeProvider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

