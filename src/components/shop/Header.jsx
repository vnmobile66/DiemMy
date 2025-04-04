import Nav from "./Nav";
import { Link } from "react-router-dom";
import { BsGeoAlt, BsEnvelopeOpen, BsPhoneVibrate, BsShop } from "react-icons/bs"; // React Icon Bootstrap

const Header=()=>{
    return ( 
		<>
		<div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <BsGeoAlt className="fs-1 text-primary me-3"/>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Our Office</h6>
                        <span>123 Street, New York, USA</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-2">
                <div className="d-inline-flex align-items-center">
                    <BsEnvelopeOpen className="fs-1 text-primary me-3"/>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Email Us</h6>
                        <span>info@example.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <BsPhoneVibrate className="fs-1 text-primary me-3"/>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Call Us</h6>
                        <span>+012 345 6789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}

    {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand ms-lg-5">
            <h1 className="m-0 text-uppercase text-dark"><BsShop className="fs-1 text-primary me-3"/>Pet Shop</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Nav/>
    </nav>
    </>
	)
}
export default Header;

// const Header = () => {
//     return ( 
//         <div>
//             header
//         </div>
//     );  // Đóng ngoặc đúng chỗ
// };

// export default Header;
