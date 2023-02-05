import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import Slider from "../../components/Slider/Slider.jsx";
import "./Home.scss";



const Home = () => {


  return (
    <div className='home'>
    <Slider/>
    <FeaturedProducts type="featured"/>
    <FeaturedProducts type="trending"/>
    </div>
    
  )
}

export default Home