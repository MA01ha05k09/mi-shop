import React from 'react';
import './App.css';
import './styles/PreNavbar.css';
import { BrowserRouter as Router} from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct .js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotaccessoriesItem from './components/hotaccessoriesItem.js';
import Productreview from './components/productreview.js';
import Bootomslider from './components/bootomslider.js';
import Footer from './components/Footer.js'
function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar />
      <Slider />
      <Offers/>
     <Heading text='STAR PRODUCTS'/>
     <StarProduct/>
     <Heading text='HOT ACCESSORIES'/>
     <HotAccessoriesMenu/>
     <HotaccessoriesItem/>
     <Heading text='PRODUCT REVIEWS'/>
     <Productreview/>
     <Bootomslider/>
     <Footer/>

    </Router>
  );
}
export default App;

