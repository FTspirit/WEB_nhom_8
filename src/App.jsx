import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomeView } from './Views/HomeView';
import { LoginForm } from './Views/Login';
import { ProfileView } from './Views/ProfileView';
import { MyCart } from './Views/MyCart';
import { ListProduct } from './Views/ListProduct';
import { MyOrder } from './Views/Sigle';
import { ProductDetail } from './Views/ProductDetail';
const App = () => {
  // const [result ,setResult] =useState(0);
  return (
    // <div style={{backgroundColor:'red'}}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeView />} /> */}
        <Route path='/Login' element={<LoginForm />} />
        <Route path="/profile" element={<ProfileView />} />
        {/* <Route path="/list-product" element={<ProfileView />} /> */}
        <Route path="/" element={<ListProduct />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/MyOrder" element={<MyOrder />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>

    // </div>
  )
}

export default App;
