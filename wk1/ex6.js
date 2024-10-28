function freq(s) {
  const fDist = {}
  for (let character of s) {
    if (character in fDist) {
      fDist[character]++
    } else {
      fDist[character] = 1
    }
  }
  for (let key in fDist) {
    fDist[key] /= s.length
  }
  return fDist
}

console.log(freq('the quick brown fox jumps over the laze dog'))