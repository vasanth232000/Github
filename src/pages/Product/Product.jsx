import React, { useState } from 'react';
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const[selectedImg,setSelectedImg] = useState(0)
  const[count,setCount]=useState(1)
  const images = ["https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="img" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="img" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veniam corporis reiciendis a modi nihil quia hic numquam animi qui.</p>
        <div className="quantity">
          <button onClick={(e)=>setCount(count===1 ? 1 :count-1)}>-</button>
          <span>{count}</span>
          <button onClick={(e)=>setCount(count+1)}>+</button>
        </div>
        <button className='add'><AddShoppingCartIcon/> ADD TO CART</button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
                <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product