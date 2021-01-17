// Function
function functionName() {
    // Code
}
functionName()

// Function Without Param & Return 
function square() {
    let num = 2
    let sq = num * 2
    console.log(sq)
}
square()

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}
addTwoNumbers()

// function printFullName() {
//     let firstName = 'Teddy'
//     let lastName = 'Ferdian'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }
// printFullName()


// Returning Value In Function
function printFullName() {
    let firstName = 'Teddy'
    let lastName = 'Ferdian'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let sum = numOne + numTwo
    return sum
}
console.log(addTwoNumbers())



// With Param 
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function squareBox(number) {
    return number * number
}
console.log(squareBox(10))


// Function With 2 Param
// function functionName(param1, param2) {
//     // Code
// }
// functionName(param1, param2)

function sumTwoNumber(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(sumTwoNumber(10, 10))

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Teddy', 'Ferdian'))


/*
    Function With Many Param
function withManyParam(param1, param2, param3, ....) {
    code Here...
}
withManyParam(param1, param2, param3, ....)
*/

function arrayLength(arr) {
    let sum = 0
    for (let indexs = 0; indexs < arr.length; indexs++) {
        sum += arr[indexs]
    }
    return sum
}
const numbernya = [1, 2, 3, 4, 5]
console.log(arrayLength(numbernya))


const areaOfCircle1 = (radius) => {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle1(10))


/*
Function With Unlimeited numbers
*/

function unliNumbers() {
    console.log(arguments)
}
unliNumbers(1, 2, 3, 4)

function allSumNumbers() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(allSumNumbers(1, 2, 3, 4))
console.log(allSumNumbers(4, 5, 6))
console.log(allSumNumbers(7, 8, 9))


/*
Unlimited Number With Arrow Function
*/

const consumNumber = (...arg) => {
    let sum = 0
    for (const element of arg) {
        sum += element
    }
    return sum
}
console.log(consumNumber(1, 2, 3, 4))
console.log(consumNumber(5, 6, 7, 8))


/*
Anonymous Function
*/

const thisFunction = function () {
    return console.log('Hi Im Anonymous Function its weird yup')
}
console.log(thisFunction())

const squareSize = function (radius) {
    return radius * radius
}
console.log(squareSize(10))

/*
Self Invoking Functions
*/

// (function (n) {
//     console.log(n * n)
// })(10)
// (function (n) {
//     console.log(n * n)
// })(2)

let squareBoxSize = (function (n) {
    return n * n
})(20)
console.log(squareBoxSize)


/*
Arrow Function
*/

function square(n) {
    return n * n
}
console.log(square(2))

const square1 = (n) => {
    return n * n
}
console.log(square1(5))

const changeToUpperCase = arr => {
    // const newArr = new Array()
    const newArr1 = []
    for (const element of arr) {
        // newArr.push(element.toUpperCase())
        newArr1.push(element.toUpperCase())
    }
    return newArr1
}
const countrys = ['Indonesia', 'Brazil', 'Sweden', 'Singapore', 'Nyamar', 'Germany']
console.log(changeToUpperCase(countrys))


const printFullName1 = (firstName, lastName) => {
    const newArr = new Array()
    let fullName = `${firstName} ${lastName}`
    console.log(fullName)
    newArr.push(fullName.toUpperCase())
    return newArr
}
// return `${ firstName } ${ lastName } `
console.log('Full Name :', printFullName1('Teddy', 'Ferdian'))

// Atau lebih simple
const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullName2('Teddy', 'Ferdian').toUpperCase())



/*
Function With Default Parameter

function functionName(param = value) {
    // codes
}
functionName()
functionName(arg)
*/

function greetings(name = 'Teddy') {
    let message = `${name}, Welcome to 30 Days of JavasCript`
    return message;
}
console.log(greetings())
console.log(greetings('Ferdian'))

function greetingsFullName(firstName = 'Teddy', lastName = 'Ferdian') {
    let space = ' '
    let fullNameWithSpace = `${firstName + space + lastName}`.toUpperCase()
    let fullName = `Hello, My Fullname is ${firstName} ${lastName}`
    return fullNameWithSpace
}
console.log(greetingsFullName())
console.log(greetingsFullName('Shinta', 'Sebloh'))

const age = (birthYear, currentYear = 2021) => currentYear - birthYear
console.log('Age : ', age(1998))
