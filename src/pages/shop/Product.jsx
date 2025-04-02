import { useEffect, useState } from "react";
import apiProduct from "../../api/apiProduct";
import "../../api/config";
import ProductItem from "./ProductItem";
const Product=()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [paginationMeta, setPaginationMeta] = useState({});
    useEffect(()=>{
    apiProduct.getpagination(currentPage).then((res)=>{
        try{
            const productData = res?.data?.map((product) => ({
                id: product.id,
                product_name: product.product_name,
                slug: product.slug,
                price: product.price,
                image: product.image?.url || null // Xử lý image nếu undefined
            }));
        
            setProducts(productData);
        }catch(err){
            console.log("Error:",err.message);

        }
        try{
            const productMeta = {
                pageSize: res.meta.pagination.pageSize,
                totalPages: res.meta.pagination.pageCount,
                pageCount: res.meta.pagination.pageCount
            };
            setPaginationMeta(productMeta);
        }catch(err){
            console.log("Error:",err.message);

        }

    });
},[currentPage]);
const handlePageChange = (page) => {
    setCurrentPage(page);
};
return ( 
        <div>
                <section>
                <div className="container">
                    <div className="col-sm ">
                        <div className="features_items">
                            <h2 className="title text-center">Features Items</h2>
                            {products.map((product,index) => (
                                <ProductItem key={index} product={product} />
                            ))}
            
            
                        </div>
                    </div>
                </div>
                <div className="name">
                            <ul className="pagination">
                                {Array.from({ length: paginationMeta.totalPages || 0 }, (_, index) => index + 1).map((page) => (
                                    <li key={page} className={page === currentPage ? 'active' : ''}>
                                        <button onClick={() => handlePageChange(page)}>
                                            {page}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            </div>
            </section>
        
    </div>
 )

}
export default Product;

