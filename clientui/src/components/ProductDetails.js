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


  const sendOrder =  async () => {
    try{
      // Envoyer les détails de la commande au service de commande
      const response = await axios.post('http://localhost:3001/api/commandes', {
        productId: id
        //price: product.price
      });
      console.log('Commande envoyée avec succès:', response.data)
    }catch (error) {
      console.error('Erreur lors de l\'envoi de la commande:', error) 
  };
  };
  
  return (
    <div align="center" className='productDetails'>
        <img src={product.image} alt={product.titre} />
        <h3>{product.titre}</h3>
        <p>{product.description}</p>
        <h3><Link className='button_commander' to={`/paiemant/${product._id}/${product.price}`} onClick={sendOrder}>Commander</Link></h3>
    </div>
  );
}
export default ProductDetails;
