 import { Link } from "react-router-dom";
import {imageURL} from "../../api/config";
function ProductItem(props){
    return (
        <div className="col-sm-4">
        <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                    <img className="img" src={imageURL + props.product.image} alt={props.product.image} />
                    <h2>{props.product.price.toLocaleString()}VNĐ</h2>
                    <p>{props.product.product_name}</p>
                    <Link to={`/product-detail/${props.product.slug}`} >
                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                    </Link>
                    <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default ProductItem;