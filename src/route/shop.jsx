import About from "../pages/shop/About";
import Cart from "../pages/shop/Cart";
import Checkout from "../pages/shop/Checkout";
import Contact from "../pages/shop/Contact";
import Home from "../pages/shop/Home";
import LoginUser from "../pages/shop/LoginUser";
import LogoutUser from "../pages/shop/LogoutUser";
import Product from "../pages/shop/Product";
import ProductDetail from "../pages/shop/ProductDetail";
import ProductItem from "../pages/shop/ProductItem";
import ProductByCat from "../pages/shop/ProductsByCat";
import Register from "../pages/shop/Register";
import Service from "../pages/shop/Service";


const ShopRoute =[
{'path':'/','component': Home},
{'path':'about','component': About},
{'path':'contact','component': Contact},
{'path':'products','component': Product},
{'path':'product-detail/:slug','component': ProductDetail},
{'path':'product-item/:slug','component': ProductItem},
{'path':'products-by-cart/:slug','component': ProductByCat},
{'path':'register','component': Register},
{'path':'login','component': LoginUser},
{'path':'logout','component': LogoutUser},
{'path':'cart','component': Cart},
{'path':'checkout','component': Checkout},
{'path':'service','component': Service}
];
export default ShopRoute;