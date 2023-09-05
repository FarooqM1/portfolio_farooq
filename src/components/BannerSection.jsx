import React from 'react'
import { Link } from 'react-router-dom'

const BannerSection = () => {
    return (
        <>
            {/* banner section */}
            <section id="home" className="w3l-banner pt-5">
                <div className="container pt-lg-5 pt-md-4">
                    <div className="row pt-lg-5 pt-4">
                        <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5">
                            <h1 className="mb-3">Hi, I'm Farooq Ansari</h1>
                            <h3 className="mb-4"> <span className="typed-text" /><span className="cursor">React Developer</span> </h3>
                            <p>I love Development and have been working as React Developer since 2022. I Can
                                give your business a new Creative start right away!</p>
                            <Link className="btn btn-primary btn-style mt-5 me-2" to="contactus"> Hire Me </Link>
                            <Link className="btn btn-style transparent-btn mt-5" to="myportfolio"> My Portfolio</Link>
                        </div>
                        <div className="col-lg-5 text-lg-end my-image mt-lg-0 mt-4">
                            <img src="assets/images/banner.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* //banner section */}

        </>
    )
}

export default BannerSection;