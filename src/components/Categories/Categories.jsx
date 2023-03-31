import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">Sale</Link></button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">Women</Link></button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/7148049/pexels-photo-7148049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">New Season</Link></button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                <img src="https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">Men</Link></button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">Accesories</Link></button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button><Link className="link" to="/products/1">Shoes</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Categories