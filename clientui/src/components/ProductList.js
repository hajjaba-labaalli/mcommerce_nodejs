import React, { useEffect, useState }  from "react";
import ProductCard from './ProductCard';
import axios from "axios";

function ProductList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fonction d'effet pour récupérer les produits
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/products');
          const fetchedProducts = response.data;
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Erreur lors de la récupération des produits:', error);
        }
      };
  
      // Appeler la fonction d'effet pour récupérer les produits
      fetchProducts();
    }, []); // Le tableau de dépendances vide assure que l'effet ne se réexécute qu'une fois au montage du composant
  
    return (
        <div align="center" className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
  );
}
export default ProductList;