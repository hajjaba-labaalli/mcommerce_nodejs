import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


function Paiement() {



  return (
    <div align="center" className='paiement'>
        <p>Ici l'utilisateur sélectionne en temps normal un moyen de paiement et entre les informations de sa carte bancaire.</p>
        <p>Nous allons éviter d'ajouter les formulaires nécessaires afin de garder l'application la plus simple possible pour la suite.</p>
        <p>Si vous vous sentez à l'aise vous pouvez créer un formulaire pour accepter le numéro de la carte bancaire que vous traiterez dans la le contrôleur grâce à lun PosMapping.</p>
        <h3><Link className='button_payer' to={`/confirmation`}>Payer ma commande</Link></h3>
    </div>
  );
}

export default Paiement;
