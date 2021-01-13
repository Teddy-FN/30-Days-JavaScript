// Lvl 1
// for 
for (let i = 1; i <= 10; i++) {
    console.log('FOR', i)
}
//  While
let nums = 0 + 1
while (nums <= 10) {
    console.log('WHILE', nums)
    nums++
}
// Do While
let num = 0 + 1
do {
    console.log('DO...WHILE', num)
    num++
} while (num <= 10)

//  number 2 
for (let min = 10; min >= 0; min--) {
    console.log('FOR MIN', min)
}

let mins = 10
while (mins >= 0) {
    console.log('WHILE MINS', mins)
    mins--
}

let minss = 10
do {
    console.log('DO...WHILE,MINS', minss)
    minss--
} while (minss >= 0)

// number 3
// Literate Using N
for (let number = 10; number >= 0; number--) {
    console.log('LITERATE', number)
}

// Number 4
let bintang = ''
for (let numb = 0; numb <= 5; numb++) {
    for (let baris = 0; baris <= numb; baris++) {
        bintang += '#'
    }
    bintang += "\n"
}
console.log(bintang)

// Number 5
for (let numb1 = 0; numb1 <= 10; numb1++) {
    console.log(`${numb1} * ${numb1} : ${numb1 * numb1}`)
}

// Number 6 
for (let number = 0; number <= 10; number++) {
    console.log(number, number * number, number * number * number)
}

// Number 7
for (let numberOdd = 0; numberOdd <= 100; numberOdd++) {
    if (numberOdd % 2 === 1) {
        console.log(numberOdd)
    }
}

// Number 8
for (let numberEven = 0; numberEven <= 100; numberEven++) {
    if (numberEven % 2 === 0) {
        console.log(numberEven)
    }
}

// Number 9
for (let prima = 0 + 1; prima <= 100; prima++) {
    if (prima / 2 == 0 && prima / 3 == prima) {
        console.log(prima)
    }
}


// Number 10
for (let numberHundred = 0; numberHundred <= 100; numberHundred++) {
    console.log(`the sum of all number 0 to 100 is`, (numberHundred * numberHundred))
}