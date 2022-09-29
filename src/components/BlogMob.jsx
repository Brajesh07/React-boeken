import React from 'react'
import BlogsPosts from '../data/blog.json';

function BlogMob() {
    return (
        <section class="blog-mobile">
            <div class="container-fluid">
                <div class="blog-mobile-title">
                    <h2>Latest Blog Posts</h2>
                </div>
                <div class="row">
                    <div class="row main-carousel" data-flickity='{"cellAlign": "left", "contain": true }'>
                    {
                        BlogsPosts.map(blogsPost => {
                            return (
                                    <div class="card-container" key={blogsPost.id}>
                                        <div class="img-blog">
                                            <img src={blogsPost.image} alt="" srcset="" />
                                        </div>
                                        <h3>{blogsPost.title}</h3>
                                        <p>{blogsPost.para}<a href="">Continue Reading</a> </p>
                                    </div>
                            )
                        })
                    }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogMob