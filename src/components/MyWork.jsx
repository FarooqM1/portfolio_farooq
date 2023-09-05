import React from 'react'
import { Link } from 'react-router-dom'

function MyWork() {
    return (
        <>
            {/* portfolio */}
            <section className="w3-gallery py-5" id="portfolio">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                        <h3 className="w3l-title-main mb-2">My Success Work</h3>
                    </div>
                    <div className="row portfolio-area clearfix p-0 m-0">
                        <div className="col-lg-4 col-md-6 portfolio-item2 content" data-id="id-1" data-type="cat-item-1">
                            <span className="image-block">
                                <a href="https://salesbeez.in/" target='_blank' >
                                    {/* <div className="content-overlay" /> */}
                                    <img src="assets/images/salesbeez..png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                   
                                        <h3 className="content-title " style={{color:"#0A0DF7"}}>Ecommerce</h3>
                                        {/* <p className="content-text">This is a short description</p> */}
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item2 content mt-md-0 mt-4" data-id="id-2" data-type="cat-item-2">
                            <span className="image-block">
                                <a href="https://medt.in/" target='_blank' >
                                    <img src="assets/images/medt.png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title"  style={{color:"#0A0DF7"}}>Medicine</h3>
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item2 content mt-lg-0 mt-4" data-id="id-3" data-type="cat-item-3">
                            <span className="image-block">
                                <a  href="https://www.kiranaworld.in/online-grocery-in-jamshedpur" target='_blank'>
                                    <img src="assets/images/kiranaworld.png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title"  style={{color:"#0A0DF7"}}>Online Grocery</h3>
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-4" data-type="cat-item-4">
                            <span className="image-block">
                                <a  href="https://tgpay.in/" target='_blank'>
                                    <img src="assets/images/tgpay.png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title"  style={{color:"#0A0DF7"}}>Online Payment</h3>
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-5" data-type="cat-item-5">
                            <span className="image-block">
                                <a className="image-zoom" href="https://guwahatiwarehouses.com/" target='_blank' >
                                    <img src="assets/images/warehouse.png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title"  style={{color:"#0A0DF7"}}>Business Advertisement</h3>
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item2 content mt-4" data-id="id-7" data-type="cat-item-6">
                            <span className="image-block">
                                <a className="image-zoom" href="http://gyanniketan.in/" target='_blank'>
                                    <img src="assets/images/education.png" className="img-fluid w3layouts agileits" alt="portfolio-img" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title"  style={{color:"#0A0DF7"}}>Education </h3>
                                    </div>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/*end portfolio-area */}
                </div>
                {/* //gallery container */}
            </section>
            {/* //portfolio */}

        </>
    )
}

export default MyWork