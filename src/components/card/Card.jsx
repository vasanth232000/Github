import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const card = ({item}) => {
  return (
    
    <Link className='link' to={`/Product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}
      <img src={
        process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
        } className="mainImg" alt={item.attributes?.title}></img>
      <img src={
        process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
      } className="secondImg" alt={item.attributes?.title}></img>
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className="prices">
      <h3>₹ {item?.attributes.oldPrice || item?.attributes.price + 500}</h3>
      <h3>₹ {item?.attributes.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default card