import React from "react";
import { BsHouseHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service=()=>{
    return(
        <div className="container-fluid py-5">
            <div className="container">
                <div className="col-lg-7">
                    <div className="border-5 ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Services</h6>
                        <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <BsHouseHeart className="display-1 text-primary me-4"/>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="flaticon-house display-1 text-primary me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="flaticon-house display-1 text-primary me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="flaticon-house display-1 text-primary me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Training</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="flaticon-house display-1 text-primary me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-item bg-light d-flex p-4">
                            <i className="flaticon-house display-1 text-primary me-4"></i>
                            <div>
                                <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                                <p>
                                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit
                                </p>
                                <Link className="text-primary text-uppercase" to="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;