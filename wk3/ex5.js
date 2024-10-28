const orderCoffee = (type) => {
    const types = {
        SPECIAL: 'SPECIAL',
        REGULAR: 'REGULAR'
    }

    if (Object.values(types).indexOf(type) === -1) {
        throw new Error('coffee error')
    } else {
        console.warn(`preparing ${type} coffee`)
    }
}

try {
    orderCoffee('SPECIAL')
    orderCoffee('EXTRA_SPECIAL')
} catch (error) {
    console.warn(error)
}