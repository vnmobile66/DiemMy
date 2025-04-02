import { useEffect, useState, React } from "react";
import apiProduct from "../../api/apiProduct";
import "../../api/config";
import ProductItem from "./ProductItem";
import About from "./About";
import Service from "./Service";

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
            <About/>
            <Service/>
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
                    <div class="row">				

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