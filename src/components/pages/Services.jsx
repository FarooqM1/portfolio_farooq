import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (

        <>
            <div>
                {/* Services banner */}
                <section className="w3l-about-breadcrumb text-center">
                    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                        <div className="container py-lg-5 mt-5">
                            <div className="banner-info-grid mt-5">
                                <h2 className="w3l-title-breadcrumb">Services</h2>
                            </div>
                            <ul className="breadcrumbs-custom-path">
                                <li><Link to="/">Home</Link></li>
                                <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true" /> Services</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* //Services banner */}
                {/* Services Section */}
                <section className="about-section py-5">
                    <div className="container py-lg-5 py-md-4 py-2">
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
                                        <h5 className="mb-3"><a >App development</a></h5>
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
                                        <h5 className="mb-3"><a >NodeJs Application</a></h5>
                                        <p>I have used node.js as backend for the react applications and it is low weight and fast. Nowadays node.js is the one of the most used server side application for the applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                                <div className="about-single">
                                    <div className="about-icon mb-4">
                                        <i className="fas fa-search" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="mb-3"><a >Seo Application</a></h5>
                                        <p>SEO is the activity of optimizing your App Store or Google Play apps to rank higher on a search results page.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                                <div className="about-single">
                                    <div className="about-icon mb-4">
                                        <i className="fab fa-buromobelexperte" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="mb-3"><a >Responsive design</a></h5>
                                        <p>Responsive design is the approach that suggests that design and development should respond to the user behaviour and environment based on screen size, platform and orientation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-5 mt-4">
                                <div className="about-single">
                                    <div className="about-icon mb-4">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="mb-3"><a >Digital Marketing</a></h5>
                                        <p>Help customers find your produts with ads that appear in related shopping results and product pages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //Services Section */}
                <div className="service-section py-5">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                            <h3 className="w3l-title-main">Innovative solutions
                                to boost your creative projects</h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <a href="services.html">
                                            <img className="d-block img-responsive" src="assets/images/blog3.jpg" alt="card-image" />
                                        </a>
                                    </div>
                                    <div className="card-body service-details">
                                        <a href="services.html" className="service-heading">Discuss the project </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4 pt-sm-0 pt-2">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <a href="services.html">
                                            <img className="d-block img-responsive" src="assets/images/blog4.jpg" alt="card-image" />
                                        </a>
                                    </div>
                                    <div className="card-body service-details">
                                        <a href="services.html" className="service-heading">Develop &amp; elaborate </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4 pt-lg-0 pt-2">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <a href="services.html">
                                            <img className="d-block img-responsive" src="assets/images/blog6.jpg" alt="card-image" />
                                        </a>
                                    </div>
                                    <div className="card-body service-details">
                                        <a href="services.html" className="service-heading">Final approvement </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services