class OddStream {
    #value
    #nextValue

    constructor (seed) {
        this.#value = seed
    }

    get next () {
        this.#value += 2
        return this.#value
    }
}

const s = new OddStream(4)

for (let i = 0; i < 10; i++) {
    console.log(`Value from integer stream for ${i} is ${s.next}`)
}