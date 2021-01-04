// Lvl 2
// Number 1 
// const numberArea = 0.5
// let numberBase = prompt('Enter Number Base', 'Enter Base')
// let numberHeight = prompt('enter Number Height', 'Enter Here')
// console.log(`Area : ${numberArea * numberBase * numberHeight}`)


// Number 2 
// let numberSideA = prompt('Enter Number Side A', 'Enter Here')
// let numberSideB = prompt('Enter Number Side B', 'Enter Here')
// let numberSideC = prompt('Enter Number Side C', 'Enter Here')
// console.log(`Perimeter Triangle : ${parseInt(numberSideA) + parseInt(numberSideB) + parseInt(numberSideC)}`)

// number 3
// let lengthNumber = parseInt(prompt('Enter Length Number', 'Enter Here'))
// console.log(lengthNumber + 50)
// let widthNumber = parseInt(prompt('Enter Width Number', 'Enter Here'))
// let perimeter = 2 * (lengthNumber + widthNumber)
// console.log('perimeter', perimeter)
// console.log(`Area : ${lengthNumber * widthNumber * perimeter}`)


// Number 4 
// const Pi = Math.PI
// let radiusCircle = parseInt(prompt('Enter Radius Number', 'Enter Here'))
// let result = Math.floor(Pi * radiusCircle * radiusCircle)
// console.log(`Area Circle : ${result}`)

// let circumferenceCircle = Math.floor(2 * Pi * radiusCircle)
// console.log(`circumference : ${circumferenceCircle}`)


// Number 5


// Number 6
let numberY1 = 2
let numberY2 = numberY1

let numberX1 = 6
let numberX2 = 10

let resultSlope = (numberY2 - numberY1) / (numberX2 - numberX1)
console.log(`Slope : ${resultSlope}`)


// Number 7 



// Number 8




// Number 9
// let inputHours = parseInt(prompt('Enter Hours', 'Enter Here'))
// let inputPerHour = parseInt(prompt('Enter Rate Per Hour', 'Enter Here'))

// let earningWeekly = inputHours * inputPerHour
// console.log(earningWeekly)


// Number 10 
// let fullName = prompt('enter Your Name', 'Enter Here')
// let numberName = fullName.length
// console.log(fullName, numberName)

// numberName > 7 ? console.log('ypur name is to long') : console.log('Your name is to short')


// Number 11
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName} `) : console.log(`YOur first name ${firstName} is shorter than your family name, ${lastName}`)


// Number 12
let myAge = 250
let yourAge = 25

myAge > yourAge ? console.log(`Iam ${myAge - yourAge} years older than you`) : console.log(`Iam ${myAge - yourAge} younger than you`)


// Number 13 
// const yearsNow = new Date()
// let verifyYears = yearsNow.getFullYear()
// console.log('Years', verifyYears)
// console.log(typeof verifyYears)
// let enterBirthYear = parseInt(prompt('Enter Birth Years', 'Enter Here'))

// let licenceId = verifyYears - enterBirthYear
// console.log(`Licence Id ${licenceId}`)
// licenceId >= 18 ? console.log(`You are ${licenceId}. You are old enough to drive`) : console.log(`You are ${licenceId}. You will be allowed to drive after ${18 - licenceId} years`)


// Number 14
// const dateInNows = new Date()
// let numberUserLive = parseInt(prompt('Enter Number Of Your Lives', 'Enter Here'))
// let resultLive = dateInNows.getMilliseconds(numberUserLive)

// console.log(`Your Lived ${resultLive * 525600} seconds`)


// Number 15
const newDates = new Date()
let years = newDates.getUTCFullYear()
let months = newDates.getMonth() + 1
let dates = newDates.getDate()
let hours = newDates.getHours()
let minutes = newDates.getMinutes()

// a 
console.log(`${years}-0${months}-0${dates} ${hours}:${minutes}`)
// b
console.log(`0${dates}-0${months}-${years} ${hours}:${minutes}`)
// c
console.log(`0${dates}/0${months}/${years} ${hours}:${minutes}`)