let sayHello = (name) => `Hello ${name}`

if (process.argv.length > 2) {
  console.log(sayHello(process.argv[2]))
} else {
  console.log('Please supply the name')
}
