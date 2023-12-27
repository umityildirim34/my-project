class NullValueException extends Error {
    constructor(message) {
      super(message);
      this.name = "NullValueException";
    }
}