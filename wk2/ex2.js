let squareSides = [1, 2, 5, 2, 8]

const getTotalArea = (squares) => {
  return squares.map(e => e * e).reduce((a, e) => a + e, 0)
}

console.log(getTotalArea(squareSides))