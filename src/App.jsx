import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AddProduct, Dashbroad, DetailPage, HomePage, Products, UpdateProduct } from './pages';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  function removeProduct(id) {
    fetch(`http://localhost:3000/products/${id}`, { method: 'delete' }).then(() =>
      setProducts(products.filter((product) => product.id !== id))
    );
  }
  function addProduct(product) {
    fetch('http://localhost:3000/products', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
  }
  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/detail/:id" element={<DetailPage products={products} />} />
        <Route path="/admin" element={<Dashbroad />} />
        <Route
          path="/admin/product"
          element={<Products products={products} removeProduct={removeProduct} />}
        />
        <Route path="/admin/product/add" element={<AddProduct addProduct={addProduct} />} />
        <Route
          path="/admin/product/update/:id"
          element={<UpdateProduct products={products} onUpdate={onUpdate} />}
        />
      </Routes>
    </>
  );
}

export default App;
