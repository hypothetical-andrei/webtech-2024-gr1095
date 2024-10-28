// function addToArray(arr, ...args) {
//   if (!arr) {
//     return null
//   }
//   for (let arg of args) {
//     arr.push(arg)
//   }
//   return arr
// }

function addToArray(arr, ...args) {
  if (!arr) {
    return null
  }
  return [...arr, ...args]
}

let a = [1]

// addToArray(a, 2, 3, 4)
// console.log(a)
console.log(addToArray(a, 2, 3, 4))
// function f(arr) {
//   let sum = 0
//   for (let element of arr) {
//     sum += element
//   }
//   return sum
// }

// function f1(...args) {
//   let sum = 0
//   for (let element of args) {
//     sum += element
//   }
//   return sum
// }

// console.log(f([1, 2, 3]))
// console.log(f1(1, 2, 3))
// console.log(f1(...[1, 2, 3]))