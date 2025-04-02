import { useEffect, useState } from "react";
import "../../../api/apiCategory";
import apiCategory from "../../../api/apiCategory";

function CategoryList(){
    const [category, setNewcategory] = useState([]);
    useEffect(()=>{
    apiCategory.getNewest().then((res)=>{
        try{
            const categoryData=res.data.map((category)=>{
                console.log(res)
                return{
                    id:category.id,
                    category_name: category.category_name,
                    slug: category.slug,
                }
            });

            setNewcategory(categoryData);
        }catch(err){
            console.log("Error:",err.message);

        }
    });
},[]);

    return ( <>
    <div className="category-list">
  <div className="header">
    <h2>Danh sách danh mục</h2>
    <button className="add-btn"><a href="{{ route('admin.categoryCreate') }}">Thêm</a></button>
    <button className="trash-btn"><a href="{{ route('admin.categoryTrash') }}">Trash</a></button>
  </div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên danh mục</th>
        <th>Slug</th>
        <th>Chức năng</th>
      </tr>
    </thead>
    <tbody>
    {category.map((category) =>(
        <tr>
        <td>{category.id}</td>
        <td>{category.category_name}</td>
        <td>{category.slug}</td>

        <td>
        <button><a className="nav-link" href="{{ route('admin.categoryCreate') }}">Sửa</a></button>
                        <button className="delete-button">Xóa</button>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
  <div className="pagination">
    <button className="page-btn">1</button>
    <button className="page-btn">2</button> 
  </div>
</div>
</> )
}
export default CategoryList;