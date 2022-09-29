import React from 'react';
import Trends from '../data/trending-products.json'

function ComonSliderMob() {
    return (
        < section className="trending-product-mobile" >
            <div className="trending-title">
                <h1><span>Trending</span> Products</h1>
            </div>

            <div className="all-products">

                {

                    Trends.slice(Trends.length - 2).map(trend => {
                        return (
                            <div className="product" key={trend.id}>
                                <div className="product-img">
                                    <img src={trend.image} alt="" srcset="" />
                                    <p className="product-name">Ethical</p>
                                </div>
                                <div className="product-detail">
                                    <h2>{trend.title}</h2>
                                    <p>{trend.price}</p>
                                </div>                                
                            </div>
                        )
                    })
                }
            </div>
            <a className="top-button">Shop All</a>
        </section >
    )
}

export default ComonSliderMob