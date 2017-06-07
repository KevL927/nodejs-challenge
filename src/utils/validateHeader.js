
// Unhash Base64 string and checks if the string equals 'this is terrible API key'.
module.exports.validateAuth = function (base64String) {
    if (base64String === undefined) {
        return { error: true, message: 'Please provide authentication key.' };
    }

    var decodedValue = new Buffer(base64String, 'base64').toString('ascii');

    if (decodedValue !== 'this is terrible API key') {
        return { error: true, message: 'Incorrect authentication key.' };
    }
    return { message: 'Authentication successful.' };
}

// Checks if the Content-Type equals 'application/json'.
module.exports.validateContentType = function (contentType) {
    if (contentType !== 'application/json') {
        return { error: true, message: 'Content-Type must be in JSON format.' };
    }

    return { message: 'Content-Type is in JSON.' };
}