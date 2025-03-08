import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import Catagories from './Components/Catagories';
import Nav from './Components/Nav';
import BNav from './Components/BNav';
import Hero from './Components/Hero';
import Grid from './Components/Grid';

function App() {
 

  return (
    <>
     <Nav/>
     <BNav/>
     <Hero/>
     <Catagories/>
     <Grid/>
    </>
  )
}

export default App
