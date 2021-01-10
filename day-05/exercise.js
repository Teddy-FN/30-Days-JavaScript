// Level 1
// const newArr = new Array() // 1
let newArr = [] // 1
// console.log(newArr)
newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 2
console.log(newArr.length) // 3

// 4.
// Get First  
console.log(newArr[0])
// Get Middle
console.log(newArr[4])
// Get Last 
console.log(newArr[newArr.length - 1])

// 5. 
let mixedDataTypes = ['string', 0, true, false, null, undefined]
mixedDataTypes.length > 5 ? console.log('The Array Greater than 5') : console.log('The Array Less Than 5')

// 6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies) // 7
console.log(itCompanies.length) // 8
console.log(itCompanies[0]) // 9
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length - 1])

console.log(itCompanies[0]) // 10
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])

let newIt = itCompanies.toString()
let upperCaseWord = newIt.toUpperCase()
console.log(upperCaseWord) // 11

// 12 
console.log(itCompanies.concat('Are big IT Companies')) // 12

// 13
let check = itCompanies.indexOf('Facebook')
console.log(check)
if (check != -1) {
    console.log('Company is Exist')
} else {
    console.log('Company Doesn\'t exist')
}

// 14






// 15
let sorting = itCompanies.sort()
console.log(sorting)

// 16 
let reverseIt = itCompanies.reverse()
console.log(reverseIt)

// 17
let sliceFirst = itCompanies.slice(0)
console.log(sliceFirst)

// 18
let sliceLast = itCompanies.slice(6)
console.log(sliceLast)

// 19 
let sliceMid = itCompanies.slice(3, 6)
console.log(sliceMid)


// 20
itCompanies.shift()
console.log(itCompanies)


// 21
itCompanies.pop()
console.log(itCompanies)

// 22 
let removeAllItems = itCompanies.splice()
console.log(removeAllItems)