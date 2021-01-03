// Data Types ada 2 Jenis Yaitu primitive dan NonPrimitive
/*
    Primitive DataTypes
    1. Number
    2. String
    3. Boolean
    4. Undefined
    5. Null
*/

/*
    Non-Primitive DataTypes
    1. Object
    2. Function
    3. Array
*/


// Example Primitive DataTypes
let sword = 'JavaScript'
sword[0] = 'Y' // Tidak Bisa
console.log(sword)

let numOne = 3
let numTwo = 3

let js = 'JavaScript'
let phyton = 'Phyton'
phyton = 'JavaScript' // Jika Di Update maka value atau nilainya menjadi true

let lightOn = true
let lightOff = false

console.log('numOne == numTwo', numOne == numTwo)
console.log('js == phyton', js == phyton)
console.log('lightOn == lightOff', lightOn == lightOff)


let ages = 22
let gravity = 9.81
let kiloGram = 1000

console.log(ages, gravity, kiloGram)

// Number Obect -> Math
let Pi = Math.PI
console.log('Number PI', Pi)

// Math.floor() -> di bulatkan kebawah 
let number1 = 3.5
console.log('Math Floor', Math.floor(number1))
// Math.round() -> di bulatkan nilai yang terdekat
let number2 = 4.7 // 5
let number3 = 2.4 // 2
console.log('Math round', Math.round(number1))
console.log('Math round', Math.round(number2))
console.log('Math round', Math.round(number3))
// Math.ceil()
console.log('Math Ceil', Math.ceil(number1))
console.log('Math Ceil', Math.ceil(number2))
console.log('Math Ceil', Math.ceil(number3))
// Math.min -> mencari nilai yang terkecil dari semua nilai yang ada di mulai dari nilai pertama
console.log('Math Min', Math.min(-20, 4, -60, 1, 6, -10))
// Math.Max -> Mencari nilai yang paling tertinggi dari semua nilai yang ada di mulai dari nilai pertama
console.log('Math Max', Math.max(10, 5, 200, 6, 50))
// Math.random -> nilai acak dari 0 - 1
let numberRandom = Math.random() * 100
console.log('Math Random', Math.round(numberRandom))
// Create random number 0 - 10
let NumberZeroToTen = Math.random() * 10
let NumberToTen = Math.floor(NumberZeroToTen)
console.log('Number random 0 - 10', NumberToTen)
// Strings
let space = ' '
let firstName = 'Teddy'
let lastName = 'Ferdian'
let country = 'Indonesia'
let city = 'Surakarta'
// Concatination
let fullName = firstName + space + lastName
console.log('FullName', fullName)
let personInfo = fullName + ' is My name ' + country + ' is My country'
console.log(personInfo)
// Escape Character 
console.log('I hpoe you get life be better, and happy ending, \ndo You??')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2021')
// Template literals
console.log('Perhitungan angka a & b')
let a = 20
let b = 10
console.log(`Jika Angka ${a} dan ${b} di jumlah maka ${a + b}`)
console.log(`Jika Angka ${a} dan ${b} di kurang maka ${a - b}`)
console.log(`Jika Angka ${a} dan ${b} di kali maka ${a * b}`)
console.log(`Jika Angka ${a} dan ${b} di bagi maka ${a / b}`)
console.log(`Personal Info : My name is ${firstName}. Im from ${city}, ${country}`)
// Perbandingan 
console.log(`Apakah nilai ${a} lebih besar dari ${b} ${a} : ${a > b}`)
/* 
    String Method 
    1. Length
    2. Asscending character -> perhitungan di mulai dari 0
    3. ToUpperCase()
    4. ToLowerCase()
    5. Substr()
    6. Substring()
    7. Split()
    8. Trim() -> menghapus spasi pada sebuah variabel untuk index awal dan terakhir
    9. Includes() -> Mengecek apakah nilain yang di cari tersedia / ada di dalam string untuk output adalah boolean
   10. Replace (param 1 kalimat / kata yang akan di ganti, param 2 kalimat / kata yang mengganti)
   11. CharArt() -> mengambil index dan mengembalikan index tersebut
   12. CharCodeArt() -> Megambil Index dan mengembalikan berdasarkan char code (ASCII number)
   13. IndexOf() -> memgambil dari kalimat string jika ada akan mengembalikan nilai number jika tidak ada maka akan mengembalika nilai -1
   14. LastIndexOf() -> ambil string tetapi dimulai dari index paling akhir dulu 
   15. Concat -> Penggabungan antara beberapa string pada index seperti + dsb
   16. StartWith() -> Hanya mengambil index pertama pada sebuah value dan mengembalikan boolean
   17. EndWith() -> Hanya Mengambil index paling akhir pada sebuah value dan mengembalikan boolean
   18. Search() -> akan menelusuri terlebih dahulu dari index paling awal
   19. Match() -> mengambil subString atau lebih dikenal regular expression dan jika ada / ketemu akan mengembalikan sebuah array dan jika tidak maka akan mengembalikan nilai null
   20. repeat() -> Mengulang
*/
let fullNamePerson = 'Teddy Ferdian Abrar Amrullah'
console.log(`Length nama dari ${fullNamePerson} adalah, ${fullNamePerson.length}`)

