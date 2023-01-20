import React from 'react';
import Layout from './layout/layout';
import AboutUs from './pages/AboutUs';
import CEO from './pages/CEO';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import Howtogo from './pages/Howtogo';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Company_History from './pages/Company_History';
import {Route, Routes} from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element={<Layout />} />
        <Route path = "AboutUs" element={<AboutUs />} />
        <Route path = "CEO" element={<CEO />} />
        <Route path = "Contact" element={<Contact />} />
        <Route path = "Customer" element={<Customer />} />
        <Route path = "Howtogo" element={<Howtogo />} />
        <Route path = "Product" element={<Product />} />
        <Route path = "Technology" element={<Technology />} />
        <Route path = "Company_History" element={<Company_History />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
