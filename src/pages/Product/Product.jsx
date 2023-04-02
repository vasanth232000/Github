import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch"

const Product = () => {
  const id = useParams().id
    const[selectedImg,setSelectedImg] = useState("img")
    const[count,setCount]=useState(1)
  const {data,loading} = useFetch(`/products/${id}?populate=*`)



  console.log(selectedImg)
  console.log(data?.attributes["img"])
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="img" onClick={(e)=>setSelectedImg("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="img" onClick={(e)=>setSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
          {/* <img alt="img" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} /> */}
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