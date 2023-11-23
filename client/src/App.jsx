// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';
import ProductsMenu from './pages/product/ProductsMenu';
import ProductDetail from './pages/product/ProductDetail';
import AddProduct from './pages/product/AddProduct';
import EditProduct from './pages/product/EditProduct';
import NotFound from './pages/NotFound';

// Import components
import Layout from './components/layout/Layout';
import PrivateRoutes from './components/layout/PrivateRoutes';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>z
        <Route index element={<Home />} />
        {/* AUTH */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* PRODUCTS */}
        <Route path="store">
          <Route path='products' element={<ProductsMenu />} />
          <Route path='product'>
            {/* NEW: DETAILS PAGE */}
            <Route path=":id" element={<ProductDetail />}/>
            {/* PRIVATE WRITE PRODUCT ROUTES */}
            <Route element={<PrivateRoutes />}>
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Route>
        </Route>
        
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;