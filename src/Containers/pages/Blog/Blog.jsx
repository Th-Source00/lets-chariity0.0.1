import React from 'react'
import blog1 from "../../../Assets/img/blog-1.jpg"
import blog2 from "../../../Assets/img/blog-2.jpg"
import blog3 from "../../../Assets/img/blog-3.jpg"
import "./blog.css"
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
      
       {/* <!-- Page Header Start --> */}
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>From Blog</h2>
                    </div>
                    <div className="col-12">
                        <a href="##"><Link to="/home">Home</Link></a>
                        <a href="##"><Link to="/Blog">Blog</Link></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        
        
        {/* <!-- Blog Start --> */}
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Blog</p>
                    <h2>Latest news & articles directly from our blog</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog1} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog2} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog3} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog1} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog2} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={blog3} alt="Image"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}

    </div>
  )
}
