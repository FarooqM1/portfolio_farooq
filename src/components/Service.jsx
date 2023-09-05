import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <>

            {/* Services Section */}
            <section className="about-section py-5">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                        <h3 className="w3l-title-main">What I do for you</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="about-single">
                                <div className="about-icon mb-4">
                                    <i className="fas fa-chalkboard" />
                                </div>
                                <div className="about-content">
                                    <h5 className="mb-3"><a >React Web Development</a></h5>
                                    <p>Design and creates javaScript based applications for web and mobile development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                            <div className="about-single">
                                <div className="about-icon mb-4">
                                    <i className="fab fa-app-store" />
                                </div>
                                <div className="about-content">
                                    <h5 className="mb-3"><a > App development</a></h5>
                                    <p>Apps are designed to run on smartphones, tablets, or other mobile devices and are typically available through app stores or other distribution channels.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-3">
                            <div className="about-single">
                                <div className="about-icon mb-4">
                                    <i className="fas fa-camera-retro" />
                                </div>
                                <div className="about-content">
                                    <h5 className="mb-3"><a > NodeJs Application</a></h5>
                                    <p>I have used node.js as backend for the react applications and it is low weight and fast. Nowadays node.js is the one of the most used server side application for the applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3l-btn text-center">
                        <Link to="/services" className="btn btn-border mt-lg-5 mt-4 me-2">
                            More services <span className="fas fa-long-arrow-alt-right" /></Link>
                    </div>
                </div>
            </section>
            {/* //Services Section */}

        </>
    )
}

export default Service