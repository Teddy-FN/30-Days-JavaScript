// Looping
// For 
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let min = 5; min >= 0; min--) {
    console.log(min)
}

for (let num = 0; num <= 5; num++) {
    console.log(`${num} *  ${num} = ${num * num}`)
}

const countries = [
    'Indonesia',
    'England',
    'Singapore',
    'Malaysia',
    'Japan',
    'United States'
]
const newArr = []
for (let cntry = 0; cntry < countries.length; cntry++) {
    newArr.push(countries[cntry].toUpperCase())
}
console.log(newArr)

// Adding Element To Array
const number = [1, 2, 3, 4, 5]
let sum = 0
for (let a = 0; a < number.length; a++) {
    sum += number[a]
}
console.log(sum)


//  Creating New Array based o existing array
const arr1 = []
let sum1 = 0
for (let b = 0; b < number.length; b++) {
    arr1.push(b * b)
}
console.log(arr1)



// While 
let while1 = 0
while (while1 <= 5) {
    console.log(while1)
    while1++
}

// Do While Loop
let dowWhile = 0
do {
    console.log('Dowhile', dowWhile)
    dowWhile++
} while (dowWhile <= 5)

// For Of Loop
// for (const element of Array) {
//     // code Here
// }

let array1 = [1, 2, 3, 4, 5]
for (const number2 of array1) {
    console.log(number2)
}

for (const number3 of array1) {
    console.log(number3 * number3)
}

// Adding All Number
let sum2 = 0
for (const num2 of array1) {
    sum2 = sum2 += num2
}
console.log(sum2)


const webTechs = [
    'HTML',
    'CSS',
    'React',
    'Redux',
    'JavaScript',
    'Node'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

for (const tech of webTechs) {
    console.log(tech[0])
}


let countries2 = [
    'Indonesia',
    'Portugal',
    'Uruguay',
    'Thailand',
    'Brazil',
    'Germany',
    'Russia'
]
let arr3 = []
for (const country of countries2) {
    arr3.push(country.toUpperCase())
}
console.log(arr3)

// Break
for (let c = 0; c <= 5; c++) {
    if (c == 3) {
        break
    }
    console.log(c)
}

// Continue 
for (let d = 0; d <= 5; d++) {
    if (d == 3) {
        continue
    }
    console.log(d)
}
