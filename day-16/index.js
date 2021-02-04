// const user = `{
//     "users": [
//         {
//             "firstName": "Teddy",
//             "lastName": "Ferdian",
//             "age": 22,
//             "email": "teddferdian@mail.com"
//         },
//         {
//             "firstName": "Bella",
//             "lastName": "Purwa",
//             "age": 20,
//             "email": "bella@mail.com"
//         },
//         {
//             "firstName": "Jung",
//             "lastName": "kook",
//             "age": 22,
//             "email": "jungkook@mail.com"
//         }
//     ]
// }`
// const userObj = JSON.parse(user, (key, value) => {
//     let newValue =
//         typeof value === 'string' && key != 'email' ? value.toLowerCase() : value
//     return newValue
// })
// console.log(userObj)

// Converting object to JSON
const users = {
    alex: {
        email: 'alex@mail.com',
        skills: ['HTML', 'CSS', 'JS'],
        age: 20,
        isLoggedIn: false,
        points: 20
    },
    asab: {
        email: 'asab@mail.com',
        skills: [
            'HTML',
            'CSS',
            'JS',
            'Redux',
            'Express',
            'React'
        ],
        age: 25,
        isLoggedIn: false,
        points: 20
    },
    brook: {
        email: 'brooklyn@mail.com',
        skills: [
            'HTML',
            'CSS',
            'JS',
            'React'
        ],
        age: 28,
        isLoggedIn: false,
        points: 20
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const userPerson = JSON.stringify(users, undefined, 4)
console.log(userPerson)


// Using A Filter Array With JSON.stringify()
const userInfo = {
    fistName: 'Teddy',
    lastName: 'Ferdian',
    country: 'Indonesia',
    city: 'Surakarta',
    email: 'tedd.ferdy@gamil.com',
    skilss: [
        'HTML', 'CSS', 'ReactJs', 'Golang'
    ],
    age: 22,
    isLoggedIn: false,
    points: 200
}

const PersonalityInfo = JSON.stringify(userInfo, ['firstName', 'lastName', 'age', 'city', 'country', ' email'], 4)
console.log(PersonalityInfo)


