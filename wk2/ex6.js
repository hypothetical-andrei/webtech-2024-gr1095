const getFilterdObjects = (arr, obj) => {
  return arr.filter(element => {
    for (const key in obj) {
      if (!element[key] || element[key] !== obj[key]) {
        return false
      }
    }
    return true
  })
}

const laptops = [{
  brand: 'MSI',
  ram: 16,
  cpu: 'i5'
}, {
  brand: 'Acer',
  ram: 8,
  cpu: 'i7'
}, {
  brand: 'Asus',
  ram: 16,
  cpu: 'Ryzen'
}, {
  brand: 'Asus',
  ram: 16,
  cpu: 'i9'
}]

const results = getFilterdObjects(laptops, { brand: 'Asus', ram: 16 })

console.log(results)