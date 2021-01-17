// Level 1 
function fullName() {
    const firstName = 'Teddy'
    const lastName = 'Ferdian'
    const fullName = `${firstName} ${lastName}`
    console.log(fullName)
}
fullName()

// Number 2
function fullname1(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullname1('Teddy', 'Ferdian'))

// Number 3 
function addNumbers(num1, num2) {
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(1, 1))

// Number 4 
function areaOfCircle(length, width) {
    area = length * width
    return area
}
console.log(areaOfCircle(10, 20))

// Number 5 
function perimeterOfCircle(length, width) {
    perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfCircle(20, 10))


// Number 6 
function volumeOfRectPrism(length, width, height) {
    volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(10, 20, 30))

// Number 7
function areaOfCircle2(radius) {
    let area = Math.PI * radius * radius
    return area;
}
console.log(areaOfCircle2(10))

// Number 8
function circumOfCircle(radius) {
    let circumFerence = 2 * Math.PI * radius
    return Math.floor(circumFerence)
}
console.log(circumOfCircle(10))

// Number 9
const density = (mass, volume) => `density : ${mass / volume}`
console.log(density(20, 10))

// Number 10
// const countSpeed = () => {
//     let distance = parseInt(prompt('enter your number distance, enter here'))
//     let time = parseInt(prompt('enter the time, enter here'))
//     let speed = distance / time
//     return console.log(`count speed : ${distance} : ${time} so the result is ${speed}`)
// }
// countSpeed()

// Number 11
const weights = (mass, gravity) => `Weight: ${mass * gravity}`
console.log(weights(10, 20))


// Number 12 
// const convertCelciusToFarenheit = () => {
//     const Oc = parseInt(prompt('Enter Number Oc', 'Enter Here....'))
//     let Of = (Oc * 9 / 5) + 32
//     return console.log('Conver Of to Fc : ', Of)
// }
// convertCelciusToFarenheit()


// Number 13
// const calculatedBmi = () => {
//     let inputWeight = parseInt(prompt('Enter Your Weight in Kg', 'Enter Here....'))
//     let inputHeight = parseInt(prompt('Enter Your Height in Meters', 'Enter Here....'))
//     let bmi = inputWeight / (inputHeight * inputHeight)
//     console.log(bmi)
//     switch (bmi) {
//         case bmi <= 18.5:
//             console.log('UnderWeight')
//             break;
//         case bmi > 18.5 && bmi <= 24.9:
//             console.log('Normal Weight')
//             break;
//         case bmi > 25 && bmi <= 29.9:
//             console.log('OverWeight');
//             break;
//         case bmi >= 30:
//             console.log('Obese')
//             break;
//         default:
//             console.log('Your Input Is Not Number')
//             break;
//     }
//     return bmi;
// }
// calculatedBmi()

// Number 14
// const checkSeason = () => {
//     let inputMonth = prompt('Enter The Month', 'Enter Here....')
//     console.log('Input Anda', inputMonth)
//     switch (inputMonth.toLowerCase()) {
//         case inputMonth = 'march':
//         case inputMonth = 'april':
//         case inputMonth = 'may':
//             return console.log('Spring');
//         case inputMonth = 'june':
//         case inputMonth = 'july':
//         case inputMonth = 'august':
//             return console.log('Summer');
//         case inputMonth = 'september':
//         case inputMonth = 'october':
//         case inputMonth = 'november':
//             return console.log('Autumn');
//         case inputMonth = 'december':
//         case inputMonth = 'january':
//         case inputMonth = 'february':
//             return console.log('Winter');
//         default:
//             return console.log('Anda salah input')
//     }
//     return inputMonth
// }
// checkSeason()


// Number 15 
const findMaxNumber = (...arg) => {
    let numb = new Array()
    for (const element of arg) {
        // console.log('element', element)
        // let maximal = Math.max(element)
        numb.push(element)
    }
    let joinString = numb.join(', ')
    console.log(joinString)
    let maxim = Math.max(joinString)
    console.log(maxim)
}

console.log(findMaxNumber(0, -10, -20))