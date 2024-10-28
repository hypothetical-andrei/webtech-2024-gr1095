function map(arr, f) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]))
  }
  return result
}

let source = [1,2,3]

let dest = map(source, x => x * 2)
console.log(dest)