class Stream {
    #value
    #nextValue
    static #count = 0

    constructor (seed, nextValue) {
        this.#value = seed
        this.#nextValue = nextValue
        Stream.#count++
    }

    get value () {
        return this.#value
    }

    get next () {
        this.#value = this.#nextValue(this.#value)
        return this.#value
    }
}

class ConstantStream extends Stream {
    constructor (value) {
        super(value, v => v)
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        super(0, v => v + 1)
    }
}

const constant = new ConstantStream(1)
const sequence = new NextIntegerStream()
for (let i = 0; i < 10; i++) {
    console.log(`Value from constant stream for ${i} is ${constant.next}`)
    console.log(`Value from integer stream for ${i} is ${sequencesadsdsdasasa.next}`)
}