import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch"
import "./Products.scss"

const Products = () => {

     
  const[sort,setSort] = useState("asc");
    const catId = parseInt(useParams().id)
    const[maxPrice,setPrice] = useState(2000);
    const[selectedsubCat,setSelectedSubCat] = useState([]);
    console.log(catId);

    const {data,loading} = useFetch(`/sub-categories?populate=*&[filter][categories][id][$eq]=${catId}`)
    const handleClick = (e) =>{
      const value = e.target.value
      const isChecked = e.target.checked
      setSelectedSubCat(isChecked?[...selectedsubCat,value]: selectedsubCat.filter((item)=>item !== value))
    }


  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {loading?"loading":data?.map((item)=>{
            return(
            <div className='inputItem' key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleClick} />
            <label htmlFor="1">{item.attributes.title}</label>
          </div>
            )
          })}
        </div>
        <div className='filterItem'>
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={2000} onChange={(e)=>setPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc"  name='price' onChange={(e)=>setSort("asc")}/>
            <label htmlFor="asc">Price (lowest Price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={(e)=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest Price)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} sort={sort} maxPrice={maxPrice} subCat={selectedsubCat}/>
      </div>
    </div>
  )
}

export default Products