// Creating a pattern with RegExp 
// let pattern = 'love'
// let regEx = new RegExp(pattern)
// console.log(regEx)

// Declaring regular expression 
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
console.log(regEx) // /love/gi

// Declaring a regEx pattern using object 
let regEx1 = new RegExp('love', 'gi')
console.log(regEx1) // /love/gi

// creating a pattern without regExp constructor 
let regEx2 = /love/gi
console.log(regEx2)

// regExp object method
// test() -> test for a match in string. it return true / false 
const str = 'I love JavaScript'
const pattern1 = /love/
const result = pattern1.test(str)
console.log(result) // true

// match -> return an array containing all of matches including capturing groups 
const str2 = 'I love JavaScript'
const pattern2 = /love/
const result2 = str2.match(pattern2)
console.log(result2) // [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]

const pattern3 = /love/g
const result3 = str2.match(pattern3)
console.log(result3) // [ 'love' ]

// Search() -> Test for a match in a string, return the index if match, and return -1 if the search fails
const str3 = 'I love JavaScript'
const pattern4 = /love/g
const pattern5 = /java/g
const result4 = str3.search(pattern4)
const result5 = str3.search(pattern5)
console.log(result4) // 2
console.log(result5) // -1

// Replace() -> executes a search for a match in a a string, and replace the matched with a replacement substring
const txt = 'Python is a beatiful language that human begin has a ever created.\ I recomend python for a first programming languages'

mathReplaced = txt.replace(/Python|python/, 'JavaScript')
mathReplaced2 = txt.replace(/Python|python/g, 'JavaScript')
console.log(mathReplaced)
console.log(mathReplaced2)

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \ p%e%o%ple.\ I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\ D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g, '')
console.log(matches)


// Square Bracket 
const pattern6 = /[Aa]pple/g
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'
const matches2 = txt3.match(pattern6)
console.log(matches2)

const pattern7 = /[Aa]pple|[Bb]anan/g
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches3 = txt4.match(pattern7)
console.log(matches3)


// Escape Character
const pattern8 = /\d/g
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches4 = txt5.match(pattern8)
console.log(matches4)

const pattern9 = /\d+/g
const txt6 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt6.match(pattern9)
console.log(matches5)


// One or More Times(+)
const pattern10 = /\d+/g
const txt7 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txt7.match(pattern10)
console.log(matches6)

// Period(.)
const pattern11 = /[a]./g
const txt8 = 'Apples and banana are fruits'
const matches7 = txt8.match(pattern11)
console.log(matches7)

const pattern12 = /[a].+/g
const txt9 = 'Apple and banana are fruits'
const matches8 = txt9.match(pattern12)
console.log(matches8)

// Zero or more times(*)
const pattern13 = /[a].*/g
const txt10 = 'Apple and banana are fruits'
const matches9 = txt10.match(pattern13)
console.log(matches9)

// Zero or one times(?)
const text = 'I am not sure if there is a convention how to write the word e-mail.\ Some people write it email others may write it as Email or E-mail.'
const pattern14 = /[Ee]-?mail/g
matches10 = text.match(pattern14)
console.log(matches10)


// Quantifier in regExp 
const text2 = 'This regular expression example was made in December 6,  2019.'
const pattern15 = /\d{1,4}/g
const matches11 = text2.match(pattern15)
console.log(matches11)

// Carts 
const text3 = 'This regular expression example was made in December 6,  2019.'
const pattern16 = /^This/
const matches12 = text3.match(pattern16)
console.log(matches12)

// negation 
const text4 = 'This regular expression example was made in December 6,  2019.'
const pattern17 = /[^A-Za-z,.]+/g
const matches13 = text4.match(pattern17)
console.log(matches13)

// Exact Match 
let pattern18 = /^[A-Z][a-z]{3,12}$/
let names = 'Teddy'
let hasilAkhir = pattern18.test(names)
console.log(hasilAkhir)