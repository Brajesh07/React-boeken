import React from 'react'
import Featureds from '../data/featured-icons.json' ;

function FeaturesIconMob() {
    return (
        <section class="shop-mobile">
            <div class="container my-5">
                <h2>Shop by Values</h2>
                <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque,</p>
            </div>
            <div class="shop-icon main-carousel"
                data-flickity='{"cellAlign": "left", "groupCells": true, "groupCells": 3 }'>

                {
                    Featureds.slice(Featureds.length - 4).map(featured => {
                        return (
                            <div class="icon-img">
                                <img src={featured.image} alt="" srcset="" />
                                <p>{featured.title}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default FeaturesIconMob