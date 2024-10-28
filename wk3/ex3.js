function fibGen () {
	const cache = [1, 1]
	const fib = (index) => {
		if (index >= cache.length) {
				cache[index] = fib(index - 1) + fib(index - 2)
		} else {
			console.log(`found index ${index} in cache`)
		}
		return cache[index]
	}
	return fib
}

const fib = fibGen()
fib(3)
fib(5)
fib(4)