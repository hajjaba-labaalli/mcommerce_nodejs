class PaiementImpossibleException extends Error {
  constructor(message) {
    super(message);
    this.name = 'PaiementImpossibleException';
    this.statusCode = 500; // Internal Server Error
  }
}

module.exports = PaiementImpossibleException;

  