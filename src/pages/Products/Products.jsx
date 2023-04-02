import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom';
import "./Products.scss"

const Products = () => {
    const catId = parseInt(useParams().id)
    const[maxPrice,setPrice] = useState(1000);
    const[sort,setSort] = useState(null);
    console.log(catId);

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (lowest Price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price (lowest Price)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} sort={sort} maxPrice={maxPrice}/>
      </div>
    </div>
  )
}

export default Products