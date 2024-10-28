function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false
  } else {
    return true
  }
}

console.log(checkDivisible(8, 2))
console.log(checkDivisible(9, 2))