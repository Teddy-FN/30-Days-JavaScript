// Classess
// class ClassName {
//     // Code Here
// }
// // Example 
// class Person {
//     // Code goes here
// }

// class Person {

// }
// const person = new Person()
// console.log(person)

// class Person {
//     constructor(firstName, lastName) {
//         console.log(this)
//         this.firtName = firstName
//         this.lastName = lastName
//     }
// }
// const person = new Person('Teddy', 'Ferdian')
// const person1 = new Person('Bella', 'Shinta')
// const Person2 = new Person('Bambang', 'Pamungkas')
// console.log(person)
// console.log(person1)
// console.log(Person2)

// class InfoPerson {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }
// const user = new InfoPerson('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// console.log(user)

// // Default Value On Class 
// class infoUser1 {
//     constructor(
//         firstName = 'Teddy',
//         lastName = 'Ferdian',
//         age = 22,
//         country = 'Indonesia',
//         city = 'Surakarta'
//     ) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }
// const user2 = new infoUser1('Tom', 'Delonge', 22, 'USA', 'San Diego')
// console.log(user2)


// // Class Method
// class Person3 {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
//     getFullName() {
//         const fulName = this.firstName + ' ' + this.lastName
//         return fulName
//     }
// }
// const user3 = new Person3('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// const user4 = new Person3('Bella', 'Purwa', 20, 'Indonesia', 'Surakarta')
// console.log(user3.getFullName())
// console.log(user4.getFullName())

// class Person {
//     constructor(firstName, lastName, age, country, city,) {
//         this.firstName = firstName,
//             this.lastName - lastName,
//             this.age = age,
//             this.country = country,
//             this.city = city,
//             this.score = 0,
//             this.skills = [

//             ]
//     }
//     getFullName = () => {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
// }
// const user = new Person('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// const user2 = new Person('Bella', 'Purwa', 20, 'Indonesia', 'Surakarta')
// console.log(user.skills)
// console.log(user2.skills)

// console.log(user.score)
// console.log(user2.score)


// // Getter 
// class Person2 {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName = () => {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getskills() {
//         return this.skills
//     }
// }
// const user3 = new Person2(
//     'Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta'
// )
// const user4 = new Person2(
//     'Bella', 'Purwa', 20, 'Indonesia', 'Surakarta'
// )
// console.log(user3.getScore)
// console.log(user4.getScore)
// console.log(user3.getskills)
// console.log(user4.getskills)



// // Setter 
// class Person3 {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName = () => {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         this.score += score
//     }
//     set setSkills(skills) {
//         this.skills.push(skills)
//     }
// }
// const userData = new Person3('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// const userData1 = new Person3('Bella', 'Purwa', 20, 'Indonesia', 'Surakarta')

// userData.score = 1
// userData.setSkills = 'HTML'
// userData.setSkills = 'CSS'
// userData.setSkills = 'REACT'

// userData1.score = 2
// userData1.setSkills = 'Planning'
// userData1.setSkills = 'Managing'
// userData1.setSkills = 'Organitizing'

// console.log(userData.score)
// console.log(userData.skills)
// console.log(userData1.score)
// console.log(userData1.skills)


// MORE COMPLEKS 
// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName = () => {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
//     // Getter 
//     get getScore() {
//         return this.getScore
//     }
//     get getSkills() {
//         return this.skills
//     }
//     // Setter 
//     set setScore(score) {
//         return this.score += score
//     }
//     set setSkills(Skills) {
//         return this.skills.push(Skills)
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills = this.skills > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` 
//         and ${this.skills[this.skills.length - 1]}`
//         let formattedSkills = skills ? `He Knows ${skills}` : ''
//         let userProfile = `Hello My name is ${fullName}, I'm ${this.age}, Im From ${this.city}, ${this.country}. I can use technology ${formattedSkills}`
//         return userProfile
//     }
// }
// const user1 = new Person('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// user1.score = 1
// user1.setSkills = 'HTML'
// user1.setSkills = 'CSS'
// user1.setSkills = 'REACT'
// console.log(user1.getPersonInfo())
// console.log(user1.getSkills)
// console.log(user1)


// More Complek && STATIC METHOD
// class Person {
//     constructor(firstName, lastName, age, city, country) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.city = city
//         this.country = country
//         this.skills = []
//         this.score = 0
//     }
//     getFullName = () => {
//         const fullName = `${this.firstName} ${this.lastName}`
//         return fullName
//     }
//     // Getter
//     get getSkills() {
//         return this.skills
//     }
//     get getScore() {
//         return this.score
//     }
//     // Setter
//     set setScore(score) {
//         return this.setScore += score
//     }
//     set setSkills(skills) {
//         return this.skills.push(skills)
//     }

//     getUserInfo = () => {
//         let nameUser = this.getFullName()
//         let skills =
//             this.skills > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` And ${this.skills[this.skills.length - 1]}`
//         let formattedSkills = skills ? `He Knows ${skills}` : ''
//         let infoUser = `Hello My name is ${nameUser}, Im ${this.age}, Iam from ${this.city}, ${this.country}, I can use Technology ${formattedSkills}`
//         return infoUser
//     }

//     static favoriteSkill() {
//         const skills = ['HTML', 'CSS', 'React', 'Node']
//         const index = Math.floor(Math.random() * skills.length)
//         return skills[index]
//     }

//     static showTimeDate() {
//         let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth()
//         let date = now.getDate()
//         let hours = now.getHours()
//         let minutes = now.getMinutes()
//         if (hours < 10) {
//             hours = '0' + hours
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes
//         }
//         let dateMonthYear = date + '.' + month + '.' + year
//         let time = hours + ':' + minutes
//         let fullTime = dateMonthYear + time
//         return fullTime
//     }
// }

// console.log(Person.favoriteSkill())
// console.log(Person.showTimeDate())

// // Inheritance 
// class Student extends Person {
//     saySomething() {
//         console.log('I am A Child Component')
//     }
// }
// const s1 = new Student('Teddy', 'Ferdian', 22, 'Surakarta', 'Indonesia')
// console.log(s1)
// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getUserInfo())