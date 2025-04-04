import {
    BsGeoAlt, 
    BsEnvelopeOpen, 
    BsTelephone, 
    BsArrowRight, 
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    BsInstagram
} from "react-icons/bs"; // React Icon Bootstrap
import { Link } from "react-router-dom";

const Footer=()=>{
    return ( 
<>
<div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><BsGeoAlt className="text-primary me-2"/>123 Street, New York, USA</p>
                    <p className="mb-2"><BsEnvelopeOpen className="text-primary me-2"/>info@example.com</p>
                    <p className="mb-0"><BsTelephone className="text-primary me-2"/>+012 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Home</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>About Us</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Our Services</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Meet The Team</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Latest Blog</Link>
                        <Link className="text-body" to="/"><BsArrowRight className="text-primary me-2"/>Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Home</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>About Us</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Our Services</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Meet The Team</Link>
                        <Link className="text-body mb-2" to="/"><BsArrowRight className="text-primary me-2"/>Latest Blog</Link>
                        <Link className="text-body" to="/"><BsArrowRight className="text-primary me-2"/>Contact Us</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Your Email"/>
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><BsTwitter/></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><BsFacebook/></Link>
                        <Link className="btn btn-outline-primary btn-square me-2" to="/"><BsLinkedin/></Link>
                        <Link className="btn btn-outline-primary btn-square" to="/"><BsInstagram/></Link>
                    </div>
                </div>
                <div className="col-12 text-center text-body">
                    <Link className="text-body" to="/">Terms & Conditions</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Privacy Policy</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Customer Support</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Payments</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">Help</Link>
                    <span className="mx-1">|</span>
                    <Link className="text-body" to="/">FAQs</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <Link to="/" className="text-white">Pet Shop</Link>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <Link to="/" className="text-white">Tran Thi Diem My</Link></p>
                </div>
            </div>
        </div>
    </div></>
    )
}
export default Footer;