// Array

// How To Create Empty Array ada 2 cara
// Cara 1
// const makeArray = new Array()
// console.log(makeArray)

// Cara 2
// const arr = []
// console.log(arr)


// Create array with values
const numberArr = [0, 1, 2, 3, 4, 5]
const fruits = ['mango', 'apple', 'orage', 'lemon', 'banana', 'grape']
const vegetables = ['tomato', 'carrot', 'Onion', 'cabbage', 'cabbage']
const animalProducts = ['Milk', 'Yoghurt', 'Butter', 'Meat', 'Jackets']
const webTech = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node']
const countries = ['USA', 'Japan', 'Indonesia', 'Singapore', 'England', 'Italy']
// Call / Print Using Console.log() and Length
console.log(`Number : ${numberArr}`)
console.log(`Number Length : ${numberArr.length}`)
console.log(`fruits : ${fruits}`)
console.log(`Fruits Length : ${fruits.length}`)
console.log(`Vegetables : ${vegetables}`)
console.log(`Vegetables Length : ${vegetables.length}`)
console.log(`Animal : ${animalProducts}`)
console.log(`Animal Length : ${animalProducts.length}`)
console.log(`Website Technologies : ${webTech}`)
console.log(`Website Length : ${webTech.length}`)
console.log(`Countries : ${countries}`)
console.log(`Countries Length : ${countries.length}`)


// Array bisa di gunakan
const arrayObject = [
    'teddy',
    1998,
    true,
    {
        country: 'Indonesia', city: 'Surakarta'
    }, {
        skills: ['HTML', 'CSS', 'JavaScript', 'ReactJs']
    }
]
console.log(arrayObject)

// Create Array Using Split()
let js = 'javaScript'
const jsSplit = js.split('')
console.log(jsSplit) // [ 'j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

let company = 'Facebook, Google, Amazon, Microsoft, Oracle'
const companies = company.split(', ')
console.log(companies) // [ 'Facebook', 'Google', 'Amazon', 'Microsoft', 'Oracle' ]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const text = txt.split(' ')
console.log(text) // [  'I', 'love', 'teaching', 'and', 'empowering', 'people.', 'I', 'teach', 'HTML,', 'CSS,', 'JS,', 'React,', 'Python.' ]

// Accessing Array Items Using Index
//      0         1        2        3
// ['Banana', 'apples', 'mango', 'orange']

const fruitss = ['Banana', 'Orange', 'Mango', 'Lemon']
let firstFruits = fruitss[0]
console.log(firstFruits)

secondFruits = fruitss[1]
console.log(secondFruits)


let lastFruits = fruitss[fruitss.length - 1]
console.log(lastFruits)


const number = [0, 2, 3.14, 10, 20, 100]
console.log(number.length) // jumlah pada value array
console.log(number) // [0, 2, 3.14, 10, 20, 100]
console.log(number[0]) // 0
let lastIndex = number.length - 1
console.log(number[lastIndex])

let webTechs = [
    'HTML',
    'CSS',
    'React',
    'JavaScript',
    'React',
    'Redux',
    'Node'
]

// Munculin semua Array
console.log(webTechs)
// Cara mengetahui jumlah array
console.log(webTechs.length)
// memunculkan HTML
console.log(webTechs[0])
// memunculkan Node 
console.log(webTechs[webTechs.length - 1])

const Countries = [
    'Indonesia',
    'Japan',
    'Usa',
    'England',
    'Singapore',
    'Korea',
    'France',
    'Afrika'
]
console.log(Countries)
console.log(Countries.length)
console.log(Countries[0])

Countries[0] = 'Arab'
let lastCountries = Countries.length - 1
Countries[lastCountries] = 'Germany'
console.log(Countries)



// Balik nama 
const name = 'Paijo'
let arrName = name.split('')
console.log(arrName)
let reverseName = arrName.reverse()
console.log(reverseName)
let joinName = reverseName.join('')
console.log(joinName)




// Method Manipulasi Array
const arr = Array()
console.log(arr)

const emptyValues = Array(8)
console.log(emptyValues)

// It Create Eight Element Values Filled X
const eightValues = Array(8).fill('X')
console.log(eightValues)

const eightZeroValues = Array(5).fill(0)
console.log(eightZeroValues)

const four4values = Array(4).fill(4)
console.log(four4values)

// Concatenation
const firstLine = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdLine = firstLine.concat(secondList)
console.log(thirdLine)


const buah = ['banana', 'orange', 'mango', 'lemon']
const sayur = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const fruitsAndVegetables = buah.concat(sayur)
console.log(fruitsAndVegetables)

