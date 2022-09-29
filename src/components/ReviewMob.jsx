import React from 'react';
function Review() {
    return (
        <section class="customer-mobile my-5">
            <h2>What do our customers think</h2>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="custom-card">
                            <div class="rating">
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <h3>Name here</h3>
                            <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec velit neque,</p>
                            <img src="img/comp-logo.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="custom-card">
                            <div class="rating">
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <h3>Name here</h3>
                            <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec velit neque,</p>
                            <img src="img/comp-logo.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="custom-card">
                            <div class="rating">
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                                <i class="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <h3>Name here</h3>
                            <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec velit neque,</p>
                            <img src="img/comp-logo.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>



    )
}

export default Review