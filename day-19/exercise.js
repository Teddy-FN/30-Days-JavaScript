// Create A Closure Which One Inner Function
function innerFunction() {
    let count = 0
    function plusOne() {
        return count++
    }
    function minusOne() {
        return count--
    }
    return {
        plus: plusOne(),
        minus: minusOne()
    }
}