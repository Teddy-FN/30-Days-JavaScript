// Level 1
// Number 1 
const dog = {
    name: 'Helli',
    legs: 4,
    color: 'Brown',
    age: 20,
    bark: function () {
        return 'Woof Woof'
    },
    getDogInfo: function () {
        return `I have a dog the name is ${this.name}, my dog color is ${this.color}, and the age is ${this.age}`
    }

}
console.log(dog)
console.log(dog.getDogInfo())



