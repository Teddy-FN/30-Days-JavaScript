// Boolean = True / False

let lightOn = true
let lightOff = false
let greater = 4 > 3 // True
let less = 2 < 5 // True
let letFalseBoolean = 10 < 5 // False

console.log(lightOn, lightOff, greater, less, letFalseBoolean)

/*
    Truthy Boolean
    1. Positive number and negative number except 0 (Zero) Number
    2. All string are thruty
    3. The boolean True


    Falsy Boolean
    1. 0
    2. On
    3. null
    4. undefined
    5. NaN (Not A Number)
    6. The boolean False
    7. Empty String
*/

// Undefined -> mendeklarasikan sebuah variabel tetapi tidak ada value 
let noneVar
console.log('Undefined', noneVar) // Undefined

// Null -> empty / value kosong / lebih tepat tidak ada value
let emptyVariabel = null
console.log('Null', emptyVariabel)

/*
        ArithMatic Operator:
    1. addiction(+) a + b
    2. Subtraction(-) a - b
    3. Multiplication(*) a * b
    4. Division(/) a / b
    5. Modulos(%) a % b
    6. Exponential(**  / Pangkat) a ** b
*/

const a = 10
const b = 5
let plus = a + b // 15
let minus = a - b // 5
let multi = a * b // 50
let division = a / b // 2
let modulos = a % b // 0
let expo = a ** b // 10.000
console.log(plus, minus, multi, division, modulos, expo)


/*
        Comparison Operator
    1. == -> perbandingan untuk value saja
    2. != -> not equal
    3. === -> perbandingan value dan bentuk tipe data
    4. < -> less
    5. > -> greater
    6. <= -> less than or equal to
    7. >= -> greater than or equal to
*/

console.log(5 == 5) // True
console.log(10 != '10') // True
console.log(50 !== '50') // True karena type data
console.log(10 > 5) // True
console.log(40 > 40) // False
console.log(40 < 50) // True
console.log(40 < 40) // False
console.log('mango'.length < 'apple'.length) // False
console.log('mango'.length <= 'apple'.length) // True
console.log(NaN == NaN) // False karena bentuk tipe data Falsy
console.log(NaN = NaN) // NaN
console.log(NaN != NaN) // True
console.log(undefined == undefined) // True 
console.log(undefined !== 'undefined') // True
console.log(undefined != null)
console.log(typeof NaN) // Number
console.log('Teddy'.length == 'Bella'.length) // True


/*
    Logical Operator
    1. && -> And
    2. || -> Or
    3. ! -> Negates
*/

//  && And 
console.log(5 < 10 && 10 > 5) // True (true ketemu true -> True)
console.log(1 < 2 && 2 > 5)  // False (true Ketemu false -> False)
console.log(10 > 20 && 5 < 10) // False (false ketemu true -> False)

// || Or
console.log(5 < 10 && 10 > 5) // True (true ketemu true -> True)
console.log(10 < 20 || 5 > 2) // True (true ketemu false -> True)
console.log(20 > 50 || 20 < 30) // True (false ketemu true -> True)

// ! Negation
let check = 4 > 3 // True
console.log(check) // True

let negetCheck = !(4 > 3) // False
console.log(negetCheck) // False
let lampuHidup = true
let matiLampu = !lampuHidup
console.log(matiLampu) // False

/*
    Incremenent Operator
    1. Pre-Increment -> ++ di awal variabel
    2. Post-Increment -> ++ di akhir variabel dan console harus ada 2 
*/

// Pre-Increment 
let count = 0
console.log(++count) // 1
// Post-Increment
let count2 = 0
console.log(count2++) // 0
console.log(count2) // 1

/*
    Decrement Operator
    1. Pre-Decerement
    2. Post-Decrement
*/

// Pre-Decrement
let count3 = 1
console.log(--count3) // 0
// Post-Decrement
let count4 = 1
console.log(count4--) // 1
console.log(count4) // 0


// Ternary Operator
let rainToday = true //             True                            False
rainToday ? console.log('Kalau keluar pakai payung Woi') : console.log('Nggak usah pake payung')

let numbers = 10
numbers > 5 ? console.log(`Angka ${numbers} lebih besar dari 5`) : console.log(`Angka ${numbers} lebih kecil dari 5`)

/*
    Window Method
    1. Alert()
    2. Confirm()
    3. Prompt()
*/

// Alert 
// let method1 = alert('Welcome')
// // Prompt
// let method2 = prompt('Masukan nilai', 'nilanya')
// console.log(method2)
// // Confirm
// let method3 = confirm('Do you have a name?')
// console.log(method3)


/*
    Date Object harus pake new karena Object
    1. getFullYear()
    2. getMonth() 0 - 11 / january - december
    3. getDate() 1 - 31
    4. getHours() 0 - 23 
    5. getMinutes() 0 - 59
    6. getSecond() 0 - 59
    7. getMiliSeconds() 0 - 999
    8. getTime()
    9. getDay() 0 - 6 / 7 hari 
*/

// Create Date Object  
const now = new Date()
console.log(now)
// getFullYear
const now1 = new Date()
console.log(now1.getFullYear())
// getMonth
const now2 = new Date()
console.log(now2.getMonth())
// getDate
const now3 = new Date()
console.log(now2.getDate())
// getHours
const now4 = new Date()
console.log(now4.getHours())
// getMinutes
const now5 = new Date()
console.log(now5.getMinutes())
// getSecond()
const now6 = new Date()
console.log(now6.getSeconds())
// getSecond()
const now7 = new Date()
console.log(now7.getDay())


// mari buat lebih manusiawi
const nows = new Date()
let dates = nows.getDate()
// let days = nows.getDay()
let months = nows.getMonth() + 1
let years = nows.getFullYear()
let times = nows.getTime()
let hours = nows.getHours()
let minutes = nows.getMinutes()

console.log(`${dates} ${months} ${years}, ${hours}:${minutes}`)