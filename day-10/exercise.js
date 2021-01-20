// Create empty set
// Number 1 
const empty = new Set()
console.log(empty)

// Number 2
const forLooping = new Set()
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0 + 1; i <= 10; i++) {
    forLooping.add(i)
}
for (const num of number) {
    forLooping.add(num)
}
console.log(forLooping)

// Number 3 > remove
forLooping.delete(10)
console.log(forLooping)

// Number 4 -> Clear 
forLooping.clear()
console.log(forLooping)

// Number 5
const newSet = new Set()
const stringArr = ['Hello', 'World', 'Good', 'Morning', 'Everyone']

for (const arr of stringArr) {
    newSet.add(arr)
}
console.log(newSet)

// Number 6
const newSett = new Set()
const countrys = ['Indonesia', 'Singapore', 'Malaysia', 'Australia', 'Germany', 'Germany', 'Russia']
const newArr = new Array()

for (const addCountry of countrys) {
    newArr.push({ negara: addCountry, count: addCountry.length })
}
console.log(newArr)