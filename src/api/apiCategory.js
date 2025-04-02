import axiosInstance from "./axios";
const apiCategory={
    getAll:()=>{
    return axiosInstance.get("/categories?filters[cat_status][$eq]=1&populate=*").then((res)=>res.data);
    },
    getNewest: () => {
        return axiosInstance
            .get("/categories?sort[0]=createdAt:desc&pagination[limit]=5&populate=*")
            .then((res) => res.data);
    }
    }
export default apiCategory;