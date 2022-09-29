import React from 'react';
import Reviews from '../data/review.json'

function Review() {
    return (
        <section class="customer my-5">
            <div class="container-fluid">
                <h2>What do our customers think</h2>
                <div class="row">
                    {
                        Reviews.map(review => {
                            return (
                                <div class="col-xl-4 col-md-4 col-sm-12" key={review.id}>
                                    <div class="custom-card">
                                        <div class="rating">
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                            <i class="fa-sharp fa-solid fa-star"></i>
                                        </div>
                                        <h3>{review.title}</h3>
                                        <p>{review.para}</p>
                                        <img src={review.image} alt="" srcset="" />
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>




    )
}

export default Review