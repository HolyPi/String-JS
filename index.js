
// ---- Challenge 1 ----
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize("hello"))


// ---- Challenge 2 ----

function allCaps(str) {
    return str.toUpperCase();
}

console.log(allCaps("i am small"))


// ---- Challenge 3 ----


function capitalizeWords(str) {
    const cwords = str.split(' ').map(function(str) {
        return capitalize(str);
    })
    return cwords.join(' ')
}

console.log(capitalizeWords("hello hello"))

// ---- Challenge 4 ----

function removeExtraSpaces(str) {
    str.trim() 
    const nospace = str.split(' ').filter(item => item);
    return nospace.join(' ')
}

console.log(removeExtraSpaces("   henlo    henlo   "))


// ---- Challenge 5 ---- 

function kebobCase(str) {
    return str.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-'); 
}

console.log(kebobCase("oh no"))

// ---- Challenge 6 ---- 

function snakeCase(str) {
    return str.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
}

console.log(snakeCase("oh what"))

// ---- Challenge 7 ---- 

function camelCase(str) {
    return str.replace(/\W+(.)/g, function(str)
    {
      return str.toUpperCase();
    });
}

console.log(camelCase("hello camel case"))

function shift(str) {

}

function makeHashTag(str) {

}

function isEmpty(str) {

}