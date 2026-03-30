import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Custom from './pages/Custom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:categoryId" element={<Category />} />
          <Route path="catalog/:categoryId/:productId" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="custom" element={<Custom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
