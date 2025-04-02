import { Outlet } from "react-router-dom"
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import"../../assets/assets/css/style.css"
import"../../assets/assets/css/main1.css"

import"../../assets/assets/vendors/feather/feather.css"
import"../../assets/assets/vendors/mdi/css/materialdesignicons.min.css"
import"../../assets/assets/vendors/ti-icons/css/themify-icons.css"
import"../../assets/assets/vendors/font-awesome/css/font-awesome.min.css"
import"../../assets/assets/vendors/typicons/typicons.css"
import"../../assets/assets/vendors/simple-line-icons/css/simple-line-icons.css"
import"../../assets/assets/vendors/font-awesome/css/font-awesome.min.css"
import"../../assets/assets/vendors/css/vendor.bundle.base.css"
import"../../assets/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css"
import"../../assets/assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css"
import"../../assets/assets/js/select.dataTables.min.css"
import"../../assets/assets/images/favicon.png"

const LayoutAdmin =()=>{
    return (
        <div>
        <body className="with-welcome-text">
        <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
           <Nav />
           <div className="main-panel">
           <Outlet />

            <Footer />
            </div>
            </div>

            </div>
        </body>
        </div>
    )
};

export default LayoutAdmin;