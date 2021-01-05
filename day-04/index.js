/*
    Conditional
    1. If
    2. If else
    3. If... If else...else
    4. Switch
    5. Ternary Operator
*/


// If 
let num = 10
if (num > 5) {
    console.log(`${num} bigger than 5`)
}

let trues = true
if (trues) {
    console.log('Ini lagi hujan jadi jangan lupa pake payung')
}

// If.. If else
let nums = 10
if (nums < 20) {
    console.log(`Angka ${nums} ini lebih besar dari 20`)
} else {
    console.log(`Angka ${nums} lebih kecil dari 20`)
}

nums = -20
if (nums > 20) {
    console.log(`Angka ${nums} ini lebih besar dari 20`)
} else {
    console.log(`Angka ${nums} lebih kecil dari 20`)
}


let isRaining = true
if (isRaining) {
    console.log('Ini lagi musim hujan jadi jangan lupa pake payung')
} else {
    console.log('Ini tidak hujan,jadi tidak usah membawa payung')
}

isRaining = false
if (isRaining) {
    console.log('Ini lagi musim hujan jadi jangan lupa pake payung')
} else {
    console.log('Ini tidak hujan,jadi tidak usah membawa payung')
}


// If..Else If...Else
let a = 0
if (a > 0) {
    console.log(`${a} is a Positive Number`)
} else if (a < 0) {
    console.log(`${a} is a negative Number`)
} else if (a == 0) {
    console.log(`${a} is a zero Number`)
} else {
    console.log(`${a} is Not a Number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
    console.log(`You Need A Rain Coat`)
} else if (weather === 'cloudly') {
    console.log('It Might Be Cold, You Need A Jacket')
} else if (weather === 'sunny') {
    console.log(`Go out and have fun`)
} else {
    console.log(`No need A RainCoat`)
}


// Switch
switch (weather) {
    case 'rainy':
        console.log('You need A Rain Coat')
        break;
    case 'cloudly':
        console.log('It Might Be Cold, You need A Jacket')
        break;
    case 'sunny':
        console.log('Go out and have fun')
        break;
    default:
        console.log('No Need A RainCoat')
        break;
}


let fromUser = prompt('What is Today??')
switch (fromUser) {
    case 'senin':
        console.log('hari ini adalah hari senin')
        break;
    case 'selasa':
        console.log('hari ini adalah hari selasa')
        break;
    case 'rabu':
        console.log('hari ini adalah hari rabu')
        break;
    case 'kamis':
        console.log('hari ini adalah hari kamis')
        break;
    case 'jumat':
        console.log('hari ini adalah hari jumat')
        break;
    case 'sabtu':
        console.log('hari ini adalah hari sabtu')
        break;
    case 'minggu':
        console.log('hari ini adalah hari minggu')
        break;
    default:
        console.log('yang anda masukan bukan nama hari')
        break;
}


// Input Number From User -> If Else
let inputNumber = parseInt(prompt('Input Your Number', 'Enter Here'))
if (inputNumber > 1000) {
    console.log('Nomor yang anda masukan lebih dari 1000')
} else if (inputNumber > 100 && inputNumber <= 1000) {
    console.log('Nomor yang anda masukan lebih dari 100 dan kurang dari 1000')
} else if (inputNumber > 50 && inputNumber <= 100) {
    console.log('Nomor yang anda masukan lebih dari 50 dan kurang dari 100')
} else if (inputNumber > 10 && inputNumber <= 50) {
    console.log('Nomor yang anda masukan lebih dari 10 dan kuramng dari 50')
} else if (inputNumber > 5 && inputNumber <= 10) {
    console.log('Nomor yang anda masukan lebih dari 5 dan kurang dari 10')
} else if (inputNumber > 0 && inputNumber < 5) {
    console.log('Nomor yang anda masukan lebih dari 0 dan kurang dari 5')
} else if (inputNumber === 0) {
    console.log('Nomor yang anda masukan sama dengan 0')
} else {
    console.log('yang anda input bukan nomor')
}


// input switch
switch (inputNumber) {
    case inputNumber > 1000:
        console.log('Nomor yang anda masukan lebih dari 1000')
        break;
    case inputNumber > 100 && inputNumber <= 1000:
        console.log('Nomor yang anda masukan lebih dari 100 dan kurang dari 1000')
        break;
    case inputNumber > 50 && inputNumber <= 100:
        console.log('Nomor yang anda masukan lebih dari 50 dan kurang dari 100')
        break;
    case inputNumber > 10 && inputNumber <= 50:
        console.log('Nomor yang anda masukan lebih dari 10 dan kuramng dari 50')
        break;
    case inputNumber > 5 && inputNumber <= 10:
        console.log('Nomor yang anda masukan lebih dari 5 dan kurang dari 10')
        break;
    case inputNumber > 0 && inputNumber < 5:
        console.log('Nomor yang anda masukan lebih dari 0 dan kurang dari 5')
        break;
    case inputNumber === 0:
        console.log('Nomor yang anda masukan sama dengan 0')
        break;
    default:
        console.log('yang anda masukan bukan nomor')
        break;
}



// Ternary Operator 
let isSunny = true

isSunny === true ? console.log('let hangOut And have fun') : console.log('Dont Forget use A Raincoat')