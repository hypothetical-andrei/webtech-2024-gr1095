function countOccurences(s, c) {
  let count = 0
  for (let character of s) {
    if (character === c) {
      count++
    } 
  }
  return count
}

console.log(countOccurences('ana are mere', 'a'))