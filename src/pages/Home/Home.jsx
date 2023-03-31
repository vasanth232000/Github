import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Slider from "../../components/Slider/Slider.jsx";
import "./Home.scss";
import Contact from '../../components/Contact/Contact.jsx';



const Home = () => {


  return (
    <div className='home'>
    <Slider/>
    <FeaturedProducts type="featured"/>
    <Categories/>
    <FeaturedProducts type="trending"/>
    <Contact/>
    </div>
    
  )
}

export default Home