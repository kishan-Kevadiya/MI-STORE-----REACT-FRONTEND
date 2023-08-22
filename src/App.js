import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import  data  from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';

function App() {
  return (
    <Router>
      {/* // different different components */}
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
    <Offers Offers={data.offer} />

<Heading text='STAR PRODUCTS' />



{/* //data json  */}
<StarProduct starProduct={data.starProduct} />

<Heading text='FEATURED PRODUCTS' />

    </Router>
  );
}

export default App;
