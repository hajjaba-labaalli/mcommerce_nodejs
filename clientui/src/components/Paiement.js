import React from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


function Paiement() {
  const { idCommande, price} = useParams();
  //const [paiementOk, setPaiementOk] = useState(false);
  const navigate = useNavigate();

  const payerCommande =  async () => {
    try{
    
      // Envoyer les détails de la commande au service de commande
      const response = await axios.post('http://localhost:3002/api/paiements', {
        idCommande: idCommande ,
        montant: price
      });
      console.log(response.data);
      if(response.data.paiementOk){
        navigate(`/confirmation/${response.data.paiementOk}`);
      }else{
        navigate(`/confirmation/false`);
      }
    
      // Effectuer la redirection vers la deuxième interface avec l'ID de commande et le prix de produit
   
    }catch (error) {
      console.error('Erreur lors de l\'envoi de la commande:', error);
  };
  };


  return (
    <div align="center" className='paiement'>
        <p>Ici l'utilisateur sélectionne en temps normal un moyen de paiement et entre les informations de sa carte bancaire.</p>
        <p>Nous allons éviter d'ajouter les formulaires nécessaires afin de garder l'application la plus simple possible pour la suite.</p>
        <p>Si vous vous sentez à l'aise vous pouvez créer un formulaire pour accepter le numéro de la carte bancaire que vous traiterez dans la le contrôleur grâce à lun PosMapping.</p>
        <h3><Link className='button_payer' onClick={payerCommande}>Payer ma commande</Link></h3>
    </div>
  );
}

export default Paiement;
