String.prototype.capitalizeWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}

console.log('this will be capitalized'.capitalizeWords())