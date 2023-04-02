import React from 'react'
import "./FeaturedProducts.scss"
import useFetch from '../../hooks/useFetch'
import Card from "../card/Card"

const FeaturedProducts = ({type}) => {

const {data,loading} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)


  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe sapiente perspiciatis? Hic a adipisci perspiciatis commodi eligendi molestias impedit natus saepe! Amet ea dolor corrupti numquam nobis ullam provident!</p>
        </div>
        <div className="bottom">
           {loading?"loading":data.map(item=>(
                <Card item={item} key={item.id}/>
           ))}
        </div>
    </div>
  )
}

export default FeaturedProducts