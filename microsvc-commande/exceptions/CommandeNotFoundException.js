class CommandeNotFoundException extends Error {
    constructor(message) {
      super(message);
      this.name = "CommandeNotFoundException";
    }
  }
  
  module.exports = CommandeNotFoundException;
  