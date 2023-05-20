import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div align="center" className="product-card">
      <img src={product.image} alt={product.titre} />
      <h3><Link className='title' to={`/products/${product._id}`}>{product.titre}</Link></h3>
    </div>
  );
}

export default ProductCard;