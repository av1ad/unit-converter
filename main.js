const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMeter = 0.3048
const literToGallon =  0.264
const gallonToLiter = 3.78541
const kiloToPound =  2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = numberInput.value

    lengthEl.textContent = `${baseValue} Meters = ${round(baseValue * meterToFeet)} Feet
        | ${baseValue} Feet = ${round(baseValue * feetToMeter)}`
    volumeEl.textContent = `${baseValue} Liters = ${round(baseValue * literToGallon)} Gallons 
        | ${baseValue} Gallons = ${round(baseValue * gallonToLiter)}`
    massEl.textContent = `${baseValue} Kilos = ${round(baseValue * kiloToPound)} Pounds 
        | ${baseValue} Pounds = ${round(baseValue * poundToKilo)}`
})

function round(num) {
    return +(Math.round(num + "e+2") + "e-2")
}