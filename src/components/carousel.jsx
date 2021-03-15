import React, { useState, useEffect } from 'react';
import '../css/home.css' 
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.css'


// import List from './List';
// import CategoryItem from './CategoryItem';

const Carousel = () => {
    const [ data, setData ] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/banners')
            .then((resp) => resp.json())
            .then((result) => setData(result));
    }, []); 

    return (

        <div class="banner-carousel">
            <div id="carouselExampleIndicators" class="carousel slide box effect-1" data-ride="carousel">
                <ol class="carousel-indicators">
                    {
                        data.map((banner) =>
                            banner.order === 1 ? (
                                <li data-target="#carouselExampleIndicators" data-slide-to={banner.order - 1} className="active"></li>
                            ) : (
                                <li data-target="#carouselExampleIndicators" data-slide-to={banner.order - 1}></li>
                            )
                        )
                    }

                  

                </ol>
                <div class="carousel-inner">
                    {
                        data.map((banner) =>
                            banner.order === 1 ? (
                                <div className="carousel-item active">
                                    <img
                                        src={banner.bannerImageUrl}
                                        className="d-block w-100"
                                        alt={banner.bannerImageUrl}
                                    />
                                </div>
                            ) : (
                                <div className="carousel-item">
                                    <img
                                        src={banner.bannerImageUrl}
                                        className="d-block w-100"
                                        alt={banner.bannerImageUrl}
                                    />
                                </div>
                            )
                        )
                    }
                </div>

                

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ filter: "invert(100%)" }}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ filter: "invert(100%)" }}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;