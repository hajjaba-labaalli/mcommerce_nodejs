import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
      }
    };

    fetchProduct();
  }, [id]);
  
  return (
    <div align="center" className='productDetails'>
        <img src={product.image} alt={product.titre} />
        <h3>{product.titre}</h3>
        <p>{product.description}</p>
        <h3><Link className='button_commander' to={`/paiemant`}>Commander</Link></h3>
    </div>
  );
}

export default ProductDetails;
