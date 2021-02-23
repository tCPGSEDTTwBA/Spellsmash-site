function obfuscate(email) {
    if(typeof(email) !== 'string') {
        throw new TypeError("Email Object is not a string");
    }

    var unicodeChars = ''
    for(var i = 0; i < email.length; i++) {
        unicodeChars += email.charCodeAt(i)
    }
    
    return unicodeChars
}

module.exports = {obfuscate}