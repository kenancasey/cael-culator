const oneButton = document.getElementById("1Button")
const twoButton = document.getElementById("2Button")
const threeButton = document.getElementById("3Button")
const fourButton = document.getElementById("4Button")
const fiveButton = document.getElementById("5Button")
const sixButton = document.getElementById("6Button")
const sevenButton = document.getElementById("7Button")
const eightButton = document.getElementById("8Button")
const nineButton = document.getElementById("9Button")
const zeroButton = document.getElementById("0Button")

const plusButton = document.getElementById("plusButton")
const minusButton = document.getElementById("minusButton")
const timesButton = document.getElementById("timesButton")
const divideButton = document.getElementById("divideButton")
const equalsButton = document.getElementById("equalsButton")

const squaredButton = document.getElementById("squaredButton")
const sqrtButton = document.getElementById("sqrtButton")
const negateButton = document.getElementById("negateButton")
const pointButton = document.getElementById("pointButton")
const ACButton = document.getElementById("ACButton")

const display = document.getElementById("display")

const sound = new Audio("test.mp3")

// playButton.addEventListener( "click", () => {
//     sound.play()
// })

let currentNumberString = ""
let savedNumber = 0
let currentOperation = ""
let expectingNewNumber = false

ACButton.addEventListener("click", ()=> {
    currentNumberString = ""
    expectingNewNumber = false
    savedNumber = 0
    currentOperation = ""

    updateDisplay()
})

negateButton.addEventListener("click", ()=> {

    // convert the firstNumber from a string to a number
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result = number * -1

    // convert back to a string
    currentNumberString = result.toString()

    updateDisplay()
})

squaredButton.addEventListener("click", ()=> {

    // convert the firstNumber from a string to a number
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result = number * number

    // convert back to a string
    currentNumberString = result.toString()

    updateDisplay()
})

sqrtButton.addEventListener("click", ()=> {

    // convert the currentnumber from a string to a number
    const number = Number.parseFloat(currentNumberString)

    // do the math
    const result = Math.sqrt(number)

    // convert back to a string
    currentNumberString = result.toString()

    updateDisplay()
})

plusButton.addEventListener("click", ()=> {
    currentOperation="+"
    expectingNewNumber = true

    // convert the currentNumberString from a string to a number
    savedNumber = Number.parseFloat(currentNumberString)
})

equalsButton.addEventListener("click", ()=> {
    // convert the currentnumber from a string to a number
    const number = Number.parseFloat(currentNumberString)
    let result

    // do the math
    if(currentOperation==="+"){
        result = savedNumber + number
    }

    // convert back to a string
    currentNumberString = result.toString()

    updateDisplay()
})

function appendDigit(digit) {
    
    if(expectingNewNumber)
    {
        currentNumberString = ""
        expectingNewNumber = false
    }

    currentNumberString += digit 

    updateDisplay()
}

function updateDisplay()
{
    display.value = currentNumberString
}

oneButton.addEventListener("click", ()=> {
    appendDigit("1")
})

twoButton.addEventListener("click", ()=> {
    appendDigit("2")
})

threeButton.addEventListener("click", ()=> {
    appendDigit("3")
})

fourButton.addEventListener("click", ()=> {
    appendDigit("4")
})

