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
const previousExpressionDisplay = document.getElementById("previousExpressionDisplay")

const sound = new Audio("nochance.mp3")

const soundFiles = [sound, sound, sound]

const digitSoundProbability = 0.8
const operatorSoundProbability = 0.3
const equalSoundProbability = 1.0

let currentExpressionDisplay = ""
let currentExpressionCode = ""

function playRandomSound() {
    // get random index between 0 and length of array - 1
    const randomIndex =  Math.floor( Math.random()*soundFiles.length)

    // return that sound
    soundFiles[randomIndex].play()
}

ACButton.addEventListener("click", ()=> {
    currentExpressionCode = ""
    currentExpressionDisplay = ""
    
    display.value = ""
    previousExpressionDisplay.value = ""
})

negateButton.addEventListener("click", ()=> {

    currentExpressionDisplay += "-"
    currentExpressionCode += "-"

    updateDisplay()

    playRandomSound()
})

squaredButton.addEventListener("click", ()=> {

    console.log(currentExpressionCode)

    const numbers = currentExpressionCode.split(/[\+\-\*\/]/)
    console.log(numbers)
  
    let lastNumber = numbers[numbers.length-1]
    
    // delete lastNumber from currentExpressionCode
    currentExpressionCode = currentExpressionCode.slice(0, currentExpressionCode.length - lastNumber.length)
   
    // append (lastNumber * lastNumber) to currentExpressionCode
    const result = lastNumber*lastNumber
    currentExpressionCode+= `${result}`
    console.log(currentExpressionCode)

    currentExpressionDisplay+="^2"

    updateDisplay()
})

sqrtButton.addEventListener("click", ()=> {

    // 4+ 5 - 9
    // 4 + 5 - 9
    console.log(currentExpressionCode)

    const numbers = currentExpressionCode.split(/[\+\-\*\/]/)
    console.log(numbers)
  
    let lastNumber = numbers[numbers.length-1]
    
    // delete lastNumber from currentExpressionCode
    currentExpressionCode = currentExpressionCode.slice(0, currentExpressionCode.length - lastNumber.length)
   
    // append (lastNumber * lastNumber) to currentExpressionCode
    const result = Math.sqrt(lastNumber)
    currentExpressionCode+= `${result}`
    console.log(currentExpressionCode)

    // add the sqrt symbol BEFORE the last number
    currentExpressionDisplay 

    currentExpressionDisplay+="^1/2"

    updateDisplay()

    updateDisplay()
})

plusButton.addEventListener("click", ()=> {
    currentExpressionCode += "+"
    currentExpressionDisplay += " + "

    updateDisplay()
})

minusButton.addEventListener("click", ()=> {
    currentExpressionCode += "-"
    currentExpressionDisplay += " - "

    updateDisplay()
})

timesButton.addEventListener("click", ()=> {
    currentExpressionCode += "*"
    currentExpressionDisplay += " × "

    updateDisplay()
})

divideButton.addEventListener("click", ()=> {
    currentExpressionCode += "/"
    currentExpressionDisplay += " ÷ "

    updateDisplay()
})

equalsButton.addEventListener("click", ()=> {
    const result = eval(currentExpressionCode)

    display.value = result
    previousExpressionDisplay.value = currentExpressionDisplay

    currentExpressionDisplay = result
    currentExpressionCode = result
})

function appendDigit(digit) {

    currentExpressionCode += digit
    currentExpressionDisplay += digit

    updateDisplay()
}

function updateDisplay()
{
    display.value = currentExpressionDisplay
}

oneButton.addEventListener("click", ()=> {
    appendDigit("1")

    if( Math.random() <= digitSoundProbability ) {
        playRandomSound()
    }

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

fiveButton.addEventListener("click", ()=> {
    appendDigit("5")
})

sixButton.addEventListener("click", ()=> {
    appendDigit("6")
})

sevenButton.addEventListener("click", ()=> {
    appendDigit("7")
})

eightButton.addEventListener("click", ()=> {
    appendDigit("8")
})

nineButton.addEventListener("click", ()=> {
    appendDigit("9")
})

zeroButton.addEventListener("click", ()=> {
    appendDigit("0")
})

pointButton.addEventListener("click", ()=> {
    appendDigit(".")
})