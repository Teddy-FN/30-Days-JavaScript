// Explain
/*
    1.  ForEach -> iterate an array elements Using ForEaach hanya untuk tipe data array
        Map -> Iterate an array element and modify the array element, its take back a callback function with elements index array return array baru
        filter -> filter out items filtering condition and return a new array
        reduce -> reduce takes a callback function
*/
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
console.log(products.price)

// 2 Define Function 
const exercise = () => {
    // 3
    countries.forEach((element) => console.log('Country :', element.toLowerCase()))
    // 4 
    names.forEach((name) => console.log('Name :', name.toLowerCase()))
    // 5 
    numbers.forEach((number) => console.log('Number :', number))

    // 6 
    const country = countries.map((n) => n.toUpperCase())
    console.log(country)
    // 7 Country Length
    const countryLength = countries.map((BanyakNegara) => BanyakNegara.length)
    console.log('Jumlah negara', countryLength)
    //  8 
    const number = numbers.map((num) => num)
    console.log('Nomor', number)
    //  9
    const nama = names.map((user) => user.toUpperCase())
    console.log('Nama :', nama)
    // 10 
    const priceProduct = products.map((price) => products.price)
    console.log('Harga', priceProduct)

    // 11 
    const lands = countries.filter((filter) => filter.includes('land'))
    console.log('Country With Land :', lands)
    // 12
    const countrySixChara = countries.filter((chara) => chara.length <= 6)
    console.log(countrySixChara)
    // 13 
    const contryMoreSixChara = countries.filter((charaCountry) => charaCountry.length > 6)
    console.log(contryMoreSixChara)
    // 14
    const countryWithE = countries.filter((eChara) => eChara.startsWith('E'))
    console.log(countryWithE)
    // 15
    const price = products.filter((res) => res.price)
    console.log('Price :', price)

    // Number 17
    const reduceNumber = numbers.reduce((nomor, sum) => nomor + sum, 0)
    console.log('Penambahan Nomor', reduceNumber)
    // Nomor 18
    const moreCountry = 'estonia'
    let penambahanNegara = countries.reduce((res, moreCountry) => res + moreCountry, moreCountry)

    // 20
    const someName = names.some((res) => res.length >= 7)
    console.log(someName)
    // 21
    const everyCountry = countries.every((res) => res === 'land')
    console.log(everyCountry)

    // 23
    const sixCharaCountry = countries.find((res) => res.length == 6)
    console.log(sixCharaCountry)

    // 24
    const findIndexCountry = countries.findIndex((chara) => chara.length == 6)
    console.log(findIndexCountry)
    // 25
    const findCountry = countries.findIndex((res) => res === 'Norway')
    console.log(findCountry)
    // 26
    const findCountry2 = countries.findIndex((res) => res === 'Russia')
    console.log(findCountry2)
}
exercise()

// 16 declare function 
const getStringLists = arr => {
    return console.log(arr)
}
const list = ['Hello', 'World', 'Its Function']
const arrayItem = new Array()
arrayItem.push(list)
getStringLists(arrayItem)





