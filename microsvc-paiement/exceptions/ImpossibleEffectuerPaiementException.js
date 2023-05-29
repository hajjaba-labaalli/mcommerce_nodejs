class ImpossibleEffectuerPaiementException extends Error {
    constructor(message) {
      super(message);
      this.name = 'ImpossibleEffectuerPaiementException';
    }
  }
  
  module.exports = ImpossibleEffectuerPaiementException;
  
