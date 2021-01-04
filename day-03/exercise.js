// Level 1
// Number 1
let firstname = 'Teddy'
let lastName = 'Ferdian'
let country = 'Indonesia'
let city = 'Surakarta'
let age = 22
let isMarried = false
let year = new Date()
let years = year.getFullYear()

console.log(typeof firstname)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof years)


// Number 2 
let number = '10'
let numbers = parseInt(number)
console.log(numbers == 10)


// Number 3
let numberrs = '9.8'
let ten = Math.round(numberrs)
console.log(ten)
let trueNumber = parseInt(ten)
console.log(trueNumber === 10)


// Number 4
// True Boolean 
console.log(5 > 2)
console.log('Teddy'.length == 'Bella'.length)
console.log(12 <= 'fiersaBesari'.length)


// False Boolean
console.log(20 !== 20)
console.log(10 > 20)
console.log(undefined != null) // True


// Number 5
let number1 = 4 > 3 // True
let number2 = 4 >= 3 // True
let number3 = 4 < 3 // False
let number4 = 4 <= 3 // False
let number5 = 4 == 4 // True
let number6 = 4 === 4 // True
let number7 = 4 != 4 // False
let number8 = 4 !== 4 // False
let number9 = 4 != '4' // False
let number10 = 4 == '4' // True
let number11 = 4 === '4' // False
let py = 'python'.length
let jg = 'jargon'.length

console.log(number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11)
console.log(py != jg) // False

// Number 6 
let booleanString1 = 4 > 3 && 10 < 12
let booleanString2 = 4 > 3 && 10 > 12
let booleanString3 = 4 > 3 || 10 < 12
let booleanString4 = 4 > 3 || 10 > 12
let booleanString5 = !(4 > 3)
let booleanString6 = !(4 < 3)
let booleanString7 = !(false)
let booleanString8 = !(4 > 3 && 10 < 12)
let booleanString9 = !(4 > 3 && 10 > 12)
let booleanString10 = !(4 === '4')
let strings = 'dragon'
let strings2 = 'python'
console.log(booleanString1, booleanString2, booleanString3, booleanString4, booleanString5, booleanString6, booleanString7, booleanString8, booleanString8, booleanString9, booleanString10)
console.log(strings !== strings.search('on') && strings2 !== strings2.search('on'))


// Number 7
const dayNow = new Date()
let yearss = dayNow.getFullYear()
let months = dayNow.getMonth() + 1
let dates = dayNow.getDate()
let days = dayNow.getDay()
let hours = dayNow.getHours()
let minutes = dayNow.getMinutes()

console.log(yearss, months, dates, days, hours, minutes)