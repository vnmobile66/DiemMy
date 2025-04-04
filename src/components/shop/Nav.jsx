import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"; // React Icon Bootstrap

const Nav=()=>{
    return ( 
        <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/service" className="nav-item nav-link">Service</Link>
                    <Link to="/products" className="nav-item nav-link">Product</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <Link to="/price" className="dropdown-item">Pricing Plan</Link>
                            <Link to="/team" className="dropdown-item">The Team</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            <Link to="/blog" className="dropdown-item">Blog Grid</Link>
                            <Link to="/detail" className="dropdown-item">Blog Detail</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <BsArrowRight/></Link>
                </div>
            </div>
    )
}
export default Nav;