import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products, removeProduct, onUpdate }) => {
  // console.log(data);
  function onHandleRemove(id) {
    const confirm = window.confirm('Are you sure you want to remove this product');
    if (!confirm) return;
    console.log(id);
    removeProduct(id);
    alert('delete product completed');
  }
  // function onHandleUpdate(id) {
  //   console.log(id);
  // }
  return (
    <div>
      {' '}
      <Link to={`/admin/product/add`}>
        <button>Add New Product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>Delete</button>
                  <Link to={`/admin/product/update/${product.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
