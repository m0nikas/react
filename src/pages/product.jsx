
import 'bootstrap/dist/css/bootstrap.css'
import '../css/product.css'
import util from '../util.js'
import React, { useState, useEffect } from 'react';
 
const ProductListing = () => {
    const [ data, setData ] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((resp) => resp.json())
            .then((result) => setData(result));
    }, []); 
    // .card>.row>(.col-md-4+.col-md-8)
    return (
        <div className="page">
        <div className="row">                         
            {data.map((category,index)=>( 
            <div className="col mb-4">
                <div className="card">
                {/* <h5 class="card-title">{category.name}</h5>  */}
                <div className="card-title">{category.name}</div>
                <div className="card-body">
                <img className="card-img-top" src={category.imageURL} alt={category.name}  style={{ width: "200px", height: "200px" }}/>
                <div className="card-text" id="txtbox">{category.description}
                </div>
                <div className="row">
                    <div className="cardInfo">
                    {util.formatCurrency(category.price)}
                    <button className="btn btn-danger">Add to cart</button>
                    </div>
                    
                </div>
                </div>
                 </div>
                </div>
                
                
                
               

            ))}
            </div>
            </div>
)
    
}
 
export default ProductListing;