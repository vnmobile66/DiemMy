import { useEffect, useState, React } from "react";
import apiProduct from "../../api/apiProduct";
import "../../api/config";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { BsHouseHeart } from "react-icons/bs";
import about from "../../assets/img/about.jpg";

const Home=()=>{
    const [products, setNewProducts] = useState([]);
    useEffect(()=>{
    apiProduct.getNewest().then((res)=>{
        try{
            const productData=res.data.map((product)=>{
                return{
                    id:product.id,
                    product_name: product.product_name,
                    slug: product.slug,
                    price: product.price,
                    image: product.image.url
                }
            });

            setNewProducts(productData);
        }catch(err){
            console.log("Error:",err.message);

        }
    });
},[]);

    return ( 
        <>
            <section>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-uppercase text-dark mb-lg-4">Pet Shop</h1>
                            <h1 className="text-uppercase text-white mb-lg-4">Make Your Pets Happy</h1>
                            <p className="fs-4 text-white mb-lg-4">
                                Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea
                            </p>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <a href="" className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">Read More</a>
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal"></button>
                                <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Play Video</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="position-relative h-100">
                                <img src={about} className="w-100 h-100"/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="border-5 ps-5 mb-5">
                                <h6 className="text-primary text-uppercase">About us</h6>
                                <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                            </div>
                            <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                            <div className="bg-light p-4">
                                <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">Our Mission</button>
                                    </li>
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">Our Vission</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                        <p className="mb-0">
                                            Tempor erat elitr at rebum at at clita aliquyam consetetur. 
                                            Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. 
                                            Aliquyam diam amet diam et eos sadipscing labore. 
                                            Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. 
                                            Sanctus clita duo justo et tempor consetetur takimata eirmod, 
                                            dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                        <p className="mb-0">
                                        Tempor erat elitr at rebum at at clita aliquyam consetetur. 
                                        Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. 
                                        Aliquyam diam amet diam et eos sadipscing labore. 
                                        Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. 
                                        Sanctus clita duo justo et tempor consetetur takimata eirmod, 
                                        dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
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
            {/* Service End */}

            {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Free E-Commerce Template</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="/src/assets/images/home/slider_1.0.jpg" className="imgs girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>100% Responsive Design</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="/src/assets/images/home/slider_1.1.jpg" className="imgs girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Free Ecommerce Template</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="/src/assets/images/home/slider_1.2.jpg" className="imgs girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    </div>
                                
                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
            </div> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">				

                        <div className=" padding-right">
                        <div className="features_items">
                            <h2 className="title text-center">New Products</h2>
                            {products.map((product,index) => (
                                            <ProductItem key={index} product={product} />
                                        ))}
                        </div>


                        <div className="recommended_items">
                            <h2 className="title text-center">Promotional Products</h2>

                            <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">
                                    {products.map((product,index) => (
                                            <ProductItem key={index} product={product} />
                                        ))}

                                    </div>
                                    <div className="item">
                                    {products.map((product,index) => (
                                            <ProductItem key={index} product={product} />
                                        ))}
                                    </div>
                                </div>
                                <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
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
export default Home;