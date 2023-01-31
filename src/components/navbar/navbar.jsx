import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import "./Navbar.scss";


const navbar = () => {
  return (
  <div className='navbar'>
    <div className='wrapper'>
      <div className='left'>
        <div className="item">
          <img src="/img/en.png"/>
          <KeyboardArrowDownIcon/>
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon/>
        </div>
         <div className="item">
          <Link to="/products/1">Women</Link>
         </div>
          <div className="item">
          <Link to="/products/2">Men</Link>
         </div>
          <div className="item">
          <Link to="/products/3">Children</Link>
         </div>
      </div>
      <div className='center'>
        <div className='item'>
         <Link to="/">EBOOKIEE</Link>
        </div>
      </div>
      <div className='right'>
          <div className="item">
            <Link to="">Homepage</Link>
          </div>
          <div className="item">
            <Link to="">About</Link>
          </div>
          <div className="item">
            <Link to="">Contact</Link>
          </div>
          <div className="item">
            <Link to="">Stores</Link>
          </div>
          <div className="item">
            <SearchIcon/>
          </div>
          <div className="item">
            <PersonIcon/>
          </div>
          <div className="item">
            <FavoriteIcon/>
          </div>
          <div className="item">
            <ShoppingCartIcon/>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar