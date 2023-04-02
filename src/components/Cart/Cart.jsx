import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [{
        id:1,
        img:"https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1649649/pexels-photo-1649649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Stylish Over Coat",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, corporis culpa impedit quasi repudiandae cumque animi quis laudantium possimus blanditiis, consequuntur optio quibusdam sunt eaque molestias eveniet dolores consequatur nostrum illum est laborum. Facilis in eveniet aut possimus nobis eligendi laborum nemo voluptatum? Magnam quibusdam corporis fugiat culpa unde dolores.",
        isNew:true,
        oldPrice: 899,
        price:599,
    },
{
        id:2,
        img:"https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1649649/pexels-photo-1649649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Stylish Over Coat",

        isNew:true,
        oldPrice: 899,
        price:599,
    }]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data.map((item)=>{
            return(
                <div className="item" key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            )
        })}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>reset cart</span>
    </div>
  )
}

export default Cart