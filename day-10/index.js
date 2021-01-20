// Creating empty set 
const emptySet = new Set()
console.log(emptySet)

// Creating set from array 
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
for (language of setOfLanguages) {
    console.log(language)
}


// Adding an elements to a set
// const companies = new Set()
// companies.add('Facebook')
// companies.add('Google')
// companies.add('Amazon')
// companies.add('Microsoft')
// companies.add('Oracle')
// console.log(companies)
// console.log(companies.size)

// Adding With Loop
const companies = ['Facebook', 'Google', 'Amazon', 'Microsoft', 'Oracle']
setofCompanies = new Set()
for (compeny of companies) {
    setofCompanies.add(compeny)
}
console.log('Perusahaan', setofCompanies)
// Deleting of set 
console.log(setofCompanies.delete('Oracle'))
console.log(setofCompanies.size)

// Checking element in the seat 
console.log(setofCompanies.has('Apple')) // false
console.log(setofCompanies.has('Facebook')) // true

// Clearing set
console.log(setofCompanies.clear())
console.log(setofCompanies)


// Cara menggunakan set dan contoh implementasi
const lang = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setSet = new Set(lang)
console.log(setSet)

const arr = new Array()
const obj = new Object()
console.log(obj)

for (const langs of setSet) {
    const filterLang = lang.filter((res) => res === langs)
    console.log(filterLang)
    const pushOnArr = arr.push({ lang: langs, count: filterLang.length })
    console.log(pushOnArr)
}
console.log(arr)


const num = [1, 2, 3, 4, 5, 6, 7,]
const numbers = new Set(num)
console.log(numbers)

// 
let a = [1, 2, 3, 4, 5]
let b = [2, 3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)


// Intersection Of Sets
// let numA = [1, 2, 3, 4, 5]
// let numB = [3, 4, 5, 6]

// let isiNumA = new Set(numA)
// let isiNumB = new Set(numB)

// let iniIsiC = numA.filter((numb) => isiNumB.has(numb))
// let isiNumC = new Set(iniIsiC)
// console.log(isiNumC)


// Difference of sets 
let numC = [1, 2, 3, 4, 5]
let numD = [3, 4, 5, 6]

let isiNumC = new Set(numC)
let isiNumD = new Set(numD)

let varC = numC.filter((num) => !isiNumD.has(num))
console.log(varC)


// Map
// const map = new Map()
// console.log(`Map ${map}`)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)


// Adding Values to the map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting values to the map
console.log(countriesMap.get('Finland'))

// Checking key in the map
console.log(countriesMap.has('Finland'))

// Getting all values from 
for (const country of countriesMap) {
    console.log(country)
}

for (const [country, city] of countriesMap) {
    console.log(country, city)
}

