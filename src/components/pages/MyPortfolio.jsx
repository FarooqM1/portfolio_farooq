import React from 'react'
import MyWork from '../MyWork'
import { Link } from 'react-router-dom'

const MyPortfolio = () => {
  return (
    <div className='portfolio'>

         
            {/* portfolio banner */}
            <section className="w3l-about-breadcrumb text-center">
                <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                    <div className="container py-lg-5 mt-5">
                        <div className="banner-info-grid mt-5">
                            <h2 className="w3l-title-breadcrumb">My Portfolio</h2>
                        </div>
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home</Link></li>
                            <li className="active"><span className="fa fa-angle-right mx-2" aria-hidden="true" /> Portfolio</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* //portfolio banner */}
    <MyWork/>
    </div>
  )
}

export default MyPortfolio;