import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   
    return (
        <>
            {/*header*/}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1>
                            <Link className="navbar-brand" to="/">
                                <i className="fab fa-asymmetrik" />Portfolio
                            </Link>
                        </h1>
                        {/* if logo is image enable this   
      <a class="navbar-brand" href="#index.html">
          <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
      </a> */}
                        <button className="navbar-toggler collapsed bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                            <span className="navbar-toggler-icon fa icon-close fa-times" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-lg-auto align-items-center">
                                <li className="nav-item active">

                                    <Link className="nav-link navbar-toggler collapsed" to="/" >Home <span className="sr-only" >(current)</span></Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/about" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" >Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus"  className="nav-link" >Contact</Link>
                                </li>
                                {/*/right-btn*/}
                                <div className="header-btn mx-2">
                                    <Link className="btn btn-style btn-primary mr-lg-5" to="/contactus"> Hire Me</Link>
                                </div>
                                {/*/right-btn*/}
                            </ul>
                        </div>
                       
                    </nav>
                </div>
            </header>
            {/*//header*/}

        </>
    )
}

export default Header