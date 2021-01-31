// Number 1 
class Animal {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
        this.leg = 0
    }
    get getLegs() {
        return this.leg
    }
    set setLegs(leg) {
        this.leg += leg
    }
}
const dog = new Animal('Dog', 8, 'Black')
const cat = new Animal('cat', 9, 'Grey')
dog.setLegs = 4
cat.setLegs = 4
console.log('INI ANJING', dog)
console.log('INI KUCING', cat)