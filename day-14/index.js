// Error Handling
// try {
//     // code that may throw an error
// } catch (err) {
//     // code to be executed if an error occurs
// } finally {
//     // code to be executed regardless of an error occurs or not
// }

// Example
try {
    let lastName = 'Teddy'
    // let lastName = 'Ferdian'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.error(err)
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case i will be excuted')
}


// Throw 'error'
// throw 'Error 2'
// throw 42
// throw true
// throw new Error('Required')

// const throwErrorExample = () => {
//     let message
//     let x = prompt('enter Number : ', 'Enter Here')
//     try {
//         if (x == '') throw 'Empty'
//         if (isNaN(x)) throw 'Not A Number'
//         x = Number(x)
//         if (x <= 5) throw 'To Low'
//         if (x >= 10) throw 'TO High'
//     } catch (err) {
//         console.log(err)
//     }
// }
// throwErrorExample()
