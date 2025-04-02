import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopRoute from './route/shop.js'
// import AdminRoute from './route/admin.js'
import Layout from './components/shop/ShopLayout.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<Layout/>}>
        {
          ShopRoute.map((router, index) => {
            const Page = router.component;
            return <Route key={index} path={router.path} element={< Page />} />
          })
        }
        </Route>
        {/* < Route path="/admin/" element={<LayoutAdmin/>}>
        {
          AdminRoute.map((router, index) => {
            const Page = router.component;
            return <Route key={index} path={router.path} element={< Page />} />
          })
        }
        </Route> */}
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)