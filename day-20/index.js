// Writing Clean Code

// Variabel  -> menggunakan let aja
let firstName = 'Teddy'
let lastName = 'Ferdian'
let age = 22
let country = 'Indonesia'
let city = 'Sukoharjo'

const Pi = Math.PI

// const => function,array,object
const fruits = [
    'Banana', 'Apple', 'Mango', 'Orange', 'Coconut'
]
const vegetable = [
    'Chili', 'Carrot', 'Tomato', 'Onion', 'Slada'
]
const name = [
    'Paijo', 'Dedy', 'Dhoni', 'rendy', 'Natasha'
]
const skills = [
    'CSS', 'HTML', 'React', 'JavaScript', 'PHP', 'CodeIgniter'
]
const countrys = [
    'Japan', 'England', 'Singapore', 'Germany', 'Paris', 'Italy'
]
const language = [
    'Jawa', 'Indonesia', 'Inggris', 'Sunda', 'Melayu', 'Japan'
]

// Function -> Kunci terkuat javaScript
const fullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName(firstName, lastName))

// Function Calculate Number 
const Plus = (n) => n + n
console.log(Plus(4))

// Function With Generate Random Number 
const generateColor = () => {
    const numberAndWord = '0123456789abcdef'
    let Shape = '#'
    // Kita butuh untuk memasukan nilai dari mixing
    let index
    // Kita Acak memnggunakan For Loop
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * numberAndWord.length)
        Shape += numberAndWord[index]
    }
    return Shape
}
console.log(generateColor())

// Function untuk membuat tanggal dan waktu sekarang 
const MakeADate = () => {
    let timeDate = new Date()
    let year = timeDate.getFullYear()
    let month = timeDate.getMonth() + 1
    let date = timeDate.getDate()
    let hours = timeDate.getHours()
    let minutes = timeDate.getMinutes()
    // Condiotonal 
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    // Mixing All 
    let FullYearNow = `${date}.${month}.${year}`
    let times = `${hours}:${minutes}`
    let fullTimesNow = `${FullYearNow} ${times}`
    return fullTimesNow
}
console.log(MakeADate())

// Loooping -> while..do...while..for...for of...
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Declararing in array var 
let arr = [
    'Teddy', 'Ferdian', 'Abrar', 'Amrullah'
]

// Iterating an Array using reguler
let len = arr.length
for (let i = 0; i < len; i++) {
    console.log(arr[i].toUpperCase())
}
// Iterating an Array using for of
for (const names of arr) {
    console.log(names.toUpperCase())
}
// Iterating an Array using forEach
// const namaNama = arr.forEach((name) => name.toUpperCase())
// console.log(namaNama)

// Object
const person = {
    name: 'Teddy Ferdian Abrar Amrullah',
    age: 22,
    country: 'Indonesia',
    city: 'Sukoharjo',
    skills: [
        'HTML', 'CSS', 'JavaScript', 'React'
    ],
    isMarried: false
}
for (const key in person) {
    console.log(key)
}

// We decalring using object literal 
const user = {
    firstName: 'Teddy',
    lastName: 'Ferdian',
    age: 22,
    country: 'Indonesia',
    city: 'Sukoharjo',
    skills: [
        'CSS', 'HTML', 'JavaScript', 'React'
    ],
    isMarried: false
}
for (const value in person) {
    console.log(value, person[value])
}

// Conditional in JavaScript if...if else...if..else if...else....Switch 
// if (condition) {
//     // 
// } else {

// }

// If Else
let num = 3
if (num > 0) {
    console.log('Bigger Than 3')
} else {
    console.log('Less Than 3')
}

// If...else if...else 
let nums = 10
if (nums > 20) {
    console.log('Bigger Than 20')
} else if (nums < 20) {
    console.log('Less than 20')
} else {
    console.log('Less Than 10')
}

// Switch Case
// let fromUser = prompt('What\'s Is today?', 'Enter Here')
// let userInput = fromUser.toUpperCase()
// let day = userInput.toLowerCase()
// switch (day) {
//     case 'sunday':
//         console.log('This is Sunday')
//         break;
//     case 'monday':
//         console.log('This is Monday')
//         break;
//     case 'tuesday':
//         console.log('This is Tuesday')
//         break;
//     case 'wednesday':
//         console.log('This is Wednesday')
//         break;
//     case 'thursday':
//         console.log('This is Thursday')
//         break;
//     case 'friday':
//         console.log('This is Friday')
//         break;
//     case 'saturday':
//         console.log('This is Saturday')
//         break;
//     default:
//         console.log('Anda input bukan nama hari')
// }

// Ternary 
let Raining = true
Raining
    ? console.log('siapkan Payung') : console.log('Ngapain bawa mantol')



// Class 
// class ClassName  {
//     // Code Goes here
// }

class PersonUSer {
    constructor(firstName, lastName) {
        console.log('INI THIS', this)
        this.firstName = firstName
        this.lastName = lastName
    }
}