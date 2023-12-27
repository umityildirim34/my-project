class NegativeCountException extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeCountException";
    }
}