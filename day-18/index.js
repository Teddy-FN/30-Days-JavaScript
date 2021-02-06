// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['CSS', 'HTML', 'React', 'JavaScript', 'Golang']
//         callback(false, skills)
//     }, 3000)
// }

// const callback = (error, result) => {
//     try {
//         if (error) {
//             return console.log(error)
//         } else {
//             return console.log(result)
//         }
//     } catch (result) {
//         return console.log(result)
//     }
// }

// doSomething(callback)




const doSomethingh = callback => {
    setTimeout(() => {
        const name = 'Teddy Ferdian Abrar Amrullah'
        callback(name)
    }, 5000)
}
const callback = (result, error) => {
    try {
        if (error) {
            return console.log(error)
        } else {
            return console.log(result)

        }
    } catch (error) {
        return console.log(error)
    }
}

doSomethingh(callback)


// Promise Constructor
// const promise = new Promise((resolve, reject) => {
//     resolve('Success')
//     reject('Fail')
// })

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['CSS', 'HTML', 'JavaScript', 'React']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject(null)
//         }
//     }, 3000)
// })

// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))


// Exmaple When Promise on rejected 
const doPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'React']
        if (skills.indexOf('Node') !== -1) {
            resolve('True')
        } else {
            rejected('False')
        }
    })
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))



// Fetch Api 
// const api = 'https://restcountries.eu/rest/v2/all'
// fetch(api)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data.slice(0, data.length - 1))
//     })
//     .catch(error => console.log(error))



// Async And Await 
// const square = async function (n) {
//     return n * n
// }
// console.log(square(2))



// const square = async function (n) {
//     return n * n
// }
// const value = await square(2)



// Fetching Api using promise method and async,await method 
// Promise 
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(res => res.json())
    .then(response => { console.log(response) })
    .catch(error => console.log(error))
// async and await
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (error) {
        console.log(error)
    }
}
console.log('=== async and await')
fetchData()