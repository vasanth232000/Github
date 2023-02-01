import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h4>About</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, enim sapiente dolorem rem suscipit quaerat sint nostrum eligendi autem assumenda illo. Cum, dolores nihil. Amet tenetur ad necessitatibus debitis nulla.
          </span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, enim sapiente dolorem rem suscipit quaerat sint nostrum eligendi autem assumenda illo. Cum, dolores nihil. Amet tenetur ad necessitatibus debitis nulla.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h1 className='logo'>EBOOKIEE</h1>
          <p className='copyright'>Copyrights 2022.All Rights Reserved</p>
        </div>
        <div className="right">
          <img src="./img/payment.png"/>
        </div>
      </div>
    </div>
  )
}

export default Footer