// Callback
const callback = n => {
    console.log('callback', n ** 2)
    return n ** 2

}
function cube(callback, n) {
    console.log('cube callback', callback(n) * n)
    return callback(n) * n
}
console.log(cube(callback, 5))


// Const higher Order Function
const higherOrder = n => {
    const doWhat = m => {
        const gonna = o => {
            return 2 * n * 3 * m + o
        }
        return gonna
    }
    return doWhat
}
console.log(higherOrder(2)(3)(10))

// CallBack And ForEach
const number = [1, 2, 3, 4, 5]

const callBackNumber = arr => {
    let sum = 0
    const callback = function (elements) {
        sum += elements
    }
    number.forEach(callback)
    return sum
}

console.log(callBackNumber(number))

// Above Example
const numbers = [1, 2, 3, 4, 5]
const callBackNumbers = arr => {
    let sum = 0
    numbers.forEach(function (elements) {
        sum += elements
    })
    return sum;
}
console.log(callBackNumbers(numbers))


// Setting Time 
/*
interval
timeOut
    styntax
    function callback() {
        // Code Here
    }
    setInterval(callback, duration)
*/
function sayHello() {
    for (let i = 0; i < 2; i++) {
        console.log('Hello')
    }
}
setTimeout(sayHello, 2000)

// Fuctional Programming
/*
arr.forEach(Function(element, index, arr) {
    console.log(index, elements, arr)
})
                OR
arr.forEach(function (elements, index, arr) => {
    console.log(index, elements, arr)
})
                OR
arr.forEach((elements, index, arr) => console.log(index, elements, arr))
*/

let sum = 0
const numbers1 = [1, 2, 3, 4, 5]
numbers1.forEach(num => console.log('ForEach', num))
console.log(sum)

const countries = [
    'Finland',
    'Indonesia',
    'Sweden',
    'Norway'
]
countries.forEach((elements) => console.log(elements.toUpperCase()))

// Map
/*
const modifiedArray = arr.map(function (elements, index, arr) {
    return elements
})
*/

const countriess = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesToUpperCase = countriess.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countriess.map((country) =>
    country.toUpperCase().slice(0, 3)
)


// Filter
const containingLand = countriess.filter((country) => country.includes('land'))
console.log(containingLand)

const countryEndByIa = countriess.filter((country) => country.endsWith())

const countriesHaveFiveLetters = countriess.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
    { name: 'teddy', score: 100 },
    { name: 'tom', score: 85 },
    { name: 'delonge', score: 80 },
    { name: 'ferdian', score: 70 },
    { name: 'abrar', score: 80 },
]
const scoresGreat = scores.filter((score) => score.score >= 70)
console.log(scoresGreat)

// Reduce
/*
    arr.reduce((acc, cur) => {
        return
    }, intialValue)
*/
const numbers2 = [1, 2, 3, 4, 5]
const summs = numbers2.reduce((acc, cur) => acc + cur, 0)
console.log(summs)


// every 
const names = ['Teddy', 'Ferdian', 'Abrar', 'Amrullah']
const areaAllStr = names.every((names) => typeof names === 'string')
console.log(areaAllStr)

const bools = [true, true, true, true]
const areaAllTube = bools.every((b) => {
    return b === true
})

// Find
const ages = [22, 23, 24, 25, 26, 27]
const agess = ages.find((result) => result < 24)
console.log('ages :', agess)

const namess = ['ronaldo', 'teddy', 'bella', 'besari', 'fiersa']
const lengthNames = namess.find((result) => result.length === 5)
console.log('names', lengthNames)

const scoress = [
    { name: 'Teddy', score: 100 },
    { name: 'Ferdian', score: 90 },
    { name: 'Abrar', score: 80 },
    { name: 'Amrullah', score: 50 },
    { name: 'BELL', score: 100 },
]
const findScores = scoress.find((user) => {
    return user.score >= 90
})
console.log(findScores)

// Find Index 
const namesUser = [
    'Teddy',
    'Besari',
    'Bella',
    'Shinta'
]
const agesUser = [20, 21, 22, 23, 24, 25]

const resultUser = namesUser.findIndex((name) => name.length >= 5)
console.log(resultUser)
const resultAges = agesUser.findIndex((res) => res < 22)
console.log(resultAges)

// Some
const namesUsers = ['Teddy', 'Ferdian', 'Abrar', 'Amrullah'];
const boolss = [true, true, true, true];

const areaSomeTrue = boolss.some((b) => {
    return b == true
})
console.log(areaSomeTrue)

// Sort
const product = [
    'Milk',
    'Coffee',
    'Sugar',
    'Honey',
    'Apple'
]
console.log(product.sort())

const nomors = [
    9.81,
    9.50,
    50,
    80
]
console.log(nomors.sort())
nomors.sort(function (a, b) {
    return a - b
})
console.log(nomors)
nomors.sort(function (a, b) {
    return b - a
})
console.log(nomors)


// Sorting Object Arrays 
// objArr.sort(function (a, b) {
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0
// })

// Or 

// ObjArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
// })

const user = [
    { name: 'Teddy', age: 80 },
    { name: 'Ferdian', age: 90 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
]
user.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(user)