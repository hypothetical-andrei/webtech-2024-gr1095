const words = [
  'red',
  'green',
  'black',
  'orange'
]

const forbiddenWord = 'orange'
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
  return words.filter((element) => {
    if (element === forbiddenWord || element.length < minLength) {
      return false
    }
    return true
  })
}

console.log(filterWords(words, forbiddenWord, minLength))