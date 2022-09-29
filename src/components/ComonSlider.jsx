import React from 'react';
import Trends from '../data/trending-products.json'

function ComonSlider(props) {
    return (
        < section className="trending-product" >
            <div className="trending-title">
                <h1><span>{props.name}</span> Products</h1>
            </div>

            <div className="all-products main-carousel" data-flickity='{ "groupCells": true, "groupCells": 4 }'>

                {
                    Trends.map(trend => {
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
                                <div className="add-cart">
                                    <a href="" className="add">Add to Basket</a>
                                    <a href="" className="buy">Buy Now</a>
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

export default ComonSlider