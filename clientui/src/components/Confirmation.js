import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Confirmation() {
    const { paiementOk } = useParams();

    const isPaiementOk = paiementOk === 'true';

    return (
        <div align="center" className='Confirmation'>
            <div className="row">
                <div className="col-md-4 mx-auto mt-5 text-center">
                    {isPaiementOk ? (
                        <p>Paiement Accepté</p>
                    ) : (
                        <p>Le paiement n'a pas abouti</p>
                    )}
                </div>
            </div>
            <h3><Link className='button_payer' to={`/`}>Revenir à l'accueil</Link></h3>
        </div>
    );
}

export default Confirmation;
