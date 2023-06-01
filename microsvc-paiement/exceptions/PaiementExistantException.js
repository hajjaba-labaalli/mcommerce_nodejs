class PaiementExistantException extends Error {
  constructor(message) {
    super(message);
    this.name = 'PaiementExistantException';
    this.statusCode = 409; // Conflict
  }
}
  
module.exports = PaiementExistantException;
  