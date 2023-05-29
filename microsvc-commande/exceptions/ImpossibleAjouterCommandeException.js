class ImpossibleAjouterCommandeException extends Error {
    constructor(message) {
      super(message);
      this.name = "ImpossibleAjouterCommandeException";
    }
  }
  
  module.exports = ImpossibleAjouterCommandeException;
  