// jika ingin mencetak bagian yang paling akhir
let lastIndex = fullNamePerson.length - 1
console.log(`asscending', ${fullNamePerson[lastIndex]}`)
console.log(`ToUpperCase ${fullNamePerson.toUpperCase()}`)
console.log(`ToLowerCase, ${fullNamePerson.toLowerCase()}`)
console.log(`Substr, ${fullNamePerson.substr(6, 7)}`) // Ferdian
console.log(`Substring, ${fullNamePerson.substring(6)}`) // Ferdian Abrar Amrullah
console.log(`Split, ${fullNamePerson.split('')}`) // T,e,d,d,y, ,F,e,r,d,i,a,n, ,A,b,r,a,r, ,A,m,r,u,l,l,a,h
console.log(`Split, ${fullNamePerson.split(' ')}`) // Teddy,Ferdian,Abrar,Amrullah
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(`Split, ${countries.split(', ')}`) // ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
let string = ' Hello MotherFucker '
console.log(`Trim, ${string.trim()}`) // Trim, Hello MotherFucker
let string1 = 'This is January 2021 I study about JavaScript'
console.log(`String, ${string1.includes('Java')}`) // True 
console.log(`String, ${string1.includes('about')}`) // True
console.log(`String, ${string1.includes('Script')}`) // True
console.log(`String, ${string1.includes('this')}`) // False

let string2 = 'waktu ini sudah menunjukan pukul 20.00 pagi'
console.log(`Replace, ${string2.replace('pagi', 'Malam')}`) // waktu ini sudah menunjukan pukul 20.00 Malam

let string3 = '30 Hari belajar JavaScript'
console.log(`CharArt, ${string3.charAt(10)}`) // l
let lastIndexCharArt = string3.length - 1;
console.log(`CharArt Last Index, ${string3.charAt(lastIndexCharArt)}`) // t Karena di ambil berdasarkan urutan paling akhir

console.log(`CharCodeArt, ${string3.charCodeAt(10)}`) // 108
console.log(`CharCodeArt, ${string3.charCodeAt(7)}`) // 32

console.log(`IndexOf, ${string3.indexOf('belajar')}`) // 8
console.log(`IndexOf, ${string3.indexOf('Java')}`) // 16
console.log(`IndexOf, ${string3.indexOf('java')}`) // -1 karena salah

let string4 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(`LastIndexOf, ${string4.lastIndexOf('love')}`) // 67
console.log(`LastIndexOf, ${string4.lastIndexOf('not')}`) // 29

let string5 = '08 juni'
console.log(`Concat, ${string5.concat(' adalah ', 'hari ', 'ulang ', 'tahunku.')}`) // 08 juni adalah hari ulang tahunku.

let string6 = 'Lil pump is rapper'
console.log(`StartWith, ${string6.startsWith('Lil')}`) // true
console.log(`StartWith, ${string6.startsWith('pump')}`) // false
console.log(`StartWith, ${string6.startsWith('lil')}`) // false

console.log(`EndWith, ${string6.endsWith('rapper')}`) // true
console.log(`EndWith, ${string6.endsWith('is')}`) // false
console.log(`EndWith, ${string6.endsWith('pump')}`) // false

let string7 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(`Search, ${string7.search('love')}`) // 2
console.log(`Search, ${string7.search('If')}`) // 19
console.log(`Search, ${string7.search(/you/gi)}`) // 22
console.log(`Search, ${string7.search(/else/gi)}`) // 54

console.log(`Match, ${string7.match(/love/gi)}`) // love,love,love
console.log(`Match, ${string7.match(/JavaScript/gi)}`) // JavaScript,JavaScript
console.log(`Match, ${string7.match(/you/gi)}`) // you,you
console.log(string7.match('love')) // [ 'love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined ]
console.log(`Match, ${string7.match('java')}`) //null

let txt = 'In 2020, I ran 30 Days of Python. Now, in 2021 I am super exited to start this challenge'
let regEx = /\d+/

console.log(txt.match(regEx))
console.log(txt.match(/\d+/g)) // [ '2020', '30', '2021' ]

let string8 = 'Hello'
console.log(`Repeat, ${string8.repeat(10)}`) // HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
let string9 = 'Teddy '
console.log(`Repeat, ${string9.repeat(10)}`) // Teddy Teddy Teddy Teddy Teddy Teddy Teddy Teddy Teddy Teddy 




// Example Non-Primitive DataTypes -> tipe data non primitive tidak bisa di compare dengan variabel tipe data non primitive
let array1 = [1, 2, 3]
array1[0] = 10 // Karena Di Update
console.log('array', array1)

let contohArr = [1, 2, 3]
let conothArr2 = [1, 2, 3]
console.log('Compare array', contohArr == conothArr2) // False

let contohObj = {
    name: 'Teddy',
    umur: 22,
    status: 'Student'
}
let contohObj1 = {
    name: 'Teddy',
    umur: 22,
    status: 'Student'
}
console.log('Contoh Obj', contohObj == contohObj1) // False

// jika ingin hasil compare dari tipe data non-Primitive true maka
let contohArr3 = [1, 2, 3]
let contohArr4 = contohArr3
console.log('Compare arr True', contohArr3 == contohArr4)

let contohObj3 = {
    name: 'Teddy',
    umur: 22,
    status: 'Student'
}
let contohObj4 = contohObj3
console.log('Compare Obj True', contohObj3 == contohObj4)


/*
    Checking DataTypes
    typeof()
*/
let check1 = 'Hello'
let check2 = 22
let check3 = null
let check4 = true
let check5 = false
let check6

console.log('Check1', typeof check1)
console.log('Check2', typeof check2)
console.log('Check3', typeof check3)
console.log('Check4', typeof check4)
console.log('Check5', typeof check5)
console.log('Check6', typeof check6)


/*
    Changing DataTypes
    1. ParseInt()
    2. Number()
    3. Plus Sign(+)
*/

