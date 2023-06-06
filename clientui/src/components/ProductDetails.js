import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(id);
  //const [commande, setCommande] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(` http://localhost:5000/api/products/${id}`);
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const passerCommande =  async () => {
    try{
      // Envoyer les détails de la commande au service de commande
      const response = await axios.post('http://localhost:3001/api/commandes', {
        productId: id,
        quantite: "1"
      });
      console.log('Commande envoyée avec succès:', response.data);
      // Effectuer la redirection vers la deuxième interface avec l'ID de commande et le prix de produit
      navigate(`/payer-commande/${response.data.id}/${product.price}`);
   
    }catch (error) {
      console.error('Erreur lors de l\'envoi de la commande:', error)
  };
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div align="center" className='productDetails'>
        <img src={product.image} alt={product.titre} />
        <h3>{product.titre}</h3>
        <p>{product.description}</p>
        <h3><Link className='button_commander' onClick={passerCommande}>Commander</Link></h3>
    </div>
  );
}
export default ProductDetails;