// Getting Array Length 
const numberss = [1, 2, 3, 4, 5, 6]
console.log(numberss.length)

// IndexOf()
const angka = [2, 4, 6, 8, 10, 12]
console.log(angka.indexOf(4))
console.log(angka.indexOf(12))
console.log(angka.indexOf(1)) // Jika tidak ada nilainya maka akan mengembalikan -1


// Soal cerita
const kumpulanBuah = ['pisang', 'nanas', 'apel', 'mangga', 'markisa']
const buahAwal = kumpulanBuah.indexOf('pisang')

if (buahAwal != -1) {
    console.log('Buah tersebut dijual')
} else {
    console.log('buah ini tidak dijual')
}

// Jika menggunakan Ternary Operator
buahAwal != -1 ? console.log('Buah tersebut dijual') : console.log('buah ini tidak dijual')

// Coba LastIndex 
const urutanBuahPalingAkhir = kumpulanBuah.indexOf('durian')
if (urutanBuahPalingAkhir != -1) {
    console.log('Buah tersebut dijual')
} else {
    console.log('buah ini tidak dijual')
}

// Jika menggunakan Ternary Operator
urutanBuahPalingAkhir != -1 ? console.log('Buah tersebut dijual') : console.log('buah ini tidak dijual')


// lastIndexOf()
// LastIndexOf() -> It Gives the position last item in array jika tidak ada akan mereturn -1
const kumpulanAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(kumpulanAngka.lastIndexOf(10))
console.log(kumpulanAngka.lastIndexOf(1))
console.log(kumpulanAngka.lastIndexOf(6))
console.log(kumpulanAngka.lastIndexOf(11))

// Includes -> check item ada di array,dan akan mereturn true / false 
console.log(kumpulanAngka.includes(10))
console.log(kumpulanAngka.includes(2))
console.log(kumpulanAngka.includes(0))

let teknologyWeb = [
    'HTML',
    'CSS',
    'JavaScript',
    'Redux',
    'ReactJS'
]
console.log(teknologyWeb.includes('HTML'))
console.log(teknologyWeb.includes('C'))

// Checking Array
// Array.isArray()
console.log(Array.isArray(kumpulanAngka))
const numbersss = 100
console.log(Array.isArray(numbersss))


// Converting Array to String 
const number1 = [1, 2, 3, 4, 5]
console.log(number1.toString())

const names = ['james', 'brook', 'messi', 'ronaldo']
console.log(names.toString())


// Joining Array Element
console.log(number1.join()) // 1,2,3,4,5
console.log(number1.join('')) // 12345
console.log(number1.join(' ')) // 1 2 3 4 5
console.log(number1.join(', ')) // 1, 2, 3, 4, 5

console.log(names.join()) // james,brook,messi,ronaldo
console.log(names.join('')) // jamesbrookmessironaldo

// Slice() 
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(number2.slice()) // [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
console.log(number2.slice(0, number2.length)) // [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
console.log(number2.slice(0, 7)) // [ 1, 2, 3, 4, 5, 6, 7 ]

// Splice()
const number3 = [1, 2, 3, 4, 5, 6]
console.log(number3.splice()) // remove all items
console.log(number3.splice(0, 1)) // [ 1 ]
console.log(number3.splice(3, 3, 7, 8, 9)) // [ 5, 6 ]

// Push Array()
const array1 = ['item1', 'item2', 'item3']
array1.push('new item')
console.log(array1)

const number4 = [1, 2, 3, 4, 5]
number4.push(6)
console.log(number4)

// Remove() -> pop()
number4.pop()
console.log(number4)


const buahBuahan = ['mango', 'strawberry', 'nanas', 'apel']
buahBuahan.push('lemon')
console.log(buahBuahan)
buahBuahan.push('semangka')
console.log(buahBuahan)

// Removing From Beginner 
const number5 = [0, 1, 2, 3, 4, 5, 6]
number5.shift()
console.log(number5)

// Add From Beginner 
number5.unshift(0)
console.log(number5)


// Reversing Array 
const number6 = [5, 4, 3, 2, 1, 0]
let reverse1 = number6.reverse()
console.log(reverse1)


// Sorting array 
const teknologi = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

teknologi.sort()
console.log(teknologi)

teknologi.reverse()
console.log(teknologi)


// Array of Array 
const firstNums = [1, 2, 3]
const secondNums = [4, 5, 6]

const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0])

const frontEnd = ['HTML', 'CSS', 'JavaScript', 'Redux', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])