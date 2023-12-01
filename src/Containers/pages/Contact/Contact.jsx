import React from 'react'
import "./contact.css"
import { Link } from 'react-router-dom'
import contactImg from "../../../Assets/img/contact.jpg"

export default function Contact() {
  return (
    <div>
     {/* <!-- Page Header Start --> */}
     <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>From Contact</h2>
                    </div>
                    <div className="col-12">
                        <a href="##"><Link to="/home">Home</Link></a>
                        <a href="##"><Link to="/Contact Us">Contact</Link></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        
      
      {/* <!-- Contact Start --> */}
    <div className="contact">
        <div className="container">
            <div className="section-header text-center">
                <p>Get In Touch</p>
                <h2>Contact for any query</h2>
            </div>
            <div className="contact-img">
                <img src={contactImg} alt="Image"/>
            </div>
            <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                    <div className="control-group">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" required="required"
                            data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" required="required"
                            data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" required="required"
                            data-validation-required-message="Please enter a subject" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <textarea className="form-control" id="message" placeholder="Message" required="required"
                            data-validation-required-message="Please enter your message"></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div>
                        <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}

    </div>
  )
}
