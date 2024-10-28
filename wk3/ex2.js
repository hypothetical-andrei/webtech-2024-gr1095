class Robot {
    constructor (name) {
        this.name = name
    }
    move () {
        console.log(`${this.name} is moving`)
    }
}

const r0 = new Robot('type0')
r0.move()

class Weapon {
    constructor (description) {
        this.description = description
    }
    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon('pew pew laser')
w0.fire()

class CombatRobot extends Robot {
    constructor (name) {
        super(name)
        this.weapons = []
    }
    addWeapon (w) {
        this.weapons.push(w)
    }
    fire () {
        for (const weapon of this.weapons) {
            weapon.fire()
        }
    }
}

const r1 = new CombatRobot('type1')
r1.addWeapon(w0)
r1.fire()

Robot.prototype.fly = function (distance) {
    console.log(`${this.name} flies ${distance} kilometers`)
}

r1.fly(1000)
r0.fly(300)