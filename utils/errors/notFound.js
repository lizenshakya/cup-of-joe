const CustomError = require('./customError');

class NotFoundError extends CustomError {
    constructor(message) {
        super(message || 'Not Found');
        this.statusCode = 404;
    }
}

module.exports = NotFoundError;