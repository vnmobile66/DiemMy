import { useEffect, useState } from "react";
import apiProduct from "../../api/apiProduct";
import { useParams } from "react-router-dom";

import "../../api/config";
import {imageURL} from "../../api/config";
const ProductDetail=()=>{
	const { slug } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    apiProduct.getProductDetailBySlug(slug).then((res)=>{
        console.log(res);
        try{
            const productData=res.data.map((product)=>{
                return{
                    id:product.id,
                    product_name: product.product_name,
                    slug: product.slug,
                    price: product.price,
                    image: product.image?.url || null,
					description: product.description,
					brand: product.brand
                }
            });

            setProducts(productData);
            console.log(setProducts);
        }catch(err){
            console.log("Error:",err.message);

        }
    });
},[slug]);


    return ( 
        <>
        <div className="container">
        <div className="col-sm ">
        	<div className="col-sm-9 padding-right">
			{products.map((product) => (

						<div className="product-details">
						<div className="col-sm-5">
							<div className="view-product">
							<img className="img" src={imageURL + product.image} alt={product.image} />
							<h3>ZOOM</h3>
							</div>
						</div>
						<div className="col-sm-7">
							<div className="product-information">
								<img src="/src/assets/images/product-details/new.jpg" className="newarrival" alt="" />
								<h2>{product.description}</h2>
								<img src="/src/assets/images/home/7" alt="" />
								<span>
									<span>{product.price.toLocaleString()} VNĐ</span>
									<label>Quantity:</label>
									<input type="text" value="3" />
									<button type="button" className="btn btn-fefault cart">
										<i className="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:{product.brand}</b></p>
								<a href=""><img src="/src/assets/images/product-details/share.png" className="share img-responsive"  alt="" /></a>
							</div>
						</div>
						</div>
))}
			</div>
		</div>
</div>
</>
     )
}
export default ProductDetail;