// Clossure JavaScript
function Closure() {
    let count = 0 + 1
    function Plus() {
        return count++
    }
    return Plus
}
const Plus = Closure()
console.log(Plus())
console.log(Plus())
console.log(Plus())
console.log(Plus())


// Try Inner Function
function outerFunction() {
    let count = 0
    function plusOne() {
        return count + 1
    }
    function minusOne() {
        return count--
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const countFunc = outerFunction()
console.log(countFunc.plusOne)
console.log(countFunc.plusOne)
console.log(countFunc.minusOne)


