class CommandeNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = 'CommandeNotFoundException';
    this.statusCode = 404;
  }
}
    
module.exports = CommandeNotFoundException;
  
  