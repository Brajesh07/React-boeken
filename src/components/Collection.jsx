import React from 'react'
import Trends from '../data/trending-products.json'

function Collection() {
    return (
        <section class="shop-product">
            <div class="shop-title">
                <h1>Shop Collections</h1>
            </div>

            <div class="all-products main-carousel"
                data-flickity='{"cellAlign": "left", "groupCells": true, "groupCells": 5 }'>
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
                                </div>                                
                            </div>
                        )
                    })
                }
            </div>
            <a class="top-button">Shop All</a>
        </section>
    )
}

export default Collection