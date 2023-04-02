import React from 'react'
import "./List.scss"
import useFetch from '../../hooks/useFetch'
import Card from '../card/Card'

const List = ({catId,maxPrice,subCat,sort}) => {

const{data,loading}=useFetch(
    `/products?populate=*&[filter][categories][id]=${catId}${subCat.map(
        item=>`&[filters][sub_categories][id][$eq]=${item}`)}
        &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    )

    console.log(sort)

  return (
    <div className='list'>
        {loading?"loading":data.map((item)=>{
         return <Card item={item} key={item.id}/>
        })}
    </div>
  )
}

export default List