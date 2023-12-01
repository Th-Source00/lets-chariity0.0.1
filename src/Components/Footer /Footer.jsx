import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./footer.css"


export default function Footer() {
    const [email, setEmail] = useState("")
    return (
        <div>
            {/* <!-- footer section start --> */}
            <div className="footer_section layout_padding">
                <div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_logo">lets</div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">NAVIGATION</h4>
                            <div className="footer_menu_main">
                                <div className="footer_menu_left">
                                    <div className="footer_menu">
                                        <ul>
                                            <a href="##" style={{marginLeft:"10px"}} className="nav-item nav-link active">
                                                <Link to="/home">Home</Link> 
                                                </a>
                                            <div className="nav-item dropdown">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="link" id="dropdown-nav">
                                                       <a href='###' >About Us</a> 
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Link to="/MissonVision">
                                                            <Dropdown.Item>Mission & Vision</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Our Resources">
                                                            <Dropdown.Item>Who we are</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Who We Are">
                                                            <Dropdown.Item>Where we are</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Our Team">
                                                            <Dropdown.Item>Our Team</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Our Resources">
                                                            <Dropdown.Item>Our Resources</Dropdown.Item>
                                                        </Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                {/* ======================================= */}

                                                <Dropdown>
                                                    <Dropdown.Toggle variant="link" id="dropdown-nav">
                                                       <a href='###' >Our Impact</a> 
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Link to="/Education & Energy">
                                                            <Dropdown.Item>Education & Energy</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Health & Nurtition">
                                                            <Dropdown.Item>Health & Nurtition</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Community Empowerment">
                                                            <Dropdown.Item>Community Empowerment</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Gender Equality">
                                                            <Dropdown.Item>Gender Equality</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/Welfare Conversations">
                                                            <Dropdown.Item>Welfare Converstation</Dropdown.Item>
                                                        </Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>                                                
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer_menu_right">
                                    <div className="footer_menu">
                                        <ul>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-nav">
                                                    <a href='###' >Join Us</a>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Link to="/Sponsor">
                                                        <Dropdown.Item>Sponsor a child</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/FundRaising">
                                                        <Dropdown.Item>Fund Raising</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Volunteer">
                                                        <Dropdown.Item>Volunteer</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Virtual Internship">
                                                        <Dropdown.Item>Virtual Internship</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Events">
                                                        <Dropdown.Item>Events</Dropdown.Item>
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {/* ========================================================= */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-nav">
                                                    <a href='###' >What We Do</a>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Link to="/Rescue">
                                                        <Dropdown.Item>Rescue</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Recovery">
                                                        <Dropdown.Item>Recovery</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Advocacy">
                                                        <Dropdown.Item>Advocacy</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Preserve">
                                                        <Dropdown.Item>Preservation</Dropdown.Item>
                                                    </Link>
                                                    <Link to="/Become A Volunteer">
                                                        <Dropdown.Item>Become A Volunteer</Dropdown.Item>
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>


                                            <a href="#" className="nav-item nav-link"><Link to="/Gallery"></Link></a>
                                            <a href="###" className="nav-item nav-link">
                                                <Link to="/Blog">Blog</Link> </a>
                                            <a href="###" className="nav-item nav-link">
                                                <Link to="/Shop">Shop</Link> </a>


                                            <a href="####" className="nav-item nav-link">
                                                <Link to="/Contact Us">Contact</Link>
                                            </a>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">NEWS</h4>
                            <p className="footer_text">Generators on the Internet</p>
                            <p className="footer_text">Tend to repeat predefined</p>
                            <p className="footer_text">Chunks as necessary, making</p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <h4 className="footer_taital">address</h4>
                            <p className="footer_text">Ave NW, Washington</p>
                            <p className="footer_text">+01 1234567890</p>
                            <p className="footer_text">demo@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer_section_2">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-3">
                                <div className="social_icon">
                                    <ul>
                                        <div className="social">
                                            <a href=""><i className="fab fa-twitter"></i></a>
                                            <a href=""><i className="fab fa-facebook-f"></i></a>
                                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                                            <a href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-9">
                                <input type="text" className="address_text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email" name="text" />
                                <button type="button" className="get_bt">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer section end --> */}
            {/* <!-- copyright section start --> */}
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">2023 All Rights Reserved. Designed by <a href="###">S.O.G</a></p>
                </div>
            </div>
            {/* <!-- copyright section end --> */}
        </div>
    )
}
