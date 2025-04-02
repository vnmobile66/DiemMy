import axiosInstance from "./axios";
const apiProduct={
    getAll:()=>{
    return axiosInstance.get("/products?filters[product_status][$eq]=1&populate=*").then((res)=>res.data);
    },
    getNewest: () => {
        return axiosInstance
            .get("/products?sort[0]=createdAt:desc&pagination[limit]=3&populate=*")
            .then((res) => res.data);
    },
    getProductDetailBySlug: (slug) => {
        return axiosInstance
            .get(`/products?filters[slug][$eq]=${slug}&populate=*`)
            .then((res) => res.data);
    },
    getpagination: (currentPage) => {
        return axiosInstance
            .get(`/products?&sort[0]=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=6&populate=*`)
            .then((res) => res.data);
    }
    }
export default apiProduct;