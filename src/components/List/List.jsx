import React from 'react'
import "./List.scss"
import Card from '../card/Card'

const List = () => {



        const data = [{
        id:1,
        img:"https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1649649/pexels-photo-1649649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Stylish Over Coat",
        isNew:true,
        oldPrice: 899,
        price:599,
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/1887975/pexels-photo-1887975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Ogly Printed T-Shirt",
        isNew:true,
        oldPrice: 999,
        price:799,
    },
    {
        id:3,
        img:"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Slim Shady Hoodie",
        isNew:false,
        oldPrice: 1299,
        price:1099,
    },
    {
        id:4,
        img:"https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Leather Jacket",
        isNew:true,
        oldPrice: 1199,
        price:799,
    },
]


  return (
    <div className='list'>
        {data.map((item)=>{
         return <Card item={item} key={item.id}/>
        })}
    </div>
  )
}

export default List