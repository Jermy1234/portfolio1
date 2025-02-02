const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)
let calculation = []

// calc will push the clicked buttons into the array and 
// will make the console showcase it. 
function calculate(button) {
    console.log('clicked', button.textContent)
    const value = button.textContent

    if (value === "CLEAR") {
        calculation = [] 
        screenDisplay.textContent = '.'

    } else if (value == "=") {
        let result = new Function('return ' + accumulativeCalculation.replace(/x/g, '*').replace(/÷/g, '/'))();
        screenDisplay.textContent = result;
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}
buttons.forEach
    (button=> button.addEventListener('click', ()=> calculate(button)))