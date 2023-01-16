import React from 'react';
import Layout from './layout/layout';
import AboutUs from './pages/AboutUs';
import CEO from './pages/CEO';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import Howtogo from './pages/Howtogo';
import Material from './pages/Material';
import Product from './pages/Product';
import Technology from './pages/Technology';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Layout />} />
        <Route path = "AboutUs" element={<AboutUs />} />
        <Route path = "CEO" element={<CEO />} />
        <Route path = "Contact" element={<Contact />} />
        <Route path = "Customer" element={<Customer />} />
        <Route path = "Howtogo" element={<Howtogo />} />
        <Route path = "Material" element={<Material />} />
        <Route path = "Product" element={<Product />} />
        <Route path = "Technology" element={<Technology />} />

      </Routes>

    </div>
  );
}

export default App;
