import React, { useEffect, useState } from 'react';
// ============================================
// ============================================
import rescue from "../../Assets/icons png/rescue.png"
import recovery from "../../Assets/icons png/recovery.png"
import Advocacy from "../../Assets/icons png/advocate.png"
import preserve from "../../Assets/icons png/preservation.png"
import Volunteer from "../../Assets/icons png/volunteer.png"
// import about from "../../Assets/img"
// ================================
import gallery from "../../Assets/img/gallery02.jpg"
// ================================
import "./charity.css"
import Navigate from '../../Components/navbar/Navigate'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel, Dropdown } from 'react-bootstrap';
import Footer from '../../Components/Footer /Footer.jsx'
import { Button } from '@mui/material';
import VerticalCarousel from '../../Components/Veritical Carousel/VerticalCarousel.jsx';
import { Link } from 'react-router-dom';



export default function CharityHome() {
    // const[name, SetName] = useState("");
    // const[email, SetEmail] = useState("");
    // const[subject, SetSubject] = useState("");
    // const[message, SetMessage] = useState("");
    // // ==================================================
    // const [isChecked, setChecked] = useState(false);

    // const handleChange = (event) => {
    //   setChecked(event.target.checked);
    // };


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div id='body'>
            <>
                <div className='conainter-fluid'>
                    <Navigate />
                </div>

                <div className="container-fluid">


                    {/* <!-- Carousel Start --> */}

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item >
                            <div
                                className="d-block w-100"
                                id="carousel1"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                                className="d-block w-100"
                                id="carousel2"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                                className="d-block w-100"
                                id="carousel3"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* ========Carosel end================ */}

                {/* ========About Start================ */}
                {/* <!-- About Start --> */}
                <div className="about">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <p>More to be done</p>
                                    <h2>Worldwide non-profit charity organization</h2>
                                </div>
                                <div className="about-tab">
                                    <ul className="nav nav-pills nav-justified">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#tab-content-1">About US</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#tab-content-2">Our Impact</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#tab-content-3">Join Us</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="tab-content-1" className="container tab-pane active">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis.
                                            Donec in hendrerit dui, vel blandit massa. Ut vestibulum suscipit cursus. Cras quis
                                            porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum. Phasellus et
                                            felis sed purus tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque.
                                            Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                            <br />

                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" id="content-button">
                                                    Read More
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

                                        </div>
                                        <div id="tab-content-2" className="container tab-pane fade">
                                            Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo, posuere congue
                                            turpis massa in mi. Proin ornare at massa at fermentum. Nunc aliquet sed nisi iaculis
                                            ornare. Nam semper tortor eget est egestas, eu sagittis nunc sodales. Interdum et
                                            malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum sapien sed purus
                                            molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <br />
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" id="content-button">
                                                    Read More
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


                                            {/* <Button id="content-button" className='nav-item dropdown' variant="outlined" >
                                                <div className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown">Read more</a>
                                                    <div className="dropdown-menu">
                                                        <a href='##' className="dropdown-item"><Link to="/Education & Energy">Education & Energy</Link></a>
                                                        <a href='###' className="dropdown-item"><Link to="/Health & Nutrition">Health & Nurtition</Link></a>
                                                        <a href='###' className="dropdown-item"><Link to="/Community Empowerment">Community Empowerment</Link></a>
                                                        <a href='###' className="dropdown-item"><Link to="/Gender Equality">Gender Equality</Link></a>
                                                        <a href=" ##" className="dropdown-item"><Link to="/Welfare Conversations">Welfare Converstation</Link></a>
                                                    </div>
                                                </div>

                                            </Button> */}

                                        </div>
                                        <div id="tab-content-3" className="container tab-pane fade">
                                            Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien. Nunc eu dignissim
                                            lorem. Suspendisse at hendrerit enim. Interdum et malesuada fames ac ante ipsum primis
                                            in faucibus. Sed condimentum semper turpis vel facilisis. Nunc vel faucibus orci. Mauris
                                            ut mauris rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium enim sit
                                            amet finibus. Curabitur at erat molestie, tincidunt lorem eget, consequat ligula.
                                            <br />

                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" id="content-button">
                                                    Read More
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <Link to="/Sponsor"><a href='##'>Sponsor a child</a></Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="/FundRaising"><a href='##'>Fund Raising</a></Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="/Volunteer"><a href='##'>Volunteer</a></Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="/Virtual Intenship"><a href='##'>Virtual Internship</a></Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link to="/Events"><a href='##'>Events</a></Link>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-img" data-parallax="scroll" ><VerticalCarousel /></div>

                            </div>

                        </div>
                    </div>

                </div>
                {/* <!-- About End --> */}

                {/* <!-- Service Start --> */}
                <div className="service">
                    <div className="container">
                        <div className="section-header text-center">
                            <h4>What We Do?</h4>
                            <h2>We believe that we can save more lifes with you</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img className='img-fluid' src={rescue} alt='ressuce-icon' />

                                    </div>
                                    <div className="service-text">
                                        <h3>Rescue</h3>
                                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        <br />
                                        <Button id="content-button" variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img className='img-fluid' src={recovery} alt='recovery-icon' />
                                    </div>
                                    <div className="service-text">
                                        <h3>Recovery</h3>
                                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        <br />
                                        <Button id="content-button" variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img className='img-fluid' src={Advocacy} alt='Advocacy-icon' />

                                    </div>
                                    <div className="service-text">
                                        <h3>Advocacy</h3>
                                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        <br />
                                        <Button id="content-button" variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img className='img-fluid' src={preserve} alt='preserve-icon' />
                                    </div>
                                    <div className="service-text">
                                        <h3>Preservation</h3>
                                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        <br />
                                        <Button variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img className='img-fluid' src={Volunteer} alt='Volunteer-icon' />
                                    </div>
                                    <div className="service-text">
                                        <h3>Become a Volunteer</h3>
                                        <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                        <br />
                                        <Button variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Service End --> */}
                {/* ========================================== */}
                {/* ========================================== */}
                {/* <!-- Gallery Start --> */}
                <div className="container">
                    <div className="about-gallery">
                        <div className="row align-items-center">
                            <div id="gallery-div" className='container '>
                                <div className="col-lg-6" data-parallax="scroll" >
                                    <img className='gallery-image' src={gallery} alt="gallery-image" />
                                </div>
                                {/* ==============Content=========== */}
                                <div className="tab-content-gallery">
                                    <ul className="nav nav-pills nav-justified">
                                        <h2 className='gallery-h2'>Gallery</h2>
                                    </ul>
                                    <div className="container tab-pane active">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        <br />
                                        <Button id="" variant="outlined" ><Link to=""></Link>Read More </Button>
                                    </div>


                                </div>
                            </div>


                            {/* <!-- Shop& Blog Start --> */}
                            <div className="Shop-blog-div">
                                <div className="container-fluid">
                                    <div className="row align-items-center">

                                        <div className="container-fluid">

                                            <div id='blog-shop' className=" container-fluid">


                                                <div className="blog-tab-content">
                                                    <div id="content-blog" className="container tab-pane active">
                                                        <ul className="nav nav-pills nav-justified">
                                                            <h2 id="blog-h2">Blog</h2>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis.
                                                            ..</p>
                                                    </div>
                                                    <br />
                                                    <Button id="content-button" variant="contained" >Read More </Button>

                                                </div>
                                                {/* ==================================== */}
                                                <div className="Shop-tab-content">

                                                    <div id="content-shop" className="container tab-pane active">
                                                        <ul className="nav nav-pills nav-justified">
                                                            <h2 id="Shop-h2">Shop</h2>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis.
                                                            ..</p>
                                                    </div>
                                                    <br />
                                                    <Button id="content-button" variant="outlined" ><Link to=""></Link>Read More </Button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- Shop End --> */}


                        </div>

                    </div>
                </div>
                {/* <!-- Gallery End --> */}



                {/* ========================================== */}

                {/* ========================================== */}

                <Footer />
            </>

        </div>
    )
}
