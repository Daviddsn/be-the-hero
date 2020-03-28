const crypto = require('crypto');

module.exports = function generatorID(){
    return crypto.randomBytes(4).toString('HEX');
}