const formatString = (str, ...format) => {
  let modified = str
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf('{' + i + '}') !== -1) {
      modified = modified.replace('{' + i + '}', format[i])
    }
  }
  return modified
}

console.log(formatString('this is not a {0} it is a {1}', 'cat', 'dog'))

// console.log(formatString('i am {name} and i {action}', { name: 'Jim', action: 'run' }))