import React from 'react'

const ProjectDone = () => {
    return (
        <>
            {/* Stats Section*/}
            <section className="w3l-stats-section py-5" id="stats">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="w3l-stats-inner-inf py-lg-4">
                        <div className="row stats-con text-center">
                            <div className="col-lg-3 col-6 stats_info counter_grid">
                                <p className="counter"> 10+ </p>
                                <h3>Finished Projects</h3>
                            </div>
                            <div className="col-lg-3 col-6 stats_info counter_grid">
                                <p className="counter"> 1000+ </p>
                                <h3>Working Hours</h3>
                            </div>
                            <div className="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-sm-5 mt-5">
                                <p className="counter"> 5+ </p>
                                <h3>Online Support</h3>
                            </div>
                            <div className="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-sm-5 mt-5">
                                <p className="counter"> 8 </p>
                                <h3>Happy Customers</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //Stats Section*/}

        </>
    )
}

export default ProjectDone