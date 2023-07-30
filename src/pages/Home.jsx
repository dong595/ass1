import React from 'react';
import { useState } from 'react';

const HomePage = ({ data }) => {
  const [products, setProducts] = useState(data);
  const addProduct = (product) => {
    // product : {id,name,price}
    setProducts([...products, product]);
  };
  const deleteProduct = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    alert('Delete product successfully');
  };
  const updateProduct = (id) => {
    const newProducts = products.map((product) => {
      return product.id == id ? { ...product, name: 'product update', price: 200 } : product;
    });
    setProducts(newProducts);
  };
  return (
    <div>
      <button onClick={() => addProduct({ id: 4, name: 'Product 4', price: 400 })}>Add New</button>
      {products.map((product, index) => {
        return (
          <div key={index + 1}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button onClick={() => updateProduct(product.id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
