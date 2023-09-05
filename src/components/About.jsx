import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            {/* About Section*/}
            <section className="w3l-about py-5" id="about">
                <div className="container py-md-5 py-2">
                    <div className="row w3l-row">
                        <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
                            <img src="assets/images/about.jpg" alt className="img-fluid" />
                        </div>
                        <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
                            <h6 className="w3l-title-small mb-1">My Biography</h6>
                            <h3 className="w3l-title-main mb-2">A Lead React Developer & MERN Stack Developer & Web Developer.</h3>
                            <p className="my-4 pe-lg-5">I love Development, Graphic design and UI Designer and have been working  since 2022. I Can give your business a new Creative start right away! Contact me and we will discuss your projects!</p>
                            <div className="my-info mt-4">
                                <div className="single-info"><span>Name:</span>
                                    <p>Farooq Ansari</p>
                                </div>
                                <div className="single-info"><span>From:</span>
                                    <p>Uttar Pradesh, India</p>
                                </div>
                                <div className="single-info"><span>Email:</span>
                                    <p><a href="mailto:example@mail.com">farooqdln97@mail.com</a></p>
                                </div>
                                <div className="single-info"><span>Phone:</span>
                                    <p><a href="tel:+21 234 567 8901">+91 8896452924</a></p>
                                </div>
                            </div>
                            <ul className="follow-social mt-lg-5 mt-4">
                                <li>
                                    <h5 className="me-md-3">Follow me on </h5>
                                </li>
                                <li><a href="https://www.linkedin.com/in/farooq-ansari-068841198/" target='_blank'><span className="fab fa-linkedin-in" /></a>
                                </li>
                                <li><a href="https://www.facebook.com/farooque.ahmad.188" target='_blank'><span className="fab fa-facebook-f" /></a>
                                </li>
                                <li><a href="https://github.com/FarooqM1" target='_blank'><span className="fab fa-github" /></a></li>
                                <li><a href="https://twitter.com/FarooqueAmir2"  target='_blank'><span className="fab fa-twitter" /></a></li>
                            </ul>
                            <div className="w3l-btn">
                                <Link to="contactus" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-2">Hire me</Link>
                                <a href="farooq_react_developer.pdf" target='_blank' className="btn btn-style btn-secondary mt-lg-5 mt-4 ms-2">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //About Section*/}

        </>
    )
}

export default About