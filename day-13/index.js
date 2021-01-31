// Console log 
// Showing Output on browser console
console.log('30 Dasy of javaScript')

// Showing using %c 
console.log('%d %s of JavaScript', '30', 'Days')

// styling message using css 
console.log('%c30 Days of JavaScript', 'color:red')
console.log('%c30 Days%c %cof%c %cJavaScript%c',
    'color:green'
    , '',
    'color:blue',
    '',
    'color:yellow'
)

// Console Warn
console.warn('This is A Warning')
console.warn('Youre Are Using React. Do Not Touch teh DOM. Virtual DOM will take care of handling the DOM')
console.warn('Warning is different from error')

// console.error
console.error('This is An Error')
console.error('We All make mistake')


// console table 
const names = [
    'Teddy',
    'Bella',
    'Azka'
]
console.table(names)

const user = {
    name: 'Teddy',
    title: 'FE',
    country: 'Indonesia',
    city: 'Surakarta',
    age: 22
}
console.table(user)

const countries = [
    ['Indonesia', 'Jakarta'],
    ['Japan', 'Tokyo'],
    ['USA', 'New York']
]
console.table(countries)

const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)


// Console time 
const coutry = [
    ['Indonesia', 'Jakarta'],
    ['Japan', 'Tokyo'],
    ['USA', 'New York']
]

console.time('for for Loop')
for (let i = 0; i < 3; i++) {
    console.log(coutry[i][0], coutry[i][1])
}
console.timeEnd('for for Loop')

// For OF
console.time('for of for Loop')
for (const [negara, ibukota] of coutry) {
    console.log(negara, ibukota)
}
console.timeEnd('for of for Loop')

// For Each 
console.time('forEach for Loop')
coutry.forEach(([negara, ibukota]) => {
    console.log(negara, ibukota)
})
console.timeEnd('forEach for Loop')


// console info 
console.info('30 Days of javaScript challenge is trending on GitHub')
console.info('30 Days of Fullstack cahllenge might be released')
console.info('30 Days of HTML and CSS Challenge might be released')

// console asserts
console.assert(4 > 3, '4 is greater 3 ') // No result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
    let error = `${i} is not even`
    console.log('The # is is ' + i)
    console.assert(i % 2 === 0, { number: i, error: error })
}

// console group
const nama = ['Asabeneh', 'Brook', 'David', 'John']
const negara = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const pengguna = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
const person = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]

console.group('Nama : ')
console.log(nama)
console.groupEnd()

console.group('Negara : ')
console.log(negara)
console.groupEnd()

console.group('Pengguna : ')
console.log(pengguna)
console.groupEnd()

console.group('Person : ')
console.log(person)
console.groupEnd()

// console count
const func = () => {
    console.count('Function has beend Called')
}
func()
func()
func()
func()

// Console Clear
console.clear()