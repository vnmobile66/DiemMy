import { useEffect, useState } from "react";
import "../../../api/config";
import {imageURL} from "../../../api/config";
import apiProduct from "../../../api/apiProduct";
function ProductList(){
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
<div>
<div className="product-container">
    <div className="actions">
        <button type="button">Thêm</button>
        <button type="button"><a href="{{ route('admin.productTrash') }}">Trash </a></button>
    </div>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            <tr>
                <td>{product.description}</td>
                <td><img className="img" src={imageURL + product.image} alt={product.image}/></td>
                <td>{product.product_name}</td>
                <td>{product.slug}</td>
                <td>{product.price.toLocaleString()}</td>
                <td>
                    <button><a className="nav-link" href="{{ route('admin.productCreate') }}">Sửa</a></button>
                    <button className="delete-button">Xóa</button>
                </td>
            </tr>
))}
        </tbody>
    </table>

</div>
    </div> )
}
export default ProductList;