import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./nav.css"
import { Link } from 'react-router-dom';


export default function Navigate() {
    return (
        <div id='allNav'>
            <>
                {/* <!-- Top Bar Start --> */}
                <div className="top-bar d-none d-md-block">
                    <div className=" container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="top-bar-left">
                                    <div className="text">
                                        <i className="fa fa-phone-alt"></i>
                                        <p>+123 456 7890</p>
                                    </div>
                                    <div className="text">
                                        <i className="fa fa-envelope"></i>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="top-bar-right">
                                    <div className="social">
                                        <a href="##"><i className="fab fa-twitter"></i></a>
                                        <a href="##"><i className="fab fa-facebook-f"></i></a>
                                        <a href="##"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="##"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Top Bar End --> */}

                {/* <!-- Nav Bar Start -->
                <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a href="index.html" className="navbar-brand">lets </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">About us</a>
                                    <div className="dropdown-menu">
                                        <a href="single.html" className="dropdown-item">Mission & Vision</a>
                                        <a href="service.html" className="dropdown-item">Who we are</a>
                                        <a href="team.html" className="dropdown-item">Where we are </a>
                                        <a href="donate.html" className="dropdown-item">Our Team </a>
                                        <a href="volunteer.html" className="dropdown-item">Our Resources </a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Our Impact</a>
                                    <div className="dropdown-menu">
                                        <a href="single.html" className="dropdown-item">Education & Energy</a>
                                        <a href="service.html" className="dropdown-item">Health & Nurtition</a>
                                        <a href="team.html" className="dropdown-item">Community Empowerment</a>
                                        <a href="donate.html" className="dropdown-item">Gender Equality</a>
                                        <a href="volunteer.html" className="dropdown-item">Welfare Converstation</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Join Us</a>
                                    <div className="dropdown-menu">
                                        <a href="single.html" className="dropdown-item">Sponsor a child</a>
                                        <a href="service.html" className="dropdown-item">Fund Raising</a>
                                        <a href="team.html" className="dropdown-item">Volunteer</a>
                                        <a href="donate.html" className="dropdown-item">Virtual Internship</a>
                                        <a href="volunteer.html" className="dropdown-item">Events</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">What We Do</a>
                                    <div className="dropdown-menu">
                                        <a href="single.html" className="dropdown-item">Rescue</a>
                                        <a href="service.html" className="dropdown-item">Recovery</a>
                                        <a href="team.html" className="dropdown-item">Advocacy</a>
                                        <a href="donate.html" className="dropdown-item">Preservation</a>
                                        <a href="volunteer.html" className="dropdown-item">Become A Volunteer</a>
                                    </div>
                                </div>
                                <a href="blog.html" className="nav-item nav-link">Gallery</a>
                                <a href="blog.html" className="nav-item nav-link">Blog</a>
                                <a href="blog.html" className="nav-item nav-link">Shop</a>


                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}





                {/* <!-- Nav Bar Start --> */}
                <div className='d-flex flex-row-reverse bd-highlight'>
                    <div className="navbar navbar-expand-lg bg-dark navbar-dark ">
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <a href="#####" className="navbar-brand">lets </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className=" navbar-nav ml-auto">

                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown">About us</a>
                                    <div className="dropdown-menu">
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Misson & Vision">Mission & Vision</Link>
                                        </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Who We Are">Who we are</Link>
                                        </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Where We Re">Where we are</Link>
                                        </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Our Team">Our Team</Link>
                                        </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Our Resources">Our Resources</Link>
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown">Our Impact</a>
                                    <div className="dropdown-menu">
                                        <a href='##' className="dropdown-item">
                                            <Link to="/Education & Energy">Education & Energy</Link> </a>
                                        <a href='###' className="dropdown-item">
                                            <Link to="/Health & Nurtition">Health & Nurtition</Link> </a>
                                        <a href='###' className="dropdown-item">
                                            <Link to="/Community Empowerment">Community Empowerment</Link> 
                                            </a>
                                        <a href='###' className="dropdown-item">
                                            <Link to="/Gender Equality">Gender Equality</Link> </a>
                                        <a href=" ##" className="dropdown-item">
                                            <Link to="/Welfare Converstation">Welfare Converstation</Link> </a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="##" className="nav-link dropdown-toggle" data-toggle="dropdown">Join Us</a>
                                    <div className="dropdown-menu">
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Sponsor a child">Sponsor a child</Link> </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Fund Raisin"></Link>g</a>
                                        <a href="###" className="dropdown-item">
                                            <Link to="/Volunteer">Volunteer</Link> </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Virtual Internship">Virtual Internship</Link></a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Events">Events</Link> </a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="##" className="nav-link dropdown-toggle" data-toggle="dropdown">What We Do</a>
                                    <div className="dropdown-menu">
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Rescue">Rescue</Link> </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Recovery">Recovery</Link> </a>
                                        <a href="###" className="dropdown-item">
                                            <Link to="/Advocate"></Link> Advocacy</a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Preserve">Preservation</Link> </a>
                                        <a href="##" className="dropdown-item">
                                            <Link to="/Become A Volunteer">Become A Volunteer</Link> </a>
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link"><Link to="/Gallery"></Link></a>
                                <a href="###" className="nav-item nav-link">
                                   <Link to="/Blog">Blog</Link> </a>
                                <a href="###" className="nav-item nav-link">
                                   <Link to="/Shop">Shop</Link> </a>


                                <a href="####" className="nav-item nav-link">
                                   <Link to="/Contact Us"> Contact</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Nav Bar End -->  */}


            </>
        </div>
    )
}
