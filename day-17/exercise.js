// Number 1 
const user = {
    firstName: 'Teddy',
    lastName: 'Ferdian',
    age: 22,
    country: 'Indonesia',
    city: 'Surakarta'
}

const objUser = JSON.stringify(user, undefined, 0)
localStorage.setItem('Obj', objUser)
console.log(localStorage)