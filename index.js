

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

String.prototype.capitalize = function () {
    return capitalize(this);
}
console.log(capitalize("hello"))

function allCaps(str) {
    return str.toUpperCase();
}

String.prototype.allCaps = function () {
    return allCaps(this);
}

console.log(allCaps("i am small"))




function capitalizeWords(str) {
    const cwords = str.split(' ').map(function(str) {
        return capitalize(str);
    })
    return cwords.join(' ')
}

String.prototype.capitalizeWords = function () {
    return capitalizeWords(this);
}

console.log(capitalizeWords("hello hello"))

function removeExtraSpaces(str) {
    str.trim() 
    const nospace = str.split(' ').filter(item => item);
    return nospace.join(' ')
}

console.log(removeExtraSpaces("   henlo    henlo   "))
String.prototype.removeExtraSpaces = function () {
    return removeExtraSpaces(this);
}


function kebobCase(str) {
    return str.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-'); 
}

String.prototype.kebobCase = function () {
    return kebobCase(this);
}

console.log(kebobCase("oh no"))


function snakeCase(str) {
    return str.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
}

String.prototype.snakeCase = function () {
    return snakeCase(this);
}

console.log(snakeCase("oh what"))


function camelCase(str) {
    return str.replace(/\W+(.)/g, function(str)
    {
      return str.toUpperCase();
    });
}

String.prototype.camelCase = function () {
    return camelCase(this);
}

console.log(camelCase("hello camel case"))


function shift(str) {
    const fletter = str[0]
    return str.slice(1) + fletter;
}

String.prototype.shift = function () {
    return shift(this);
}

console.log(shift("hello"))


module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
