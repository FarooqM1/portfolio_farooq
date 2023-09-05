import React from 'react'

const MoreServices = () => {
    return (
        <>

            <section className="w3l-skills py-5" id="skills">
                <div className="container py-lg-5 py-md-4 py-3">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5">
                            <img src="assets/images/about1.jpg" alt className="img-fluid" />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
                            <h6 className="w3l-title-small mb-1">My skills</h6>
                            <h3 className="w3l-title-main">My Featured skills</h3>
                            <p className="mt-2">I Specialize in FrontEnd Development, and am passionate about creating Awesome
                                Website. And I always ready to impress the audience with my Creativity. </p>
                            <div className="progress-info mt-4">
                                <h6 className="progress-tittle">UI/UX Design</h6>
                                <div className="progress ">
                                    <div className="progress-bar progress-bar-striped p-1" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info">
                                <h6 className="progress-tittle">React Development/ React Native
                                </h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info">
                                <h6 className="progress-tittle">NodeJs
                                </h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info">
                                <h6 className="progress-tittle">MongoDB
                                </h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info">
                                <h6 className="progress-tittle">Html/Css/JavaScript</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-info mb-0">
                                <h6 className="progress-tittle">Responsive Web Design</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MoreServices