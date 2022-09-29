import React from 'react'
import Arivals from '../data/arival.json';

function Arival() {
    return (
        <scetion class="arival py-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-md-12">
                        <h1>Latest Arivals</h1>
                        <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Donec velit neque,</p>
                        <a class="left-btn" href="">Browse New Products</a>
                    </div>
                    <div class="col-xl-8 col-md-12 main-carousel"
                        data-flickity='{ "cellAlign": "left", "groupCells": true, "groupCells": 4 }'>
                        {
                            Arivals.map(arival => {
                                return (
                                    <div className="product" key={arival.id}>
                                        <div className="product-img">
                                            <img src={arival.image} alt="" srcset="" />                                            
                                        </div>
                                        <div className="product-detail">
                                            <h2>{arival.title}</h2>                                            
                                        </div>                                        
                                    </div>
                                )
                            })
                        }                        
                        
                    </div>
                </div>
            </div>
            <a class="bottom-btn" href="">Browse all</a>
        </scetion>
    )
}

export default Arival