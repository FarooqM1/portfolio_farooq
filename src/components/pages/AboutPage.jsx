import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (<>
        <div>
           
            {/* about banner */}
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                    <div className="container py-lg-5 mt-5">
                        <div className="banner-info-grid mt-5">
                            <h2 className="w3l-title-breadcrumb">About Me</h2>
                        </div>
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home</Link></li>
                            <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true" /> About</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* //about banner */}





            <div>
                {/* About Section */}
                <section className="w3l-content-6" id="skills">
                    <div className="content-6-mian py-5">
                        <div className="container py-lg-5 py-md-4 py-2">
                            <div className="content-info-in row">
                                <div className="content-gd col-lg-5 pe-lg-5 my-image">
                                    <img src="assets/images/about.jpg" alt className="img-fluid" />
                                </div>
                                <div className="content-gd col-lg-7 mt-lg-0 mt-5 align-self ps-lg-5">
                                    <h6 className="w3l-title-small mb-1">About Me</h6>
                                    <h3 className="w3l-title-main mb-lg-4 mb-3">A Few words about me</h3>
                                    <p className="my-4 pe-lg-5">I love Development, React Native, React Development, and Mern Stack Developer and have been working since 2022. I can give your business a new creative start right away! Contact me and we will discuss your projects!</p>
                                    <h5 className="w3l-subtitle mb-md-5 mb-4">Having O2 Years of Experience. I Would Love to make your Ideas real. I Can give your business a new Creative start right away!</h5>
                                    <div className="progress-info ">
                                        <h6 className="progress-tittle">React Native / React Development </h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info info1">
                                        <h6 className="progress-tittle">Nodejs</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info info3">
                                        <h6 className="progress-tittle">MongoDB</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info info4 mb-4">
                                        <h6 className="progress-tittle">HTML/CSS/JavaScript</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info info4 mb-4">
                                        <h6 className="progress-tittle">UI/UX Design</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info info4">
                                        <h6 className="progress-tittle">Responsive Web Design</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                
            </div>

        </div>

    </>
    )
}

export default AboutPage