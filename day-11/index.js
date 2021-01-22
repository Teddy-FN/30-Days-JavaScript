// Destructuring arrays
const arr = [1, 2, 3, 4]
let [numOne, numTwo, numThree] = arr
console.log(numOne, numTwo, numThree) // 1 2 3
const names = ['John', 'Dendi', 'Sumail', 'Miracle']
const [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // John Dendi Sumail Miracle
const scienticConst = [2.72, 3.14, 9.81, 37, 100];
const [e, Pi, gravity, bodyTemp, boilingTemp] = scienticConst
console.log(e, Pi, gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'MongoDb', 'Express']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd) // [ 'HTML', 'CSS', 'JS', 'React' ]
console.log(backEnd) // [ 'Node', 'MongoDb', 'Express' ]

// If we Like to skip on values 
const numbs = [1, 2, 3, 4, 5]
const [numbOne, , numbThree, numbFour, numbFive] = numbs
console.log(numbOne, numbThree, numbFour, numbFive)

const namesUser = ['John', 'Gerrad', 'James', 'Herman']
const [firtsUser, secondUser, thirdUser] = namesUser
console.log(firstPerson, secondUser, thirdUser)


// We can use default 
const namesUsers = [undefined, 'Brook', 'David']
let [
    firstName = 'Teddy',
    secondName,
    thirdName,
    fourthNames = 'Bella'
] = namesUsers
console.log(firstName, secondName, thirdName, fourthNames)


// Spread Operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [firstNumb, secondNumb, thirdNumb, ...num] = numbers
console.log(firstNumb, secondNumb, thirdNumb) // 1 2 3
console.log(...num) // 4 5 6 7 8 9 10


// Destructuring using iteration
const countrys = [
    ['Findland', 'Helsinki'],
    ['Sweden', 'StockHolm'],
    ['Norway', 'Oslo']
]
for (const [country, city] of countrys) {
    console.log(country, city)
    /*
        Output:
        Findland Helsinki
        Sweden StockHolm
        Norway Oslo
    */
}


const fullStack1 = [
    ['HTML', 'CSS', 'React'],
    ['Mongo', 'Node', 'Express']
]
for (const [frontEnd, backEnd, third] of fullStack1) {
    console.log(frontEnd, backEnd, third)
    /*
        HTML CSS React
        Mongo Node Express
    */
}

// Destructuring Object
const rectangle = {
    width: 100,
    height: 2,
    area: 200,
}
let { width, height, area, volume } = rectangle
console.log(width, height, area, volume) // 100 2 200 undefined


// renaming during structuring 
const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
}
let {
    width: w,
    height: h,
    area: a,
    perimeter: p
} = rectangle1
console.log(w, h, a, p) // 20 10 200 undefined

// Updating On Destructuring
const rectangle2 = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 80
}
// let { lebar, tinggi, volum, perimeter = 60 } = rectangle2
let { lebar, tinggi, volum, perimeter = 60 } = rectangle2 // 100 2 200 80
console.log(width, height, area, perimeter) // 100 2 200 60


// Object parameter without destructuring 
const rect = {
    width: 100,
    height: 200
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect)) // 600

// Object person with destructuring 
const calculateParam = ({ width, height }) => {
    return 2 * (width + height)
}
console.log(calculateParam(rect))

// Another example
const person = {
    firstName: 'Teddy',
    lastName: 'Ferdian',
    age: 22,
    country: 'Indonesia',
    job: 'Software Engginer',
    skils: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDb',
        'Express',
    ],
    languages: [
        'Indonesia',
        'English',
        'Java'
    ]
}
// const GetInfoUser = obj => {
//     const skills = obj.skils
//     const fortmattedSkils = skills.slice(0, -1).join(', ')
//     const lang = obj.languages

//     const infoUser = `Hello My name is ${obj.firstName} ${obj.lastName} im ${obj.age} years old,and im From ${obj.country}, an my Profession is ${obj.job} and i can alot using technology like ${fortmattedSkils}. and for the languages i can ${lang}`
//     return infoUser
// }
// console.log(GetInfoUser(person))


// let's create a fucntion which give information about the person object 
// const personInfo = ({
//     firstName,
//     lastName,
//     age,
//     country,
//     job,
//     skills,
//     languages
// }) => {
//     let formattedSkills = skills
//     let formattedLanguages = languages

//     const skillPerson = formattedSkills.slice(0, -1).join(', ')

//     const personal = `Hello Everyone My name is ${firstName} ${lastName} im ${age} years old im from ${country} my job is ${job} and i can to much using technology like ${skillPerson} and i can talk litte languages like ${formattedLanguages} and im always talking in ${languages[1]}`
//     return personal
// }
// console.log(personInfo(person))


// Destrcuturing Object during iteartion 
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '21/1/2021',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '22/1/2021',
        completed: false
    },
    {
        task: 'Asses Test result',
        time: '23/1/2021',
        completed: false
    }
]
for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}


// Spread or rest operator (...)
const numberss = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
let [num1, num2, num3, ...numss] = numberss
console.log(num1, num2, num3)
console.log(...numss)


const countrysss = [
    'Indonesia', 'Finland', 'Kazakstan', 'Germany', 'France', 'Singapore', 'Japan'
]
let [ind, fin, kaza, ...negara] = countrysss
console.log(ind, fin, kaza)
console.log(...negara)



// Spread operator to copy array 
const even = [
    2, 4, 6, 8, 10
]
const odd = [
    1, 3, 5, 7, 9
]
const wholeNumber = [...odd, ...even]
console.log(even)
console.log(odd)
console.log(wholeNumber)

const postionFrontEnd = [
    'HTML',
    'CSS',
    'JavaScript',
    'React'
]
const positionBackEnd = [
    'Node',
    'Mongo',
    'Express'
]
const FullStackDev = [...postionFrontEnd, ...positionBackEnd]
console.log(postionFrontEnd)
console.log(positionBackEnd)
console.log(FullStackDev)


// Sprean Operator to Object 
const userPerson = {
    name: 'Teddy',
    title: 'Programmer',
    country: 'Indonesia',
    city: 'Surakarta'
}
const copiedUser = { ...userPerson }
console.log(copiedUser)
/*
{
  name: 'Teddy',
  title: 'Programmer',
  country: 'Indonesia',
  city: 'Surakarta'
}
*/

const user = {
    name: 'Teddy',
    title: 'Teacher',
    country: 'Indonesia',
    city: 'Surakarta'
}
const changeVal = { ...user, title: 'Software Engginer' }
console.log(changeVal)
/*
{
  name: 'Teddy',
  title: 'Software Engginer',
  country: 'Indonesia',
  city: 'Surakarta'
}
*/


// Spread Operator With Arrow Function 
const nomor = (...arg) => {
    console.log(arg)
}
nomor(1, 2, 3, 4, 5)

const nomor2 = (...arg) => {
    let sum = 0
    for (const penambahan of arg) {
        sum += penambahan
    }
    return sum
}
console.log(nomor2(1, 2, 3, 4, 5))