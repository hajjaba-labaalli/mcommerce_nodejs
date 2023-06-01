const axios = require('axios');

const MicroserviceCommandeProxy = {
  recupererUneCommande: async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/commandes/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  updateCommande: async (commande) => {
    try {
      await axios.put('http://localhost:3001/commandes', commande);
    } catch (error) {
      throw new Error("Erreur lors de la mise à jour de la commande");
    }
  }
};

module.exports = MicroserviceCommandeProxy;
