const arr = [{
  name: 'a',
  age: 22
}, {
  name: 'b',
  age: 17
}, {
  name: 'c',
  age: 18
}]

const result = arr.filter(e => e.age >= 18)
console.log(result)