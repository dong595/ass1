import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [data, setData] = useState({});
  function onSubmit(e) {
    e.preventDefault();
    addProduct(data);
    setTimeout(() => {
      alert(`Add Product completed successfully`);
      window.location.href = '/admin/product';
    }, 3000);
  }
  function onHandleChange(event) {
    setData({ name: event.target.value });
  }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Product Name" onChange={onHandleChange} />
        <button>Add new</button>
      </form>
    </div>
  );
};

export default AddProduct;
