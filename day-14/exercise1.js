const Part1 = () => {
    let message
    let number1 = parseInt(prompt('Enter Your First Number', 'Enter Here'))
    let number2 = parseInt(prompt('Enter Your Second Number', 'Enter Here'))
    // let result = number1 + number2
    console.log(result)
    try {
        if (number1 == '' && number2 == '') throw 'MASUKIN ANGKA WOY!!!!'
        if (isNaN(result)) throw 'Youre Not Input A Number'
        // if (result % 2 === 0) throw 'The Result is Even Number'
        // if (result % 2 === 1) throw 'The Result is Odd Number'
        result = Number()
        if (number1 + number2 <= 10) {
            throw 'Angka yang anda masukan lebih kurang dari 10'

        } else if (number1 + number2 >= 10 && number1 + number2 <= 15) {
            throw 'Angka yang anda masukan leboh dari 10 dan kurang dari 15'
        }
    } catch (error) {
        console.log('Terdapat Eror', error)
    } finally {
        console.log('Finally')
    }
}
Part1()