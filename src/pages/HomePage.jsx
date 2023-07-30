import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ products }) => {
  console.log('home data', products);
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index + 1}>
            <h3>
              <Link to={`/detail/${product.id}`}>{product.name}</Link>
            </h3>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
