async function getObjectFromUrl (url) {
   const response = await fetch(url)
   const data = await response.json()
   return data
}

const sampleUrl = 'https://jsonplaceholder.typicode.com/todos/1'

const result = await getObjectFromUrl(sampleUrl)
console.log(result)