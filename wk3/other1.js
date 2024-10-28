function* g (maxValue) {
    for (let i = 0; i <= maxValue; i++) {
        yield i
    }
}

for (const val of g(12)) {
    console.warn(val)
}