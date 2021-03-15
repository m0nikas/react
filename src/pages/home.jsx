import React, { useState, useEffect } from 'react';
import '../css/home.css' 
const Banner = () => {
    const [ data, setData ] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((resp) => resp.json())
            .then((result) => setData(result));
    }, []); 

return (    
    <div className="page">     
    {data.map((category)=>(
    <div className="container">
        <div className="row">
        <div className="col-md-5">
            <img src={category.imageUrl} alt={category.name} id="image"/>

            

        </div>
        <div className="col-md-5">
            <p id="category-name">{category.name}</p>
            <p>{category.description}</p>
            <button type="button" className="btn btn-danger" id='catButton'>
                Explore {category.key}

            </button>
        </div>   
        </div>
  </div>)
    )}
    </div> )
}

export default Banner;

