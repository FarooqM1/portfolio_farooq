import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer className="text-center">
                <div className="footer py-5">
                    <div className="container py-md-4">
                        <div clss="footer-logo">
                            <Link className="logo" to="/">
                                <i className="fab fa-asymmetrik" />Portfolio
                            </Link>
                        </div>
                        <div className="footer-contact-info mt-4">
                            <ul>
                                <li>
                                    <a href="tel:+91 8896452924" className="contact-text-sub">
                                        <span className="fas fa-phone me-2" />+91 8896452924</a>
                                </li>
                                <li>
                                    <a href="mailto:farooqdln97@gmail.com" className="contact-text-sub">
                                        <span className="fas fa-envelope me-2" />farooqdln97@gmail.com </a>
                                </li>
                                <li>
                                    <p className="contact-text-sub">
                                        <span className="fas fa-map-marker me-2" />New Friends Colony, Okhla, New Delhi, India - 110025.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="row footer-grids">
                        <div className="col-lg-6 copyright text-lg-start text-center align-center">
                            <p>© 2023  MyPortfolio. All Rights Reserved | Design by <a> Farooq </a><a style={{"color":"red"}} > &#10084;</a> </p>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4">
                            <div className="social">
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/farooq-ansari-068841198/" target='_blank'><span className="fab me-2 fab fa-linkedin-in" /></a></li>
                                    <li><a href="https://twitter.com/FarooqueAmir2"  target='_blank'><span className="fab me-2 fa-twitter" /></a></li>
                                    <li><a href="https://github.com/FarooqM1" target='_blank'><span className="fab me-2 fa-github" /></a></li>
                                    <li><a href="https://www.facebook.com/farooque.ahmad.188" target='_blank'><span className="fab me-2 fa-facebook-f" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* //footer */}

        </>
    )
}

export default Footer