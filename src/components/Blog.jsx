import React from 'react'
import BlogsPosts from '../data/blog.json';

function Blog() {
    return (
        <section class="blog">
            <div class="container-fluid">
                <div class="blog-title">
                    <h2>Latest Blog Posts</h2>
                    <a href="">Our Blog</a>
                </div>
                <div class="row">
                    {
                        BlogsPosts.map(blogsPost => {
                            return (
                                <div class="col-xl-4 col-md-6 col-sm-12 px-5" key={blogsPost.id}>
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
        </section>
    )
}

export default Blog