class PaiementNotFoundException extends Error {
    constructor(message) {
      super(message);
      this.name = 'PaiementNotFoundException';
    }
  }
  
  module.exports = PaiementNotFoundException;
  