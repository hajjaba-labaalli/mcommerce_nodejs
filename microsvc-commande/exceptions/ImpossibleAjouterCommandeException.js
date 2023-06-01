class ImpossibleAjouterCommandeException extends Error {
  constructor(message) {
    super(message);
    this.name = "ImpossibleAjouterCommandeException";
    this.statusCode = 500;
  }
}
  
module.exports = ImpossibleAjouterCommandeException;
  
    
      
      
      
  
  
  
    