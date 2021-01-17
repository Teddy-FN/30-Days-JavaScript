// Object
/*
    Scope
    1. Windows
    2. Global
    3. Local
*/


// Window Scope
a = 'JavaScript'
b = 10
function letLearnScope() {
    console.log('Func', a, b)
    if (true) {
        console.log('Function IF', a, b)
    }
}
console.log('With Out Function', a, b)

// Global Scope
let c = 'JavaScript'
let d = 10
function letLearnScope() {
    console.log(c, d)
    if (true) {
        let c = 'python'
        let d = 100
        console.log('On IF', c, d)
    }
    console.log('On Function', c, d)
}
letLearnScope()
console.log('Outside Func', c, d)


// Local Scope 
let e = 'JavaScript'
let f = 10
function letsLearnScope() {
    console.log('Inside Function', e, f)
    let g = 30
    if (true) {
        let e = 'Python'
        let f = 20
        let g = 50
        console.log('Inside IF', e, f, g)
    }
    console.log('Ater IF', e, f)
}
letsLearnScope()
console.log('OutSide', e, f)


// Example Object
function learnScopeJs() {
    const gravity = 9.81
    console.log('ON FUNC', gravity)
}
if (true) {
    const gravity = 9.81
    console.log('ON IF', gravity)
}
// console.log('Outside IF', gravity)
for (let i = 0; i < 3; i++) {
    console.log(i)
}
// console.log('FOR', i)

// Object
/*
const person = {}
*/


// Create Object 
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)

// const person = {
//     fisrtName: 'Teddy',
//     lastName: 'Ferdian',
//     age: 22,
//     country: 'Indonesia',
//     city: 'Surakarta',
//     skils: [
//         'HTML',
//         'JavaScript',
//         'React',
//         'Node',
//     ],
//     isMarried: false,
//     getFullName: function () {
//         return `${this.fisrtName} ${this.lastName}`
//     },
//     'phone-number': '085926051064'
// }
// console.log(person)
// // Getting Value From Object
// console.log(person.fisrtName) // access value by using .
// console.log(person.lastName) // access value by using .
// console.log(person.age) // access value by using .
// console.log(person.country) // access value by using .

// console.log(person['fisrtName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['country'])



// Setting Object 
const person = {
    fisrtName: 'Tom',
    lastName: 'Delonge',
    age: 22,
    country: 'Indonesia',
    city: 'Surakarta',
    skils: [
        'HTML',
        'JavaScript',
        'React',
        'Node',
    ],
    isMarried: true,
    getFullName: function () {
        return `${this.fisrtName} ${this.lastName}`
    },
    'phone-number': '085926051064'
}
console.log(person.getFullName())

person.fisrtName = 'Teddy'
person.lastName = 'Ferdian'
person.skils.push('CSS')
person.skils.push('SASS')
person.isMarried = false

person.getInfoUser = function () {
    let skilsWithOutLastSkils = this.skils
        .splice(0, this.skils.length - 1)
        .join(', ')
    let lastSkils = this.skils.splice(this.skils.length - 1)[0]

    let skills = `${skilsWithOutLastSkils} and ${lastSkils}`
    let fullName = this.getFullName()
    let stateMent = `Hi my name is ${fullName} \nAnd i from in ${this.country}, ${this.city}. \nAnd In Can use Technology Like ${skills}`
    return stateMent
}
console.log(person)
console.log(person.getInfoUser())


// Object Methods  
const person1 = {
    firstName: 'Tom',
    lastName: 'Delonge',
    age: 40,
    county: 'United States',
    skils: ['HTM', 'CSS', 'JavasCript', 'React'],
    address: {
        street: 'Henaiken',
        pobox: 2000,
        city: 'San diego'
    }, getPersonInfo: function () {
        return `Hello my Name is ${firstName} and i live in ${address.street} ${address.city}, ${county}, Im ${age}`
    }
}

const personInfo = Object.assign({}, person1)
console.log('Person Info', personInfo)
const keys = Object.keys(personInfo)
console.log('keys', keys)
const address = Object.keys(personInfo.address)
console.log('Address', address)


// Getting Object using Object.values()
const values = Object.values(personInfo)
console.log('Values', values)

// Getting object using Object.entries()
const entries = Object.entries(personInfo)
console.log('Entries', entries)

// Cheking object using hasOwnProperty() -> To check if a specific key or property exist in an object
console.log(personInfo.hasOwnProperty('name'))
console.log(personInfo.hasOwnProperty('firstName'))