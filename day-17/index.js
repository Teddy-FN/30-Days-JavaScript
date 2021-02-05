// Syntax
// localStorage.setItem('key', 'value')
const user = 'Teddy'
localStorage.setItem('Name', user)

localStorage.setItem('age', 22)


// Storing an array to localStorage if we are storing an array an objact array
const skills = [
    'CSS', 'HTML', 'React', 'JavaScript', 'Golang'
]
const makeTheObj = JSON.stringify(skills, undefined, 0)
localStorage.setItem('skills', makeTheObj)
// console.log(localStorage)


let performance = [
    { tech: 'HTML', level: 8 },
    { tech: 'CSS', level: 9 },
    { tech: 'JavaScript', level: 7 },
    { tech: 'React', level: 9 },
    { tech: 'Golang', level: 0 },
]

let skillJson = JSON.stringify(performance)
localStorage.setItem('Performance', skillJson)
console.log(localStorage)

// With Object 
let objUser = {
    nama: 'Teddy',
    age: 22,
    country: 'Indonesia',
    city: 'Surakarta'
}
// Kita buat menjadi JSON
const obj = JSON.stringify(objUser)
localStorage.setItem('obj', obj)
console.log(localStorage)


// Getting localStorage 
// localStorage.getItem('key')

let namaPengguna = localStorage.getItem('Name')
let umurPengguna = localStorage.getItem('age')
let skillsPengguna = localStorage.getItem('skills')
let nilaiSkills = localStorage.getItem('Performance')
let objInfo = localStorage.getItem('obj')
console.log(namaPengguna, umurPengguna, skillsPengguna, nilaiSkills, objInfo)


// Clearing LocalStorage 
localStorage.clear()